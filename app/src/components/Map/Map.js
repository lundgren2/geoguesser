import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { markers, regions } from '../../constants';
import { brightColors } from '../../constants/mapStyles';
import RegionInfo from './RegionInfo';

const debug = true;

export default class Map extends Component {
  state = {
    region: regions.southernSwedenRegion,
    debugMarker: null,
    markers: [...markers.defaultMarkers]
  };

  componentDidMount() {
    animationTimeout = setTimeout(() => {
      this.focusMap(['Stockholm', 'Gothenburg'], true);
    }, 2000);
  }

  focusMap(markers, animated) {
    // console.log(`Markers received to populate map: ${markers}`);
    this.map.fitToSuppliedMarkers(markers, animated);
  }

  onRegionChange = region => {
    this.setState({ region });
  };

  handlePress(event) {
    if (debug) {
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
    const { region, markers, debugMarker } = this.state;

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          ref={ref => {
            this.map = ref;
          }}
          initialRegion={region}
          region={region}
          mapPadding={{ bottom: 40 }}
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
            console.log(marker);
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    margin: 'auto'
  }
});
