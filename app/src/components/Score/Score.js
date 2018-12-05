import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

const Score = props => {
  const { debug } = props;

  return (
    !debug && (
      <View style={styles.bar}>
        <Text style={styles.text}>Score: {props.score}</Text>
      </View>
    )
  );
};

const mapStateToProps = ({ game, settings }) => ({
  score: game.scoreboard.score,
  debug: settings.debug,
});

export default connect(mapStateToProps)(Score);

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
  },
  text: {
    fontSize: 20,
    color: 'black',
    zIndex: 30,
  },
});
