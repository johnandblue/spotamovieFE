import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {Scene, Router} from 'react-native-router-flux';
import SwiperEL from '../components/Swiper/SwiperEL';
import LikedList from '../components/LikedList/LikedList';
import Login from '../containers/Login'
import ActionCreators from '../actions'

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
        <Scene key="LikedList" component={LikedList} title="Liked Movies" />
        <Scene key="Login" component={Login} title="Login"/>
        <Scene key="SwiperEL" component={SwiperEL} title="Movie Survey" />
      </Scene>
    </Router>
    );
  }
}


function mapStateToProps(state) {
  return {

  };
}
const mapDispatchToProps = (dispatch) => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
