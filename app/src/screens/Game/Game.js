import React, {Component} from 'react';
import {View, StyleSheet, StatusBar, Animated, Easing} from 'react-native';
import Map from '../../components/Map';
import SettingsButton from '../../components/SettingsButton';
import GameMenu from '../../components/GameMenu';
import GameBar from '../../components/GameBar';
import Score from '../../components/Score';
import {connect} from "react-redux";
import _ from 'lodash';


class Game extends Component {
  state = {
    timer: new Animated.Value(100)
  };

  componentDidUpdate(prevProps) {
    if (!_.isEqual(prevProps.correctMarker, this.props.correctMarker)) {
      this.startTimer();
    }
  }

  startTimer() {
    this.setState({ timer: new Animated.Value(100) }, () => {
      setTimeout(() => {
        Animated.timing(this.state.timer, {
          toValue: 0,
          duration: 14000,
          easing: Easing.linear
        }).start();
      }, 1500);
    });
  }

  render()  {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.container}>
          <Map timer={this.state.timer} />
          <Score />
          <GameBar timer={this.state.timer} />
        </View>
        <SettingsButton />
        <GameMenu />
      </View>
    );
  }
}


const mapStateToProps = ({ game }) => ({
  correctMarker: game.correctMarker
});

export default connect(mapStateToProps)(Game);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
