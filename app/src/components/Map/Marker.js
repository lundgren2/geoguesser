import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleMarkerPress } from '../../actions/thunks';
import { MapView } from 'expo';
import { View, Text } from 'react-native';

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

  getCalloutText = marker => {
    const {
      markerHighlighted: { markerId, description },
    } = this.props;
    if (markerId === marker.id)
      return (
        <View>
          <Text>{marker.title}</Text>
          <Text>{description}</Text>
        </View>
      );
    else return null;
  };

  render() {
    const {
      marker,
      color,
      handleMarkerPress,
      shouldHandleMarkerPress,
      markerHighlighted: { markerId },
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
          <MapView.Callout tooltip={marker.id !== markerId}>
            {this.getCalloutText(marker)}
          </MapView.Callout>
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
