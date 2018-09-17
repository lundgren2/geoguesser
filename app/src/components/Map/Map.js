import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { MapView } from 'expo';
import { standard, roads, noRoads } from '../../constants/mapStyles';

const { width, height } = Dimensions.get('window');
const debug = true;

const southernSwedenRegion = {
  latitude: 59.3,
  longitude: 14.9675,
  latitudeDelta: 8.14,
  longitudeDelta: 0
};

export default class Map extends Component {
  state = {
    region: southernSwedenRegion
  };

  onRegionChange = region => {
    this.setState({ region });
  };

  renderRegionInfo = () => {
    let region = this.state.region;
    return (
      <View>
        <Text style={styles.regionHeader}>Current region</Text>
        <Text style={styles.regionContent}>{JSON.stringify(region)}</Text>
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
          onRegionChange={this.onRegionChange}
          customMapStyle={noRoads}
          zoomEnabled={debug}
          pitchEnabled={debug}
          rotateEnabled={debug}
          scrollEnabled={debug}
        />

        {debug && this.renderRegionInfo()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  map: {
    height: debug ? '75%' : '100%',
    width: '100%',
    margin: 'auto'
  },
  text: {
    margin: 'auto'
  }
});
