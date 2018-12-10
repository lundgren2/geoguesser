import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
import { GAME_OFF } from '../../actions';

const Score = ({ debug, score, gameStatus }) => {
  if (gameStatus === GAME_OFF) return null;

  return (
    <View style={styles.bar}>
      <Text style={styles.text} adjustsFontSizeToFit>
        {score}
      </Text>
    </View>
  );
};

const mapStateToProps = ({ game, settings, layers }) => ({
  score: game.scoreboard.score,
  gameStatus: layers.gameStatus,
  debug: settings.debug,
});

export default connect(mapStateToProps)(Score);
