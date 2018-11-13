import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native';

export class Score extends Component {
  render()  {
    let { score } = this.props;

    return (
      <View style={styles.bar}>
        <Text style={styles.text}>Score: {score}</Text>
      </View>
    )
  }
}

const mapStateToProps = ({ game }) => ({
  score: game.scoreboard.score,
});

export default connect(
  mapStateToProps
)(Score);

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
  },
  text: {
    fontSize: 20,
    color: 'black',
    zIndex: 30,
  }
});


