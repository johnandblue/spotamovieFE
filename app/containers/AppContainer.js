import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Scene, Router} from 'react-native-router-flux';
import Login from '../containers/Login';
import Wizard from '../containers/Wizard';
import SwiperEL from '../components/Swiper/SwiperEL';
import LikedList from '../components/LikedList/LikedList';
import Recomm from '../components/Recomm/Recomm';
import SurveyNav from '../components/Swiper/components/SurveyNav';
import ActionCreators from '../actions';

import {
  Animated,
  StyleSheet,
  View,
  NavigationExperimental,
  Text,
  Button
} from 'react-native';


import { themeManager } from 'nachos-ui'

const buttonTheme = themeManager.getStyle('Button')

const newButtonTheme = {
  ...buttonTheme,
  BUTTON_STATE_PRIMARY: '#94de45',
  BUTTON_STATE_SUCCESS: '#2f8cff',
  BUTTON_STATE_DANGER:  '#ED462C'
}

themeManager.setSource('Button', () => (newButtonTheme))

class AppContainer extends Component {
  render() {
   return (
    <Router>
      <Scene key="root" hideNavBar="false">
        <Scene key="Login" component={Login} title="Login"/>
        <Scene key="Wizard" component={Wizard} title="Wizard"/>
        <Scene key="Recomm" component={Recomm} title="Recommendations" />
        <Scene key="LikedList" component={LikedList} title="Liked Movies" />
        <Scene key="SwiperEL" component={SwiperEL} title="Movie Survey" />
        <Scene key="SurveyNav" component={SurveyNav} title="" />

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
