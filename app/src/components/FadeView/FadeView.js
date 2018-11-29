import React, { Component } from 'react';
import { Animated } from 'react-native';

const FADE_DURATION = 1000;

class FadeView extends Component {
  state = {
    fadeAnim: new Animated.Value(0)
  };

  componentWillReceiveProps(props) {
    if (!props.isVisible && this.props.isVisible) {
      this.fadeOut(FADE_DURATION);
    }
  }

  componentWillMount() {
    this.fadeIn(FADE_DURATION);
  }

  fadeIn = duration => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: duration
    }).start();
  };

  fadeOut = duration => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: duration
    }).start(() => {
      this.props.finished();
    });
  };

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View style={{ ...this.props.style, opacity: fadeAnim }}>
        {this.props.children}
      </Animated.View>
    );
  }
}

export default FadeView;
