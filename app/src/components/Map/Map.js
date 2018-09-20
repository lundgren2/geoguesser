import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { standard, roads, noRoads } from '../../constants/mapStyles';

const debug = true;

const southernSwedenRegion = {
  latitude: 59.3,
  longitude: 14.9675,
  latitudeDelta: 8.14,
  longitudeDelta: 0
};

export default class Map extends Component {
  state = {
    region: southernSwedenRegion,
    debugMarker: null,
    markers: [
      {
        title: 'Stockholm',
        description: 'Swedens biggest city',
        coordinate: {
          latitude: 59.36,
          longitude: 18.26
        }
      },
      {
        title: 'Gothenburg',
        description: 'Swedens best city',
        coordinate: {
          latitude: 57.71,
          longitude: 11.98
        }
      }
    ]
  };

  onRegionChange = region => {
    this.setState({ region });
  };

  handlePress(event) {
    if (debug) {
      this.setState({
        debugMarker: {
          coordinate: event.coordinate,
          title: 'debug marker',
          description: 'debug marker'
        }
      });
    }
  }

  renderRegionInfo = () => {
    let region = this.state.region;
    let debugMarker = this.state.debugMarker;
    return (
      <View style={styles.debugContainer}>
        <View style={styles.debugRegion}>
          <Text style={styles.debugRegionHeader}>Current region</Text>
          <Text style={styles.debugRegionContent}>
            {`Latitude: ${Number(region.latitude).toFixed(4)}\n`}
            {`Longitude: ${Number(region.longitude).toFixed(4)}\n`}
            {`LatidudeDelta: ${Number(region.latitudeDelta).toFixed(4)}\n`}
            {`LongitudeDelta: ${Number(region.longitudeDelta).toFixed(4)}\n`}
          </Text>
        </View>
        <View style={styles.debugRegion}>
          <Text style={styles.debugRegionHeader}>Debug Marker</Text>
          {this.state.debugMarker && (
            <Text style={styles.debugRegionContent}>
              {`Latitude: ${Number(debugMarker.coordinate.latitude).toFixed(
                4
              )}\n`}
              {`Longitude: ${Number(debugMarker.coordinate.longitude).toFixed(
                4
              )}\n`}
            </Text>
          )}
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={this.state.region}
          // region={this.state.region}
          fitToSuppliedMarkers={this.state.markers}
          onRegionChange={this.onRegionChange}
          onPress={event => {
            this.handlePress(event.nativeEvent);
          }}
          customMapStyle={noRoads}
          provider="google"
          zoomEnabled={debug}
          pitchEnabled={debug}
          rotateEnabled={debug}
          scrollEnabled={debug}
        >
          {debug &&
            this.state.debugMarker && (
              <MapView.Marker
                coordinate={this.state.debugMarker.coordinate}
                title={this.state.debugMarker.title}
                description={this.state.debugMarker.description}
              />
            )}
          {this.state.markers.map((marker, index) => {
            return (
              <MapView.Marker
                key={index}
                coordinate={marker.coordinate}
                title={marker.title}
                description={marker.description}
              />
            );
          })}
        </MapView>

        {debug && this.renderRegionInfo()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    height: '100%',
    width: '100%',
    margin: 'auto'
  },
  debugContainer: {
    flex: 1,
    zIndex: 2,
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 20, 20, 0.7)',
    paddingTop: 40
  },
  debugRegion: {
    flex: 1,
    flexDirection: 'column',
    width: '50%'
  },
  debugRegionHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 5
  },
  debugRegionContent: {
    marginLeft: 10
  }
});
