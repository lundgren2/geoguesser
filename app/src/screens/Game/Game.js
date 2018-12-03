import React from 'react';
import { View, StatusBar } from 'react-native';
import Map from '../../components/Map';
import SettingsButton from '../../components/SettingsButton';
import GameMenu from '../../components/GameMenu';
import GameBar from '../../components/GameBar';
import MainMenu from '../../components/MainMenu';
import styles from './styles';
import GameWon from '../../components/GameWon';
import GameLost from '../../components/GameLost';
import Score from '../../components/Score';

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Map />
        <GameBar />
      </View>
      <Score />
      <SettingsButton />
      <GameWon />
      <GameLost />
      <GameMenu />
      <MainMenu />
    </View>
  );
};
