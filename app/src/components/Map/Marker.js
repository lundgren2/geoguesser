import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleMarkerPress } from '../../actions/thunks';
import { MapView } from 'expo';
import Callout from './Callout';

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
    else
      return (
        <MapView.Marker
          key={marker.id}
          identifier={marker.title}
          coordinate={marker.coordinate}
          onPress={() => {
            if (handleMarkerPress && shouldHandleMarkerPress)
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

const mapStateToProps = ({ game }) => ({
  markerHighlighted: game.markerHighlighted,
});

export default connect(
  mapStateToProps,
  {
    handleMarkerPress,
  },
)(Marker);
