import React from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';
import Filler from './Filler';

const GameBar = ({ progress, text }) => {
  return (
    <View style={styles.bar}>
      <Filler progress={progress} />
      <Text style={styles.barText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    height: '8%',
    borderWidth: 3,
    borderColor: 'rgba(245, 223, 76, .88)',
    width: '80%',
    borderRadius: 6,
    zIndex: 10,
    bottom: 40
  },
  barText: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    zIndex: 30
  }
});

export default GameBar;
