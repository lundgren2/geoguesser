import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Overlay, Button } from 'react-native-elements';
import { toggleGameWon } from '../../actions/layers';
import { resetGame } from '../../actions/thunks';
import styles from '../GameMenu/styles';

export class GameWon extends Component {
  render() {
    const buttonTitle = 'Play again';
    const gameWonText = 'Congratulations, you won the game!';
    const { toggleGameWon, resetGame } = this.props;

    return (
      <Overlay
        overlayStyle={styles.overlay}
        isVisible={this.props.showGameWon}
        onBackdropPress={() => undefined}
        width="90%"
        height="100%"
      >
        <Text style={styles.text}>{gameWonText}</Text>
        <Button
          key={buttonTitle}
          title={buttonTitle}
          buttonStyle={styles.button}
          onPress={() => {
            toggleGameWon();
            resetGame();
          }}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonText}
        />
      </Overlay>
    );
  }
}

mapStateToProps = ({ layers }) => ({
  showGameWon: layers.gameWon,
});

const mapDispatchToProps = {
  toggleGameWon,
  resetGame,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameWon);
