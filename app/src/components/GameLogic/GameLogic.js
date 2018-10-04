import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Animated, Easing } from 'react-native';

class GameLogic extends Component {
  state = {
    currentMap: 0,
    correctMarker: 0,
    progress: new Animated.Value(100)
  };

  componentDidMount() {
    this.currentMarkers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentMap !== prevState.currentMap) {
      this.currentMarkers();
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

  currentMarkers = () => {
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

  markerPressed = markerId => {
    if (markerId === this.state.correctMarker) {
      // Correct answer
      if (this.state.currentMap == this.props.levels.length - 1) {
        this.setState({ currentMap: 0 });
      } else {
        this.setState({ currentMap: this.state.currentMap + 1 });
      }
    } else {
      // Wrong answer
    }
  };

  render() {
    const gamelogic = {
      currentMarkers: this.state.currentMarkers
        ? this.state.currentMarkers
        : [],
      markerPressed: this.markerPressed,
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
