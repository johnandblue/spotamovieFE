import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import {
  Animated,
  StyleSheet,
  View,
  NavigationExperimental,
  Text,
  AppRegistry,
  TouchableHighlight,
  Linking,
  Button
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
    backgroundColor: '#23222E',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#23222E',
    marginBottom: 5,
  },
});

const buttonStyle = {
  start:{
    padding: 10,
    margin: 10,
    backgroundColor:'rgba(0,0,0,0)',
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  startText:{
      color:'white',
      textAlign:'center',
      fontSize: 16
  }
}

class SurveyNav extends Component {

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {

  }


  render() {
    console.log('this.props: ', this.props);
    return (
      <View style={styles.container}>
        <View>
          <Text style={buttonStyle.startText}>Thank you {this.props.user.name} </Text>
          <Text style={buttonStyle.startText}>What would you like to do next?</Text>
        </View>
        <TouchableHighlight
          style={buttonStyle.start}
          onPress={() => this.props.onHandleNoMore()}
          underlayColor='white'>
          <Text style={buttonStyle.startText}>Take another Survey</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={buttonStyle.start}
          onPress={() => Actions.Login()}
          underlayColor='#fff'>
          <Text style={buttonStyle.startText}>Back to Home Screen</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
})

const mapStateToProps = (state) => ({
  navigationState: state.navigationState,
  user: state.user,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyNav);
