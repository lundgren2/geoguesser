import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, StatusBar } from 'react-native';
import Map from '../../components/Map';
import SettingsButton from '../../components/SettingsButton';
import GameMenu from '../../components/GameMenu';
import GameBar from '../../components/GameBar';
import MainMenu from '../../components/MainMenu';
import styles from './styles';

export default ({ showMainMenu }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Map />
      <GameBar />
      <SettingsButton />
      <GameMenu />
      <MainMenu />
    </View>
  );
};
