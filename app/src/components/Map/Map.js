import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import _ from 'lodash';
import { brightColors } from '../../constants/mapStyles';
import { handleMarkerPress, setupLevel } from '../../actions/thunks';
import RegionInfo from './RegionInfo';

class Map extends Component {
  state = {
    debugMarker: null
  };

  // static propTypes = {
  //   markers: PropTypes.arrayOf(PropTypes.object),
  //   region: PropTypes.object
  // };

  componentDidMount() {
    this.props.setupLevel();
    animationTimeout = setTimeout(() => {
      this.focusMap(this.props.markers, true);
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(prevProps.markers, this.props.markers)) {
      animationTimeout = setTimeout(() => {
        this.focusMap(this.props.markers, true);
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
    const { debugMarker } = this.state;
    const { debug, region, markers } = this.props;

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

const mapStateToProps = ({ game, settings }) => ({
  debug: settings.debug,
  markers: game.markers,
  region: game.region
});

export default connect(
  mapStateToProps,
  { handleMarkerPress, setupLevel }
)(Map);

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
