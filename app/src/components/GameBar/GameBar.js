import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Animated, Easing, View, Text } from 'react-native';
import Filler from './Filler';
import styles from './styles';
import {
  GAME_PAUSED,
  GAME_ON,
  GAME_OFF,
  GAME_STARTING,
  GAME_NEXT_REGION,
} from '../../actions';
import {
  wrongMarkerChosen,
  timeRanOut,
  setupNextRegion,
} from '../../actions/thunks';
import { addPoints } from '../../actions/score';

class GameBar extends Component {
  state = {
    timer: new Animated.Value(100),
  };

  componentDidUpdate(prevProps) {
    const {
      gameStatus,
      scoreboard,
      addPoints,
      showGameWon,
      showGameLost,
      setupNextRegion,
    } = this.props;

    switch (gameStatus) {
      case GAME_STARTING:
        setupNextRegion(true);
        this.resetTimer();
        break;
      case GAME_PAUSED:
        this.stopTimer();
        break;
      case GAME_NEXT_REGION:
        this.resetTimer();
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

    // Add points whenever they are requested
    // Also reset the timer since the correct marker was chosen.
    if (scoreboard.requestPoints) {
      const points = Math.floor(this.state.timer.__getValue());
      addPoints(points);
      this.resetTimer();
    }

    // If the played win or lose the game, stop the timer
    if (showGameWon || showGameLost) {
      this.stopTimer();
    }
  }

  startTimer() {
    const { timeRanOut } = this.props;

    Animated.timing(this.state.timer, {
      toValue: 0,
      duration: 14000,
      easing: Easing.linear,
    }).start(({ finished }) => {
      if (finished) {
        // Time ran out, player lost the game
        timeRanOut();
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
    const { correctMarker, gameStatus } = this.props;

    if (gameStatus === GAME_ON) {
      return (
        <View style={styles.bar}>
          <Filler progress={timer} />
          <Text style={styles.barText}>{correctMarker.title}</Text>
        </View>
      );
    }
    return null;
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
  { wrongMarkerChosen, addPoints, timeRanOut, setupNextRegion },
)(GameBar);
