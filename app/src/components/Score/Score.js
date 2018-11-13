import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native';

export class Score extends Component {
  render()  {
    let { score } = this.props;

    return (
      <View style={styles.wrapper}>
        <Text>Score: {score}</Text>
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
  wrapper: {
    fontSize: 20,
  }
});


