import React, { Component } from 'react';
import {
  Animated,
  Easing,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default class Filler extends Component {
  state = {
    progress: new Animated.Value(100)
  };

  toggleProgress = () => {
    toValue = this.state.progress < 100 ? 100 : 0;

    Animated.timing(this.state.progress, {
      toValue: toValue,
      duration: 14000,
      easing: Easing.linear
    }).start();
  };
  componentDidMount() {
    // Animated.timing(this.state.progress, {
    //   toValue: 0,
    //   duration: 10000,
    //   easing: Easing.linear
    // }).start();
    // Animated.timing(
    //   // Animate over time
    //   this.state.progress, // The animated value to drive
    //   {
    //     toValue: 0, // Animate to opacity: 1 (opaque)
    //     duration: 10000 // Make it take a while
    //   }
    // ).start(); // Starts the animation
  }

  componentWillReceiveProps() {}
  render() {
    let { progress } = this.state;

    return (
      <AnimatedTouchable
        onPress={this.toggleProgress}
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
  button: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  filler: {
    flex: 1,
    left: 0,
    zIndex: 30,
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(245, 223, 76, .88)'
  }
});
