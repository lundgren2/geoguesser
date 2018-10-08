import React, {Component} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import { Button } from 'react-native-elements';
import GameScreen from '../Game/Game';


class FadeView extends Component {
  constructor(props)  {
    super(props);
    let opacity;
    if (props.isVisible) {
      opacity = 1;
    }
    else  {
      opacity = 0;
    }

    this.state = {
      fadeAnim: new Animated.Value(opacity),  // Initial value for opacity: 0
    };
  }

  componentWillReceiveProps(props) {
    const fadeDuration = 1000;
    if (!props.isVisible && this.props.isVisible) {
      this.fadeIn(fadeDuration);
    }
    else if (props.isVisible && !this.props.isVisible)  {
      this.fadeOut(fadeDuration);
    }
  }

  fadeIn = (duration) => {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 0,                   // Animate to opacity: 1 (opaque)
        duration: duration,              // Make it take a while
      }
    ).start();
  };

  fadeOut = (duration) => {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: duration,              // Make it take a while
      }
    ).start();
  };

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default class WelcomeView extends Component {
  constructor()  {
    super();

    this.state = {
      isVisible: true,
    }
  }

  menuButton = ({ title, onPress }) => (
    <Button
      key={title}
      title={title}
      buttonStyle={styles.button}
      onPress={() => onPress()}
      containerStyle={styles.buttonContainer}
      titleStyle={styles.buttonText}
    />
  );

  render() {
    const buttons = [
      {
        title: 'Start Game', onPress: () => this.setState({isVisible: false})
      },
    ];

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FadeView style={{width: 250, height: 50, backgroundColor: 'powderblue'}} isVisible={this.state.isVisible}>
          {buttons.map(button => this.menuButton(button))}
        </FadeView>

        <FadeView style={{width: '100%', height: '100%'}} isVisible={!this.state.isVisible}>
          <GameScreen />
        </FadeView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 'auto'
  },
  button: {
    width: '100%',
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#0984e3'
  },
  buttonText: {
    color: '#dfe6e9'
  }
});
