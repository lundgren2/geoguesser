import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Animated, Easing, View, Text } from 'react-native';
import Filler from './Filler';
import styles from './styles';
import { GAME_PAUSED, GAME_ON } from '../../actions';

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
    const { correctMarker, gameStatus } = this.props;

    switch (gameStatus) {
      case GAME_PAUSED:
        this.stopTimer();
        break;
      case GAME_ON:
        this.startTimer();
        break;
    }

    if (!_.isEqual(prevProps.correctMarker, correctMarker)) {
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
    }).start();
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
});

export default connect(mapStateToProps)(GameBar);
