import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import theme from 'constants/theme';
import _ from 'lodash';
import styles from './styles';
import { GAME_OFF } from '../../actions';

const Life = ({ gameStatus, life }) => {
  if (gameStatus === GAME_OFF) return null;

  return (
    <View style={styles.bar}>
      {_.times(life, index => {
        return (
          <Icon
            key={index}
            iconStyle={styles.icon}
            name="heart"
            type="font-awesome"
            color={theme.red}
            size={24}
          />
        );
      })}
    </View>
  );
};

const mapStateToProps = ({ game, settings, layers }) => ({
  life: game.playerLife.life,
  gameStatus: layers.gameStatus,
  debug: settings.debug,
});

export default connect(mapStateToProps)(Life);
