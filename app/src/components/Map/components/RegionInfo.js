import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

export default (RegionInfo = ({ region }) => {
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
    </View>
  );
});

const styles = StyleSheet.create({
  debugContainer: {
    flex: 1,
    zIndex: 2,
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: 'rgba(223, 230, 233, 0.7)',
    paddingTop: Platform.OS === 'android' ? 5 : 40
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
