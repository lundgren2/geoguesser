import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import _ from 'lodash';
import { regions } from '../../constants';
import { brightColors } from '../../constants/mapStyles';
import RegionInfo from './RegionInfo';

class Map extends Component {
  //TODO: Add proptypes to verify correct props are passed.
  state = {
    region: regions.southernSwedenRegion,
    debugMarker: null,
    markers: []
  };

  componentDidMount() {
    this.setState({
      markers: this.props.currentMarkers
    });
    animationTimeout = setTimeout(() => {
      this.focusMap(this.state.markers, true);
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(prevProps.currentMarkers, this.props.currentMarkers)) {
      this.setState({ markers: this.props.currentMarkers });
      animationTimeout = setTimeout(() => {
        this.focusMap(this.state.markers, true);
      }, 500);
    }
  }

  focusMap(markers, animated) {
    if (markers.length == 0) return;
    const options = {
      // TODO: These are constants. Put them somewhere safe.
      edgePadding: { top: 200, right: 50, left: 50, bottom: 300 }, // High bottom padding since the map extends below the screen to hide google logo.
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
          moveOnMarkerPress={false}
        >
          {debug &&
            debugMarker && (
              <MapView.Marker
                coordinate={debugMarker.coordinate}
                title={debugMarker.title}
                description={debugMarker.description}
              />
            )}
          {markers.map(marker => {
            return (
              <MapView.Marker
                key={marker.id}
                identifier={marker.title}
                coordinate={marker.coordinate}
                onPress={event => {
                  console.log(this.props);
                  this.props.handleMarkerPress(marker.id);
                }}
              />
            );
          })}
        </MapView>
        {debug && <RegionInfo region={region} debugMarker={debugMarker} />}
      </View>
    );
  }
}

const mapStateToProps = ({ settings }) => ({
  debug: settings.debug
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
