import React, { Component, PropTypes } from 'react';
import { Actions } from 'react-native-router-flux';
import { styles } from './styles/Wizard';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

class Wizard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Tell us about your movie prefs</Text>
        </View>
        <View style={styles.subheadingContainer}>
          <Text style={styles.subheading}>This app is young, so we need to create a base of movie preferences to detect connections with your music taste.</Text>
        </View>
        <View style={styles.skipContainer}>
          <Text style={styles.skip}>SKIP IT</Text>
        </View>
        <TouchableHighlight
          style={styles.start}
          onPress={Actions.LikedList}
          underlayColor='#fff'>
            <Text style={styles.startText}>START WIZARD</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Wizard;
