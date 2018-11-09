import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Animated, Easing, View, Text, StyleSheet } from 'react-native';
import Filler from './Filler';

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
    const { correctMarker } = this.props;
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
});

// const mapDispatchToProps = ({ layers }) => ({
//   startGame,
//   stopGame,
//   togglePauseMenu,
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(GameBar);

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    width: '90%',
    margin: 10,
    height: '6%',
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    borderWidth: 3,
    borderColor: 'rgba(245, 223, 76, .88)',
    borderRadius: 6,
  },
  barText: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    zIndex: 30,
  },
});
