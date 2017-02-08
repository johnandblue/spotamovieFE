import React, { Component, PropTypes } from 'react';
import { Actions } from 'react-native-router-flux';
import { styles } from './styles/RecLoader';
import Icon from 'react-native-vector-icons/Ionicons';
import { Spinner } from 'nachos-ui';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

const arrowIcon = (<Icon name="md-arrow-round-forward" size={30} color="white" height={20} />);

class RecLoader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerHeading}>
          <Text style={styles.heading}>Thank you!</Text>
        </View>
        <View style={styles.containerSubheading}>
          <Text style={styles.subheading}>We're now processing your songs and movies.</Text>
        </View>
        <View style={styles.containerLoader}>
          <Spinner color="#94de45" />
        </View>
      </View>
    );
  }
}

export default RecLoader;
