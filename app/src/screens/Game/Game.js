import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Map from '../../components/Map';
import SettingsButton from '../../components/SettingsButton';
import GameMenu from '../../components/GameMenu';
import GameBar from '../../components/GameBar';
import Score from '../../components/Score';

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Map />
        <Score />
        <GameBar />
      </View>
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
