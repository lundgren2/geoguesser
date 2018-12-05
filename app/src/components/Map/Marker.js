import React, { Component } from 'react';
import {connect} from "react-redux";
import {handleMarkerPress} from "../../actions/thunks";
import { MapView } from 'expo';
import { Text } from 'react-native';
import { Callout } from 'react-native-maps';


class Marker extends Component {
  componentWillReceiveProps(props) {
    const { marker, markersHighlighted } = props;
    if (marker.id in markersHighlighted) this.ref.showCallout()
  }

  render()  {
    const { marker, color, handleMarkerPress } = this.props;
    console.log(marker.id);
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
          ref={ref => ( this.ref = ref )}
        />
      );
    else
      return (
        <MapView.Marker
          key={marker.id}
          identifier={marker.title}
          coordinate={marker.coordinate}
          onPress={() => {
            if (handleMarkerPress) handleMarkerPress(marker.id);
          }}
          pinColor={color}
          ref={ref => ( this.ref = ref )}>
          <Callout>
            <Text>{marker.title}</Text>
          </Callout>
        </MapView.Marker>
      );
  }
}

const mapStateToProps = ({ game }) => ({
  markersHighlighted: game.markersHighlighted,
});

export default connect(
  mapStateToProps,
  {
    handleMarkerPress,
  },
)(Marker);
