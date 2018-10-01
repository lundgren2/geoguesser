import React, { Fragment } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Map from '../../components/Map';
import SettingsButton from '../../components/SettingsButton'


// TODO: Break out the statusBarBackground view into its own component.
export default () => {
  return (
    <Fragment>
      <View style={styles.statusBarBackground} />
      <SettingsButton />
      <Map />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  statusBarBackground: {
    height: Platform.OS === 'android' ? 24 : 0,
    backgroundColor: 'black'
  }
});
