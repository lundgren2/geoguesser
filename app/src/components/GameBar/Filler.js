import React, { Component } from 'react';
import { Animated, Easing, TouchableOpacity, StyleSheet } from 'react-native';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default class Filler extends Component {
  state = {
    progress: new Animated.Value(100)
  };

  toggleProgress = () => {
    Animated.timing(this.state.progress, {
      toValue: 0,
      duration: 14000,
      easing: Easing.linear
    }).start();
  };

  render() {
    let { progress } = this.state;
    return (
      <AnimatedTouchable
        activeOpacity={0.7}
        onPress={() => this.toggleProgress()}
        style={[
          styles.filler,
          {
            width: progress.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '1%']
            })
          }
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  filler: {
    flex: 1,
    left: 0,
    zIndex: 30,
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(245, 223, 76, .88)'
  }
});
