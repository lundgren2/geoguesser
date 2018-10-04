import React, { Fragment } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import GameLogic from '../../components/GameLogic';
import Map from '../../components/Map';
import SettingsButton from '../../components/SettingsButton';

// TODO: Break out the statusBarBackground view into its own component.
export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBarBackground} />
      <SettingsButton />
      <GameLogic>
        {({ markerPressed, currentMarkers }) => {
          return (
            <Map
              markerPressed={markerPressed}
              currentMarkers={currentMarkers}
            />
          );
        }}
      </GameLogic>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBarBackground: {
    height: Platform.OS === 'android' ? 24 : 0,
    backgroundColor: 'black'
  }
});
