import React, { Component } from 'react';
import { AppRegistry, StyleSheet, SwitchIOS, TouchableHighlight, Text, View, Image, Navigator, TouchableOpacity, Modal, NavigatorIOS } from 'react-native';
import { connect } from 'react-redux';

import ModalExample from '../ModalExample/ModalExample.js';

const BlurView = require('react-native-blur').BlurView;
const VibrancyView = require('react-native-blur').VibrancyView;

// class testingStyles extends React.Component {
//   render() {
//     return (
//       <Image
//                 style={{width: 200, height: 200, marginTop: 200}}
//                 source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
//               >
//       <BlurView blurType="light" style={styles.container}>
//         <Text style={styles.welcome}>Blur component</Text>
//       </BlurView>
//     </Image>
//     );
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     // backgroundColor: 'transparent',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     color: '#FFF12F',
//   }
// });

class testingStyles extends Component {
   constructor() {
      super();
      this.state = {modalVisible: false};
   }
   openModal = () => {
      this.setState({modalVisible: true});
   }
   closeModal = () => {
      this.setState({modalVisible: false});
   }

  render() {
     return (
        <ModalExample
          modalVisible = {this.state.modalVisible}
          openModal = {this.openModal}
          closeModal = {this.closeModal}/>
     );
  }
}

// AppRegistry.registerComponent('testingStyles', () => testingStyles);

export default connect () (testingStyles);
