import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, StatusBar } from 'react-native';
import Map from '../../components/Map';
import SettingsButton from '../../components/SettingsButton';
import GameMenu from '../../components/GameMenu';
import GameBar from '../../components/GameBar';
import MainMenu from '../../components/MainMenu';

const Game = ({ showMainMenu }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Map />
      {!showMainMenu && <GameBar />}
      {!showMainMenu && <SettingsButton />}
      <GameMenu />
      <MainMenu />
    </View>
  );
};

const mapStateToProps = ({ layers }) => ({
  showMainMenu: layers.mainMenu,
});

export default connect(mapStateToProps)(Game);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
