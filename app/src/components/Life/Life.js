import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from 'constants/colors';
import _ from 'lodash';
import styles from './styles';

const Life = props => {
  return (
    <View style={styles.bar}>
      {_.times(props.life, index => {
        return (
          <Icon
            key={index}
            iconStyle={styles.icon}
            name="heart"
            type="font-awesome"
            color={colors.red}
            size={28}
          />
        );
      })}
    </View>
  );
};

const mapStateToProps = ({ game, settings }) => ({
  life: game.playerLife.life,
  debug: settings.debug,
});

export default connect(mapStateToProps)(Life);
