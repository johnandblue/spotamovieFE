import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {Scene, Router} from 'react-native-router-flux';
import Screen1 from '../components/Screen1';
import Screen2 from '../components/Screen2'


import ActionCreators from '../actions'

console.log(ActionCreators.changeFlag);

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

    // <Router>
    //   <Scene key="root">
    //     <Scene key="Screen1" component={Screen1} title="Screen1" initial={true} />
    //     <Scene key="Screen2" component={Screen2} title="Screen2"/>
    //   </Scene>
    // </Router>

      <View style={styles.container}>
        <Button
          style={styles.welcome}
          title="Button"
          onPress={() => {this.props.changeFlag()}}
          ></Button>

          <Text>
            {this.props.flag? 'flag!' : 'no flag'}
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
    marginTop: 40,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


function mapDispatchToProps(dispatch) {
  return {
    changeFlag: () => dispatch(ActionCreators.changeFlag())
    }
}

function mapStateToProps(state) {
  return {
    flag: state.flag
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
