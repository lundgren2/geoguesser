import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { MapView } from 'expo';
import { standard, roads, noRoads, brightColors } from '../../constants/mapStyles';
import RegionInfo from './RegionInfo'

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
// const LATITUDE = 37.78825;
// const LONGITUDE = -122.4324;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// const SPACE = 0.01;


const debug = true;

const southernSwedenRegion = {
  latitude: 59.3,
  longitude: 14.9675,
  latitudeDelta: 8.14,
  longitudeDelta: 0
};

export default class Map extends Component {
  state = {
    isLoading: true,
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

  componentDidMount() {
    // this.fetchMarkerData();
    // setTimeout(() => this.focusMap(['Marker1', 'Markers2'], true), 1500);
    // this.focusMap(['Marker1', 'Marker2'], true);
  }

  // fetchMarkerData() {
  //   fetch('https://feeds.citibikenyc.com/stations/stations.json')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({
  //         isLoading: false,
  //         markers: responseJson.stationBeanList,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  focusMap(markers, animated) {
    console.log(`Markers received to populate map: ${markers}`);
    this.map.fitToSuppliedMarkers(markers, animated);
  }

  onRegionChange = region => {
    this.setState({ region });
    // this.map.fitToSuppliedMarkers(this.state.markers, true);
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

  render() {
    const { region, markers, debugMarker } = this.state;

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          ref={ref => { this.map = ref; }}
          initialRegion={region}
          region={region}
          // onRegionChange={this.onRegionChange}
          onPress={event => {
            this.handlePress(event.nativeEvent);
          }}
          customMapStyle={brightColors}
          provider='google'
          zoomEnabled={debug}
          pitchEnabled={debug}
          rotateEnabled={debug}
          scrollEnabled={debug}
        >
          {/* {debug &&
            debugMarker && (
              <MapView.Marker
                coordinate={debugMarker.coordinate}
                title={debugMarker.title}
                description={debugMarker.description}
              />
            )} */}

          {markers.map((marker, index) => {
            console.log(marker);
            return (
              <MapView.Marker
                key={index}
                identifier={"Marker" + index+1}
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
    height: '108%', // push Google label below screen
    width: '100%',
    margin: 'auto'
  }
});
