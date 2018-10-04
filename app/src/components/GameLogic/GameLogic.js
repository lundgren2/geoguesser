import React, { Component } from 'react';

class GameLogic extends Component {
  state = {
    correctMarker: 2
  };

  currentMarkers = () => {
    // Decide current markers
    const currentMarkers = [
      {
        id: 1,
        title: 'Stockholm',
        coordinate: { latitude: 59.36, longitude: 18.26 }
      },
      {
        id: 2,
        title: 'Göteborg',
        coordinate: { latitude: 57.71, longitude: 11.98 }
      }
    ];
    // Decide correct marker
    return currentMarkers;
  };

  markerPressed = markerId => {
    let success = true;
    // Answer correct?
    if (markerId === this.state.correctMarker) {
      console.log('##### Correct answer! #####');
    } else {
      console.log('##### Incorrect answer! #####');
      success = false;
    }
    return success;
  };

  render() {
    const gamelogic = {
      currentMarkers: this.currentMarkers(),
      markerPressed: this.markerPressed
    };
    return this.props.children(gamelogic);
  }
}

export default GameLogic;
