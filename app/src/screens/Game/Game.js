import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import GameLogic from '../../components/GameLogic';
import Map from '../../components/Map';
import SettingsButton from '../../components/SettingsButton';
import GameMenu from '../../components/GameMenu';

export default () => {
  // The order of the components is important. onPress events prioritates the latest component first.
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
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
      <SettingsButton />
      <GameMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
