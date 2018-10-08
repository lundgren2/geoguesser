import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Animated, Easing } from 'react-native';
import _ from 'lodash';

class GameLogic extends Component {
  state = {
    currentMap: 0,
    correctMarker: 0,
    currentMarkers: [],
    progress: new Animated.Value(100)
  };

  componentDidMount() {
    this.setupLevel();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentMap !== prevState.currentMap) {
      this.setupLevel();
    }
  }

  toggleProgress = () => {
    this.setState({ progress: new Animated.Value(100) }, () => {
      setTimeout(() => {
        Animated.timing(this.state.progress, {
          toValue: 0,
          duration: 14000,
          easing: Easing.linear
        }).start();
      }, 1500);
    });
  };

  setupLevel = () => {
    // Decide current markers
    const currentMarkers = _.nth(this.props.levels, this.state.currentMap);
    // Decide correct marker
    const correctMarker = _.random(0, currentMarkers.length - 1);
    this.setState({
      currentMarkers,
      correctMarker
    });
    // Start timer for next level
    this.toggleProgress();
  };

  handleMarkerPress = markerId => {
    if (markerId === this.state.correctMarker) {
      if (this.state.currentMap == this.props.levels.length - 1) {
        this.setState({ currentMap: 0 });
      } else {
        this.setState({ currentMap: this.state.currentMap + 1 });
      }
    }
  };

  render() {
    const gamelogic = {
      currentMarkers: this.state.currentMarkers,
      handleMarkerPress: this.handleMarkerPress,
      findLocation: this.state.currentMarkers
        ? this.state.currentMarkers[this.state.correctMarker].title
        : '?',
      progress: this.state.progress
    };
    return this.props.children(gamelogic);
  }
}

const mapStateToProps = ({ levels }) => ({
  levels
});

export default connect(mapStateToProps)(GameLogic);
