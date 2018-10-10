import React, {Component} from 'react';
import {Animated, StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import GameScreen from '../Game/Game';


class FadeView extends Component {
  constructor()  {
    super();
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  componentWillReceiveProps(props) {
    const fadeDuration = 1000;
    if (!props.isVisible && this.props.isVisible)  {
      this.fadeOut(fadeDuration);
    }
  }

  componentWillMount()  {
    const duration = 1000;
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: duration,
      }
    ).start()
  }

  fadeOut = (duration) => {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 0,
        duration: duration,
      }
    ).start(() => {
      this.props.finished();
    });
  };

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View style={{...this.props.style, opacity: fadeAnim}}>
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
      welcome: true,
      game: false,
      currentScreen: "WELCOME",
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

  closeAllLayers = () => {
    this.setState({
      welcome: false,
      game: false,
    })
  };

  openGame = () => {
    this.setState({
      welcome: false,
      game: true,
      currentScreen: "GAME",
    });
  };

  openWelcome = () => {
    this.setState({
      welcome: true,
      game: false,
      currentScreen: "WELCOME",
    })
  };

  render() {
    const buttons = [
      {title: 'Start Game', onPress: () => {this.closeAllLayers()}},
    ];

    if (this.state.currentScreen === "WELCOME")
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>{this.state.welcome ? "True" : "False"}</Text>

          <FadeView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}
                    isVisible={this.state.welcome} finished={this.openGame}>
            {buttons.map(button => this.menuButton(button))}
          </FadeView>
        </View>
      );

    else if (this.state.currentScreen === "GAME")
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <FadeView style={{width: '100%', height: '100%'}}
                    isVisible={this.state.game} finished={this.openWelcome}>
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
