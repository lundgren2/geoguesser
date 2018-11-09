import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Overlay, Button } from 'react-native-elements';
import { toggleDebug } from '../../actions/settings';
import { stopGame, togglePauseMenu } from '../../actions/layers';
import styles from './styles';

export class GameMenu extends Component {
  menuButton = ({ title, onPress }) => (
    <Button
      key={title}
      title={title}
      buttonStyle={styles.button}
      onPress={() => onPress()}
      containerStyle={styles.buttonContainer}
      titleStyle={styles.buttonText}
    />
  );

  render() {
    const {
      togglePauseMenu,
      stopGame,
      toggleDebug,
      showPauseMenu,
    } = this.props;

    const buttons = [
      {
        title: 'Resume Game',
        onPress: togglePauseMenu,
      },
      {
        title: 'Main Menu',
        onPress: stopGame,
      },
      {
        title: 'Options',
        onPress: toggleDebug,
      },
    ];

    return (
      <Overlay
        overlayStyle={styles.overlay}
        isVisible={showPauseMenu}
        onBackdropPress={() => undefined}
        width="auto"
        height="auto"
      >
        {buttons.map(button => this.menuButton(button))}
      </Overlay>
    );
  }
}

const mapStateToProps = ({ layers }) => ({
  showPauseMenu: layers.pauseMenu,
});

const mapDispatchToProps = {
  toggleDebug,
  stopGame,
  togglePauseMenu,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameMenu);
