import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
// import { Ionicons, FontAwesome } from '@exponent/vector-icons';
import Colors from '../../../constants/Colors';
import styles from './styles/ButtonsGroup';


export default class ButtonsGroup extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={dislike}>
          <View style={{ borderColor: 'red'}}>
            <Text>NOP</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={info}>
          <View style={{ borderColor: 'white'}}>
            <Text>NOP</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={like}>
          <View style={{ borderColor: 'green'}}>
            <Text>NOP</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
