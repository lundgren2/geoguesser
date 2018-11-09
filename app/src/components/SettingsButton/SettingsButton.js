import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { togglePauseMenu } from '../../actions/layers';

const whiteButtonBackground = '#ECECEC';
class SettingsButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title={null}
          icon={{ name: 'settings' }}
          buttonStyle={{
            backgroundColor: whiteButtonBackground,
            padding: 5,
          }}
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

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 10,
  },
  button: {
    padding: 5,
  },
});
