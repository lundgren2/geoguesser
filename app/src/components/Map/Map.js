import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { markers, regions } from '../../constants';
import { brightColors } from '../../constants/mapStyles';
import RegionInfo from './RegionInfo';

class Map extends Component {
  state = {
    region: regions.southernSwedenRegion,
    debugMarker: null,
    markers: [...markers.defaultMarkers]
  };

  componentDidMount() {
    animationTimeout = setTimeout(() => {
      this.focusMap(this.state.markers, true);
    }, 2000);
  }

  focusMap(markers, animated) {
    const options = {
      // TODO: These are constants. Put them somewhere safe.
      edgePadding: { top: 20, right: 50, left: 50, bottom: 80 }, // Height bottom padding since the map extends below the screen to hide google logo.
      animated
    };
    const coords = markers.map(marker => marker.coordinate);
    this.map.fitToCoordinates(coords, options);
  }

  onRegionChange = region => {
    this.setState({ region });
  };

  handlePress(event) {
    if (this.props.debug) {
      const debugMarker = {
        coordinate: event.coordinate,
        title: 'debug marker',
        description: 'debug marker'
      };

      this.setState(prevState => ({
        markers: [...prevState.markers, debugMarker]
      }));

      this.setState({
        debugMarker: {
          coordinate: event.coordinate,
          title: 'debug marker',
          description: 'debug marker'
        }
      });
    }
  }

  render() {
    const debug = this.props.debug;
    const { region, markers, debugMarker } = this.state;

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          ref={ref => {
            this.map = ref;
          }}
          initialRegion={region}
          onRegionChange={this.onRegionChange}
          onPress={event => {
            this.handlePress(event.nativeEvent);
          }}
          customMapStyle={brightColors}
          provider="google"
          zoomEnabled={debug}
          pitchEnabled={debug}
          rotateEnabled={debug}
          scrollEnabled={debug}
        >
          {debug &&
            debugMarker && (
              <MapView.Marker
                coordinate={debugMarker.coordinate}
                title={debugMarker.title}
                description={debugMarker.description}
              />
            )}
          {markers.map((marker, index) => {
            return (
              <MapView.Marker
                key={index}
                identifier={marker.title}
                coordinate={marker.coordinate}
                title={marker.title}
                description={marker.description}
              />
            );
          })}
        </MapView>

        {debug && <RegionInfo region={region} debugMarker={debugMarker} />}
      </View>
    );
  }
}

const mapStateToProps = ({ debug }) => ({
  debug
});

export default connect(mapStateToProps)(Map);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    height: '108%', // Uses height over 100% to hide the google logo.
    width: '100%',
    margin: 'auto'
  }
});
