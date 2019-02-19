import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Overlay, Button } from 'react-native-elements';
import { resetGame } from '../../actions/thunks';
import { toggleGameLost } from '../../actions/layers';
import styles from '../GameMenu/styles';

export class GameLost extends Component {
  render() {
    const buttonTitle = 'Try again';
    gameOverText = 'You lost the game!';

    const { resetGame, showGameLost, toggleGameLost } = this.props;

    return (
      <Overlay
        overlayStyle={styles.overlay}
        isVisible={showGameLost}
        onBackdropPress={() => undefined}
        width="90%"
        height="100%"
      >
        <Text style={styles.text}>{gameOverText}</Text>
        <Button
          key={buttonTitle}
          title={buttonTitle}
          buttonStyle={styles.button}
          onPress={() => {
            resetGame();
            toggleGameLost();
          }}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonText}
        />
      </Overlay>
    );
  }
}

mapStateToProps = ({ layers }) => ({
  showGameLost: layers.gameLost,
});

const mapDispatchToProps = {
  resetGame,
  toggleGameLost,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameLost);
