import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { togglePauseMenu } from '../../actions/layers';
import styles from './styles';

class SettingsButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title={null}
          icon={{ name: 'settings' }}
          buttonStyle={styles.button}
          onPress={this.props.togglePauseMenu}
        />
      </View>
    );
  }
}

export default connect(
  null,
  { togglePauseMenu },
)(SettingsButton);
