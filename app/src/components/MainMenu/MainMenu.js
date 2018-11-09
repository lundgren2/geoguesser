import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Animated, StyleSheet, View, Text } from 'react-native';
import { Overlay, Button } from 'react-native-elements';
// import GameScreen from '../Game';
import FadeView from '../FadeView';
import { startGame } from '../../actions/layers';

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
  startGame,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainMenu);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    width: '100%',
    height: '108%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    zIndex: 100,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    width: '100%',
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#0984e3',
  },
  buttonText: {
    color: '#dfe6e9',
  },
});
