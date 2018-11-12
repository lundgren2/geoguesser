import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Overlay, Button } from 'react-native-elements';
import { Location, Permissions } from 'expo';
import FadeView from '../FadeView';
import { startGame } from '../../actions/layers';
import { setMarkersForce } from "../../actions/markers";
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
      description: "Your position",
      id: 0,
      title: "Your position",
    });
  };

  render() {
    const { startGame, showMainMenu } = this.props;
    const buttons = [
      { title: 'Start Game', onPress: startGame },
      { title: 'Highscore', onPress: startGame },
      { title: 'Settings', onPress: startGame },
    ];

    return (
      <Overlay
        overlayStyle={styles.overlay}
        isVisible={showMainMenu}
        onBackdropPress={() => undefined}
        width="auto"
        height="auto"
      >
        <FadeView isVisible={showMainMenu} finished={startGame}>
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
  startGame, setMarkersForce
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainMenu);
