import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { toggleGameMenu } from '../../actions/layers';
import styles from './styles';

class SettingsButton extends Component {
  render() {
    const { showMainMenu, toggleGameMenu } = this.props;

    if (showMainMenu) return null;

    return (
      <View style={styles.container}>
        <Button
          title={null}
          icon={{ name: 'settings', color: 'white', size: 28 }}
          buttonStyle={styles.button}
          onPress={toggleGameMenu}
          size="68"
        />
      </View>
    );
  }
}

const mapStateToProps = ({ game, layers }) => ({
  showMainMenu: layers.mainMenu,
});

export default connect(
  mapStateToProps,
  { toggleGameMenu },
)(SettingsButton);
