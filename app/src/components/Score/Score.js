import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
const Score = props => {
  const { debug } = props;

  return (
    !debug && (
      <View style={styles.bar}>
        <Text style={styles.text} adjustsFontSizeToFit minimumFontScale={0.5}>
          {props.score}
        </Text>
      </View>
    )
  );
};

const mapStateToProps = ({ game, settings }) => ({
  score: game.scoreboard.score,
  debug: settings.debug,
});

export default connect(mapStateToProps)(Score);
