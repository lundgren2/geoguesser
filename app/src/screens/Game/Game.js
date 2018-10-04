import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Map from '../../components/Map';
import GameMenu from '../../components/GameMenu';
import SettingsButton from '../../components/SettingsButton';
import GameBar from '../../components/GameBar';

export default () => {
  // The order of the components is important. onPress events prioritates the latest component first.
  return (
    <View style={styles.gameScreen}>
      <StatusBar hidden={true} />
      <Map />
      <GameBar progress={80} text={'Hitta Stockholm'} />
      <SettingsButton />
      <GameMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  gameScreen: {
    flex: 1
  }
});
