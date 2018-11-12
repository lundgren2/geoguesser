import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { MapView } from 'expo';
import _ from 'lodash';
import { brightColors } from '../../constants/mapStyles';
import { handleMarkerPress } from '../../actions/thunks';
import RegionInfo from './RegionInfo';
import styles from './styles';

class Map extends Component {
  state = {
    debugMarker: null,
    mapRegion: null,
  };

  componentDidMount() {
    this.focusMap(this.props.markers, true);
  }

  componentDidUpdate(prevProps) {
    if (!_.isEqual(prevProps.markers, this.props.markers)) {
      animationTimeout = setTimeout(() => {
        this.focusMap(this.props.markers, true);
      }, 500);
    }
  }

  focusMap(markers, animated) {
    if (markers.length === 0) return;
    const options = {
      // TODO: These are constants. Put them somewhere safe.
      edgePadding: { top: 200, right: 50, left: 50, bottom: 300 }, // High bottom padding since the map extends below the screen to hide google logo.
      animated,
    };
    const coords = markers.map(marker => marker.coordinate);
    this.map.fitToCoordinates(coords, options);
  }

  onMapRegionChange = mapRegion => this.setState({ mapRegion });

  render() {
    const { debug, markers } = this.props;

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          ref={ref => {
            this.map = ref;
          }}
          onRegionChange={region => this.onMapRegionChange(region)}
          customMapStyle={brightColors}
          provider="google"
          zoomEnabled={debug}
          pitchEnabled={debug}
          rotateEnabled={debug}
          scrollEnabled={debug}
          moveOnMarkerPress={false}
        >
          {markers.map(marker => {
            return (
              <MapView.Marker
                key={marker.id}
                identifier={marker.title}
                coordinate={marker.coordinate}
                onPress={() => {
                  this.props.handleMarkerPress(marker.id);
                }}
              />
            );
          })}
        </MapView>
        {debug && <RegionInfo region={this.state.mapRegion} />}
      </View>
    );
  }
}

const mapStateToProps = ({ game, settings }) => ({
  debug: settings.debug,
  markers: game.markers,
  region: game.region,
});

export default connect(
  mapStateToProps,
  { handleMarkerPress },
)(Map);
