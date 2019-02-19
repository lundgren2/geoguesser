import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';
import { GAME_OFF } from '../../actions';
import constants from 'constants/theme';

const Score = ({ debug, score, gameStatus }) => {
  if (gameStatus === GAME_OFF) return null;

  return (
    <View style={styles.bar}>
      <Icon
        iconStyle={styles.icon}
        name="star"
        type="font-awesome"
        color={constants.yellow}
        size={24}
      />
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
