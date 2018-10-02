import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Map from '../../components/Map';
import SettingsButton from '../../components/SettingsButton';

export default () => {
  return (
    <View style={styles.gameScreen}>
      <StatusBar hidden={true} />
      <Map />
      <SettingsButton />
    </View>
  );
};

const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
    backgroundColor: 'black'
  }
});
