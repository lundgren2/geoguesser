import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Overlay, Button } from 'react-native-elements';
import { Location, Permissions } from 'expo';
import FadeView from '../FadeView';
import { startGame } from '../../actions/layers';
import { setMarkersForce } from "../../actions/markers";
import { setupLevel } from "../../actions/thunks";
import { MapView } from 'expo';
import styles from './styles';

export class MainMenu extends Component {
  componentWillMount() {
    this.getLocationAsync();
  };

  menuButton = ({ title, onPress }) => (
    <Button
      key={title}
      title={title}
      buttonStyle={styles.button}
      onPress={() => onPress()}
      containerStyle={styles.buttonContainer}
      titleStyle={styles.buttonText}
    />
  );

  getLocationAsync = async () => {
    let { setMarkersForce } = this.props;
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      // TODO: Do something to tell the user that he does not has access
    }
    const location = await Location.getCurrentPositionAsync({});
    setMarkersForce({
      coordinate: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
      center: location.coords,
      id: 0,
      markerType: "CIRCLE",
    });
  };

  startGame = () => {
      let { startGame, setupLevel } = this.props;
      setupLevel();
      startGame();
  };

  render() {
    const { showMainMenu } = this.props;
    const buttons = [
      { title: 'Start Game', onPress: this.startGame },
      { title: 'Highscore', onPress: this.startGame },
      { title: 'Settings', onPress: this.startGame },
    ];

    return (
      <Overlay
        overlayStyle={styles.overlay}
        isVisible={showMainMenu}
        onBackdropPress={() => undefined}
        width="auto"
        height="auto"
      >
        <FadeView isVisible={showMainMenu}>
          {buttons.map(button => this.menuButton(button))}
        </FadeView>
      </Overlay>
    );
  }
}

const mapStateToProps = ({ layers }) => ({
  showMainMenu: layers.mainMenu,
});

const mapDispatchToProps = {
  startGame, setMarkersForce, setupLevel,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainMenu);
