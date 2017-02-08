import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
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
    padding: 20,
    margin: 50,
    backgroundColor:'#23222E',
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  startText:{
      color:'#fff',
      textAlign:'center',
      fontSize: 20
  }
}

class Navigation extends Component {
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={buttonStyle.start}
          onPress={Actions.SwiperEL}
          underlayColor='#fff'>
            <Text style={buttonStyle.startText}>Go to Survey</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={buttonStyle.start}
          onPress={Actions.LikedList}
          underlayColor='#fff'>
            <Text style={buttonStyle.startText}>Go to Liked List</Text>
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
)(Navigation);
