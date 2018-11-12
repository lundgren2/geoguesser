import React, { Component } from 'react';
import { Animated } from 'react-native';

class FadeView extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
  };

  componentWillReceiveProps(props) {
    const fadeDuration = 1000;
    if (!props.isVisible && this.props.isVisible) {
      this.fadeOut(fadeDuration);
    }
  }

  componentWillMount() {
    const duration = 1000;
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: duration,
    }).start();
  }

  fadeOut = duration => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: duration,
    }).start(() => {
      if (this.props.finished)
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
