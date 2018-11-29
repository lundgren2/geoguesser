import React, { Component } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import styles from './styles';
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default class Filler extends Component {
  render() {
    let { progress } = this.props;
    return (
      <AnimatedTouchable
        activeOpacity={0.7}
        // onPress={() => this.toggleProgress()}
        style={[
          styles.filler,
          {
            width: progress.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '1%'],
            }),
          },
        ]}
      />
    );
  }
}
