import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { toggleDebug } from '../../actions/settings';

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
            padding: 5
          }}
          onPress={this.props.toggleDebug}
        />
      </View>
    );
  }
}

export default connect(
  null,
  { toggleDebug }
)(SettingsButton);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 10,
    left: 10
  },
  button: {
    padding: 5
  }
});
