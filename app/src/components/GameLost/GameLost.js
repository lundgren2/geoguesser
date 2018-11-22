import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Overlay, Button } from 'react-native-elements';
import { toggleGameLost } from '../../actions/layers';
import { toggleStartGame } from '../../actions/thunks';

export class GameLost extends Component {
  render() {
    const buttonTitle = 'Try again';
    gameOverText = 'You lost the game!';

    return (
      <Overlay
        overlayStyle={styles.overlay}
        isVisible={this.props.showGameLost}
        onBackdropPress={() => undefined}
        width="auto"
        height="auto"
      >
        <Text style={styles.text}>{gameOverText}</Text>
        <Button
          key={buttonTitle}
          title={buttonTitle}
          buttonStyle={styles.button}
          onPress={() => {
            this.props.toggleStartGame();
            this.props.toggleGameLost();
          }}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonText}
        />
      </Overlay>
    );
  }
}

mapStateToProps = ({ layers }) => ({
  showGameLost: layers.gameLost
});

const mapDispatchToProps = {
  toggleGameLost,
  toggleStartGame
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameLost);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: 5,
    paddingBottom: 5,
    maxHeight: 190,
    backgroundColor: '#00b894',
    borderRadius: 5
  },
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
    color: '#ffffff',
    fontSize: 20
  },
  text: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
