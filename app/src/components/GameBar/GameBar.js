import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Filler from './Filler';
import { restartProgressTimer, stopProgressTimer } from '../../actions/thunks';

const GameBar = props => {
  return (
    <View style={styles.bar}>
      <Filler progress={props.time.progress} />
      <Text style={styles.barText}>{props.correctMarker.title}</Text>
    </View>
  );
};

const mapStateToProps = ({ game, layers }) => ({
  correctMarker: game.correctMarker,
  showGameWon: layers.gameWon,
  showGameLost: layers.gameLost,
  time: game.time
});

export default connect(
  mapStateToProps,
  { restartProgressTimer, stopProgressTimer }
)(GameBar);

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    width: '90%',
    margin: 10,
    height: '6%',
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    borderWidth: 3,
    borderColor: 'rgba(245, 223, 76, .88)',
    borderRadius: 6,
    zIndex: 10
  },
  barText: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    zIndex: 30
  }
});