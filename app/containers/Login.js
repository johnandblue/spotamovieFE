import React, { Component, PropTypes } from 'react';
import base64 from 'base-64';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { login } from '../actions/actions'
import config from '../../config';
import querystring from 'querystring';
import {Buffer} from 'buffer';
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

const generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const scope = 'user-read-private user-read-email playlist-read-private';
const state = generateRandomString(16);

const query= ('https://accounts.spotify.com/authorize?' +

querystring.stringify({
  response_type: 'code',
  client_id: config.client_id,
  scope: scope,
  redirect_uri: config.redirect_uri,
  state: state
}))

function spotifyOauth () {
  Linking.openURL(query);
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

const buttonStyle = {
  start:{
    padding: 30,
    margin: 50,
    paddingBottom:20,
    backgroundColor:'peru',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  startText:{
      color:'#fff',
      textAlign:'center',
  }
}

class Login extends Component {
  componentDidMount() {
    spotifyOauth()
    Linking.addEventListener('url', this.handleOpenSpotifyURL.bind(this));
  }

  componentDidUpdate() {

console.log(this.props);
  }

  handleOpenSpotifyURL(event) {
    let code = event.url.match(/code=(.+)\&/);
    code = code[1];
    this.props.login(code);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          After Spotify Login
        </Text>
        <TouchableHighlight
          style={buttonStyle.start}
          onPress={Actions.SwiperEL}
          underlayColor='#fff'>
            <Text style={buttonStyle.startText}>Start</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (code) => dispatch(login(code)),
})

const mapStateToProps = (state) => ({
  navigationState: state.navigationState,
  user: state.user,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
