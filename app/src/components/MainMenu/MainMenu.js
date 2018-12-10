import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Overlay, Button } from 'react-native-elements';
import { Image } from 'react-native';
import FadeView from '../FadeView';
import { setupGame, toggleMainMenu } from '../../actions/layers';
import logo from '../../images/logo.png';
import styles from './styles';

export class MainMenu extends Component {
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

  render() {
    const { setupGame, showMainMenu, toggleMainMenu } = this.props;
    const buttons = [
      {
        title: 'Start Game',
        onPress: () => {
          setupGame();
          toggleMainMenu();
        },
      },
      { title: 'Highscore', onPress: () => {} },
      { title: 'Settings', onPress: () => {} },
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
          <Image style={styles.logo} source={logo} resizeMode={'cover'} />
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
  setupGame,
  toggleMainMenu,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainMenu);
