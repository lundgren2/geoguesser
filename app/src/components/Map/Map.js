import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { MapView } from 'expo';
import _ from 'lodash';
import styles from './styles';
import { brightColors } from '../../constants/mapStyles';
import RegionInfo from './RegionInfo';
import { handleMarkerPress, setUserPosition } from '../../actions/thunks';
import Marker from './Marker';

class Map extends Component {
  state = {
    debugMarker: null,
    mapRegion: null,
  };

  componentDidMount() {
    this.props.setUserPosition();
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

  onMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  render() {
    const { debug, markers, markersLeft } = this.props;
    const red = 'red';
    const green = 'green';

    let markerLeftIds = markersLeft.map(marker => marker.id);

    let redMarkers = markers.filter(marker =>
      markerLeftIds.includes(marker.id),
    );
    let greenMarkers = markers.filter(
      marker => !markerLeftIds.includes(marker.id),
    );

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
          {redMarkers.map((marker, index) => <Marker key={index} marker={marker} color={red} />)}
          {greenMarkers.map((marker, index) => <Marker key={index} marker={marker} color={green} />)}
        </MapView>
        {debug && <RegionInfo region={this.state.mapRegion} />}
      </View>
    );
  }
  // {this.renderMarkers(greenMarkers, green)}
}

const mapStateToProps = ({ game, settings }) => ({
  debug: settings.debug,
  region: game.region,
  markers: game.markers,
  markersLeft: game.markersLeft,
  startGame: game.startGame,
});

export default connect(
  mapStateToProps,
  {
    handleMarkerPress,
    setUserPosition,
  },
)(Map);
