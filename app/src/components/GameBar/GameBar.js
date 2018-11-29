import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Animated, Easing, View, Text } from 'react-native';
import Filler from './Filler';
import styles from './styles';
import { GAME_PAUSED, GAME_ON, GAME_OFF } from '../../actions';
import { wrongMarkerChosen } from '../../actions/thunks';
import { addPoints } from '../../actions/score';

class GameBar extends Component {
  state = {
    timer: new Animated.Value(100),
  };

  componentDidMount() {
    setTimeout(() => {
      this.startTimer();
    }, 1500);
  }

  componentDidUpdate(prevProps) {
    const {
      correctMarker,
      gameStatus,
      scoreboard,
      addPoints,
      showGameWon,
      showGameLost,
    } = this.props;

    switch (gameStatus) {
      case GAME_PAUSED:
        this.stopTimer();
        break;
      case GAME_ON:
        this.startTimer();
        break;
      case GAME_OFF:
        this.stopTimer();
        // Reset timer once if gameStatus is GAME_OFF
        if (prevProps.gameStatus !== gameStatus) this.resetTimer();
        break;
    }
    this.checkCorrectMarker(prevProps.correctMarker, correctMarker);

    // Add points whenever they are requested
    if (scoreboard.requestPoints) {
      const points = Math.floor(this.state.timer.__getValue());
      addPoints(points);
    }

    // If the played win or lose the game, stop the timer
    if (showGameWon || showGameLost) {
      this.stopTimer();
    }
  }

  checkCorrectMarker(prevMarker, correctMarker) {
    if (!_.isEqual(prevMarker, correctMarker)) {
      this.stopTimer();
      this.resetTimer();

      // Delay game to start after a correct marker is picked
      setTimeout(() => {
        this.startTimer();
      }, 1500);
    }
  }

  startTimer() {
    Animated.timing(this.state.timer, {
      toValue: 0,
      duration: 14000,
      easing: Easing.linear,
    }).start(({ finished }) => {
      // TODO: CHECK IF IS THIS IS CORRECT?
      if (finished) {
        // Time ran out, player lost the game
        this.props.wrongMarkerChosen();
      }
    });
  }

  stopTimer() {
    Animated.timing(this.state.timer).stop();
  }

  resetTimer() {
    this.setState({ timer: new Animated.Value(100) });
  }

  render() {
    const { timer } = this.state;
    const { correctMarker, showMainMenu } = this.props;

    if (showMainMenu) return null;

    return (
      <View style={styles.bar}>
        <Filler progress={timer} />
        <Text style={styles.barText}>{correctMarker.title}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ game, layers }) => ({
  correctMarker: game.correctMarker,
  gameStatus: layers.gameStatus,
  showMainMenu: layers.mainMenu,
  showGameWon: layers.gameWon,
  showGameLost: layers.gameLost,
  scoreboard: game.scoreboard,
});

export default connect(
  mapStateToProps,
  { wrongMarkerChosen, addPoints },
)(GameBar);
