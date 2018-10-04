import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import GameLogic from '../../components/GameLogic';
import Map from '../../components/Map';
import SettingsButton from '../../components/SettingsButton';
import GameMenu from '../../components/GameMenu';
import GameBar from '../../components/GameBar';

export default () => {
  // The order of the components is important. onPress events prioritates the latest component first.
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <GameLogic>
        {({ markerPressed, currentMarkers }) => {
          return (
            <View style={styles.container}>
              <Map
                markerPressed={markerPressed}
                currentMarkers={currentMarkers}
              />
              <GameBar progress={80} text={'Hitta Stockholm'} />
            </View>
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
