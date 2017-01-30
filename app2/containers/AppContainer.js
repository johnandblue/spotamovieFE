import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
// import { ActionCreators } from '../actions'

import {
  Animated,
  StyleSheet,
  View,
  NavigationExperimental,
  Text
} from 'react-native';

const {
  PropTypes: NavigationPropTypes,
  StateUtils: NavigationStateUtils,
  Card: NavigationCard,
  Transitioner: NavigationTransitioner,
} = NavigationExperimental;

const {
  PagerStyleInterpolator: NavigationPagerStyleInterpolator,
} = NavigationCard;

class AppContainer extends Component {

  // constructor(props: any, context: any) {
  //   super(props, context);
  //   this._render = this._render.bind(this);
  //   this._renderScene = this._renderScene.bind(this);
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          SPOT A MOVIE or DIE HARD
        </Text>
      </View>
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
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(ActionCreators, dispatch);
// }
//
// function mapStateToProps(state) {
//   return {
//     navigationState: state.navigationState
//   };
// }


export default connect()(AppContainer);

// export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
