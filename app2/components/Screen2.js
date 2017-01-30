import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Screen2 extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text onPress={Actions.Screen1}>This is Screen2!</Text>
      </View>
    )
  }
}
