import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Animated, Easing, View, Text } from 'react-native';
import Filler from './Filler';
import styles from './styles';

class GameBar extends Component {
  state = {
    timer: new Animated.Value(100),
    timerOn: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.startTimer();
    }, 1500);
  }

  componentDidUpdate(prevProps) {
    if (!_.isEqual(prevProps.correctMarker, this.props.correctMarker)) {
      this.stopTimer();
      this.resetTimer();
      setTimeout(() => {
        this.startTimer();
      }, 1500);
    } else {
      this.props.gameStatus === 'GAME_PAUSED' &&
        this.state.timerOn &&
        this.stopTimer();

      prevProps.gameStatus === 'GAME_PAUSED' &&
        this.props.gameStatus === 'GAME_ON' &&
        !this.state.timerOn &&
        this.startTimer();
    }
  }

  startTimer() {
    this.setState({ timerOn: true }, () => {
      Animated.timing(
        Animated.timing(this.state.timer, {
          toValue: 0,
          duration: 14000,
          easing: Easing.linear,
        }).start(),
      );
    });
  }

  stopTimer() {
    this.setState({ timerOn: false }, () => {
      Animated.timing(this.state.timer).stop();
    });
  }

  resetTimer() {
    this.setState({ timer: new Animated.Value(100), timerOn: false });
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
