import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleDebug } from '../../actions/settings';
import { Button } from 'react-native-elements';

class SettingsButton extends Component {
  render() {
    return <Button title="Toggles debug" onPress={this.props.toggleDebug} />;
  }
}

const mapStateToProps = undefined;

export default connect(
  mapStateToProps,
  { toggleDebug }
)(SettingsButton);
