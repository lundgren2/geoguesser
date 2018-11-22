import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Overlay, Button } from 'react-native-elements';
import { toggleGameWon } from '../../actions/layers';
import { toggleStartGame } from '../../actions/thunks';

export class GameWon extends Component {
  render() {
    const title = 'Play again';

    return (
      <Overlay
        overlayStyle={styles.overlay}
        isVisible={this.props.showGameWon}
        onBackdropPress={() => undefined}
        width="auto"
        height="auto"
      >
        <Text style={styles.text}>Congratulations, you won the game!</Text>
        <Button
          key={title}
          title={title}
          buttonStyle={styles.button}
          onPress={() => {
            this.props.toggleStartGame();
            this.props.toggleGameWon();
          }}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonText}
        />
      </Overlay>
    );
  }
}

mapStateToProps = ({ layers }) => ({
  showGameWon: layers.gameWon
});

const mapDispatchToProps = {
  toggleGameWon,
  toggleStartGame
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameWon);

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
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
