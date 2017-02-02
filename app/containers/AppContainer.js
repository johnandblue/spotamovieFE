import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Scene, Router} from 'react-native-router-flux';
import SwiperEL from '../components/Swiper/SwiperEL';
import Recomm from '../components/Recomm/Recomm.js';
import Login from '../containers/Login';
import ActionCreators from '../actions';

import {
  Animated,
  StyleSheet,
  View,
  NavigationExperimental,
  Text,
  Button
} from 'react-native';


class AppContainer extends Component {
  render() {
   return (
    <Router>
      <Scene key="root">
        <Scene key="Recommendations" component={Recomm} title="Recommendations" />
        <Scene key="SwiperEL" component={SwiperEL} title="Movie Survey" />
        <Scene key="Login" component={Login} title="Login"/>
      </Scene>
    </Router>
    );
  }
}


const styles = StyleSheet.create({
  scene: {
    flex: 1,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00AA00',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


function mapStateToProps(state) {
  return {

  };
}
const mapDispatchToProps = (dispatch) => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
