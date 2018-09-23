import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import { Header } from 'react-native-elements';
import { View, StyleSheet, Platform } from 'react-native';
import Map from '../../components/Map';

export default () => {
  return (
    <Fragment>
      <View style={styles.statusBarBackground} />
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'My Header', style: { color: '#fff' } }}
      />
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
