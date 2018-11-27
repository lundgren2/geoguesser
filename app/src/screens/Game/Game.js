import React, {Component} from 'react';
import {View, StyleSheet, StatusBar, Animated, Easing} from 'react-native';
import Map from '../../components/Map';
import SettingsButton from '../../components/SettingsButton';
import GameMenu from '../../components/GameMenu';
import GameBar from '../../components/GameBar';
import GameWon from '../../components/GameWon';
import GameLost from '../../components/GameLost';
import Score from '../../components/Score'
import {_} from 'lodash';
import {connect} from "react-redux";
import {wrongMarkerChosen} from "../../actions/thunks";

class Game extends Component {
  state = {
    timer: new Animated.Value(100)
  };

  componentDidUpdate(prevProps) {
    if (!_.isEqual(prevProps.correctMarker, this.props.correctMarker)) {
      this.startTimer();
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
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View style={styles.container}>
          <Map timer={this.state.timer}/>
          <Score/>
          <GameBar timer={this.state.timer}/>
        </View>
        <SettingsButton/>
        <GameMenu/>
        <GameWon/>
        <GameLost/>
      </View>
    );
  };
}

const mapStateToProps = ({ game }) => ({
  correctMarker: game.correctMarker,
});

export default connect(
  mapStateToProps,
  { wrongMarkerChosen }
)(Game);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
