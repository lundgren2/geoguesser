import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { handleMarkerPress } from '../../actions/thunks';
import Callout from './Callout';
import { GAME_ON } from '../../actions';

class Marker extends Component {
  componentDidUpdate(prevProps) {
    const {
      marker,
      markerHighlighted: { markerId },
    } = this.props;
    if (marker.id === markerId) setTimeout(() => this.ref.showCallout(), 30);
    else if (
      marker.id === prevProps.markerHighlighted.markerId &&
      marker.id !== markerId
    )
      setTimeout(() => this.ref.hideCallout(), 30);
  }

  render() {
    const {
      marker,
      color,
      handleMarkerPress,
      shouldHandleMarkerPress,
      gameStatus,
      markerHighlighted: { markerId, description },
    } = this.props;

    if (marker.markerType === 'CIRCLE')
      return (
        <MapView.Circle
          center={marker.center}
          radius={4}
          fillColor="rgba(0, 0, 0, 0.2)"
          strokeColor="rgba(0, 0, 0, 0.2)"
          key={marker.id}
          identifier={marker.title}
          coordinate={marker.coordinate}
          onPress={null}
          ref={ref => (this.ref = ref)}
        />
      );

    return (
      <MapView.Marker
        key={marker.id}
        identifier={marker.title}
        coordinate={marker.coordinate}
        onPress={() => {
          if (
            handleMarkerPress &&
            shouldHandleMarkerPress &&
            gameStatus === GAME_ON
          )
            handleMarkerPress(marker.id);
        }}
        pinColor={color}
        ref={ref => (this.ref = ref)}
      >
        <Callout
          isVisible={marker.id === markerId}
          title={marker.title}
          description={description}
        />
      </MapView.Marker>
    );
  }
}

const mapStateToProps = ({ game, layers }) => ({
  markerHighlighted: game.markerHighlighted,
  gameStatus: layers.gameStatus,
});

export default connect(
  mapStateToProps,
  {
    handleMarkerPress,
  },
)(Marker);
