import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Map from '../../components/Map';
import SettingsButton from '../../components/SettingsButton';
import GameMenu from '../../components/GameMenu';
import GameBar from '../../components/GameBar';
import GameWon from '../../components/GameWon';
import GameLost from '../../components/GameLost';

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Map />
        <GameBar />
      </View>
      <SettingsButton />
      <GameMenu />
      <GameWon />
      <GameLost />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
