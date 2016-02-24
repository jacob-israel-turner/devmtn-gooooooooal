import React, { View, Text } from 'react-native'

// var React = require('react-native')
// var View = React.View
// var Text = React.Text

const Goal = React.createClass({
  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
      </View>
    )
  }
})

export default Goal
