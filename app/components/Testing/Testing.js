import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';

const BlurView = require('react-native-blur').BlurView;
const VibrancyView = require('react-native-blur').VibrancyView;

const background = 'http://iphonewallpapers-hd.com/thumbs/firework_iphone_wallpaper_5-t2.jpg';

class testingStyles extends React.Component {
  render() {
    return (
      <Image source={{ background}} style={styles.container}>
        {/* <BlurView blurType="light" style={styles.container}> */}
         <Text style={styles.welcome}>Blur component</Text>
        {/* </BlurView> */}

        <VibrancyView blurType="dark" style={styles.container}>
          <Text style={styles.welcome}>Vibrancy component</Text>
        </VibrancyView>
      </Image>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFF12F',
  }
});

AppRegistry.registerComponent('testingStyles', () => testingStyles);

export default connect () (testingStyles);
