import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Animated, Easing, View, Text, StyleSheet } from 'react-native';
import Filler from './Filler';
import { wrongMarkerChosen } from '../../actions/thunks';
import { addPoints } from "../../actions/score";

class GameBar extends Component {
  state = {
    timer: new Animated.Value(100)
  };

  componentDidUpdate(prevProps) {
    if (!_.isEqual(prevProps.correctMarker, this.props.correctMarker)) {
      this.startTimer();
    }

    // Add points whenever they are requested
    if (this.props.scoreboard.requestPoints) {
      const points = Math.floor(this.state.timer.__getValue());
      this.props.addPoints(points);
    }

    // If the played win or lose the game, stop the timer
    if (this.props.showGameWon || this.props.showGameLost) {
      Animated.timing(this.state.timer).stop();
    }
  }

  startTimer() {
    this.setState({ timer: new Animated.Value(100) }, () => {
      setTimeout(() => {
        Animated.timing(this.state.timer, {
          toValue: 0,
          duration: 14000,
          easing: Easing.linear
        }).start(({ finished }) => {
          if (finished) {
            // Time ran out, player lost the game
            this.props.wrongMarkerChosen();
          }
        });
      }, 1500);
    });
  }

  render() {
    return (
      <View style={styles.bar}>
        <Filler progress={this.state.timer} />
        <Text style={styles.barText}>{this.props.correctMarker.title}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ game, layers }) => ({
  correctMarker: game.correctMarker,
  showGameWon: layers.gameWon,
  showGameLost: layers.gameLost,
  scoreboard: game.scoreboard
});

export default connect(
  mapStateToProps,
  { wrongMarkerChosen, addPoints }
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
    zIndex: 10
  },
  barText: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    zIndex: 30
  }
});
