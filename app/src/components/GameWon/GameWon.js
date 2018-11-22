import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { OverLay, Button } from 'react-native-elements';
import { toggleGameWon } from '../../actions/layers';
import { setupInitialRegion } from '../../actions/thunks';

export class GameWon extends Component {
  restartGameButton = ({ title }) => {
    <Button
      key={title}
      title={title}
      buttonStyle={styles.button}
      onPress={() => {
        this.props.toggleGameWon();
        this.props.setupInitialRegion();
        animationTimeout = setTimeout(() => {
          this.focusMap(this.props.markers, true);
        }, 2000);
      }}
      containerStyle={styles.buttonContainer}
      titleStyle={styles.buttonText}
    />;
  };

  render() {
    return (
      <OverLay
        overlayStyle={styles.overlay}
        isVisible={this.props.showWonGame}
        onBackdropPress={() => undefined}
        width="auto"
        height="auto"
      >
        <Text>Congratulations, you won the game!</Text>
        {this.restartGameButton('Restart game')}
      </OverLay>
    );
  }
}

mapStateToProps = ({ layers }) => ({
  showWonGame: layers.gameWon
});

const mapDispatchToProps = {
  toggleGameWon,
  setupInitialRegion
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
    color: '#dfe6e9'
  }
});
