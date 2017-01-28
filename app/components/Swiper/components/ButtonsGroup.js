import React from 'react';
import { View, TouchableOpacity } from 'react-native';
// import { Ionicons, FontAwesome } from '@exponent/vector-icons';
import Colors from '../../../constants/Colors';
import styles from './styles/ButtonsGroup';

const ButtonsGroup = ({ like, dislike, info }) => (
  <View style={styles.root}>
    <TouchableOpacity onPress={dislike}>
      <View style={[styles.buttons, { borderColor: Colors.redColor }]}>
        <Text>NOP</Text>
        {/* <Ionicons name="ios-thumbs-down" size={50} color={Colors.redColor} /> */}
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={info}>
      <View style={styles.buttonInfo}>
        <Text>INF</Text>
        {/* <FontAwesome name="info" size={20} color="#fff" /> */}
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={like}>
      <View style={[styles.buttons, { borderColor: Colors.blueColor }]}>
        <Text>YEP</Text>
        {/* <Ionicons name="ios-thumbs-up" size={50} color={Colors.blueColor} /> */}
      </View>
    </TouchableOpacity>
  </View>
);

export default ButtonsGroup;
