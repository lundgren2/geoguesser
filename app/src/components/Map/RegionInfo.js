import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

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
