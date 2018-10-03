import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Overlay, Button } from 'react-native-elements';
import { toggleGameMenu } from '../../actions/settings';

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
    const buttons = [
      {
        title: 'Resume Game',
        onPress: this.props.toggleGameMenu
      },
      {
        title: 'Main Menu',
        onPress: this.props.toggleGameMenu
      },
      {
        title: 'Options',
        onPress: this.props.toggleGameMenu
      }
    ];

    return (
      <Overlay
        overlayStyle={styles.overlay}
        isVisible={this.props.showGameMenu}
        onBackdropPress={() => undefined}
        width="auto"
        height="auto"
      >
        {buttons.map(button => this.menuButton(button))}
      </Overlay>
    );
  }
}

const mapStateToProps = ({ settings }) => ({
  showGameMenu: settings.showGameMenu
});

const mapDispatchToProps = {
  toggleGameMenu
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameMenu);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: 5,
    paddingBottom: 5,
    maxHeight: 190,
    backgroundColor: '#00b894',
    borderRadius: 5
  },
  buttonContainer: {
    margin: 'auto'
  },
  button: {
    width: '100%',
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#0984e3'
  },
  buttonText: {
    color: '#dfe6e9'
  }
});
