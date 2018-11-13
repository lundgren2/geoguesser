import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text } from 'react-native';

export class Score extends Component {
  render()  {
    let { score } = this.props;

    return (
      <View>
        <Text>{score}</Text>
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


