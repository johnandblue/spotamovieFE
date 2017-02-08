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
        <View style={styles.containerHeading}>
          <Text style={styles.heading}>Tell us about your movie prefs</Text>
        </View>
        <View style={styles.containerSubheading}>
          <Text style={styles.subheading}>This app is young, so we need to create a base of movie preferences to detect connections with your music taste.</Text>
        </View>
        <View style={styles.containerSkip}>
          <Text style={styles.skip}>SKIP IT</Text>
        </View>
        <View style={styles.containerStart}>
          <TouchableHighlight
            style={styles.start}
            onPress={Actions.SwiperEL}
            underlayColor='#fff'>
              <Text style={styles.startText}>START WIZARD</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Wizard;
