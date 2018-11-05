import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Animated, Easing } from 'react-native';
import _ from 'lodash';
import { newLevels } from '../../actions/levels';

class GameLogic extends Component {
  state = {
    currentMap: 0,
    correctMarker: 0,
    currentMarkers: [],
    progress: new Animated.Value(100)
  };

  componentDidMount() {
    // this.setupLevel();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentMap !== prevState.currentMap) {
      // this.setupLevel();
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
      correctMarker: currentMarkers[correctMarker].id
    });
    // Start timer for next level
    this.toggleProgress();
  };

  handleMarkerPress = markerId => {
    if (markerId === this.state.correctMarker) {
      if (this.state.currentMap == this.props.levels.length - 1) {
        this.props.newLevels();
        this.setState({ currentMap: 0 });
      } else {
        this.setState({ currentMap: this.state.currentMap + 1 });
      }
    }
  };

  render() {
    let findLocation = '?';
    if (this.state.currentMarkers.length !== 0)
      findLocation = this.state.currentMarkers[this.state.correctMarker].title;

    const gamelogic = {
      currentMarkers: this.state.currentMarkers,
      handleMarkerPress: this.handleMarkerPress,
      progress: this.state.progress,
      findLocation
    };
    return this.props.children(gamelogic);
  }
}

const mapStateToProps = ({ game }) => ({
  markers: game.markers
});

export default connect(
  mapStateToProps,
  { newLevels }
)(GameLogic);
