import React, { Component, PropTypes } from 'react';
import base64 from 'base-64';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { login, logout, loading } from '../actions/actions'
import config from '../../config';
import querystring from 'querystring';
import {Buffer} from 'buffer';
import { Actions } from 'react-native-router-flux';
import { styles } from './styles/stylesLogin'
import { Spinner } from 'nachos-ui';

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


class Login extends Component {

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  handleOpenSpotifyURL(event) {
    let code = event.url.match(/code=(.+)\&/);
    code = code[1];
    this.props.login(code);
  }

  handleGreeting() {
    if (this.props.user.name !== undefined) {
      return <Text style={styles.startText}>Welcome {this.props.user.name}</Text>
    } else {
      return <Text style={styles.startText}>Welcome</Text>
    }
  }

  handleLogin() {
    this.props.loading()
    spotifyOauth()
    Linking.addEventListener('url', this.handleOpenSpotifyURL.bind(this));

  }

  handleLogout() {
    this.props.logout()
    this.setState({userLogged: false})
    console.log(this.props.user);
  }

  renderLoginScreen() {
    return (
      <View style={styles.container}>
        <View style={styles.containerWelcome}>
          <Text style={styles.welcome}>
            SPOT A MOVIE
          </Text>
        </View>
        <View style={styles.containerSubheading}>
          <Text style={styles.subheading}>Get movie recommendations based on your music preferences</Text>
        </View>
        <View style={styles.containerInstructions}>
          <Text style={styles.instructions}>Sign in with Spotify so we can process your playlists</Text>
        </View>
        <View style={styles.startContainer}>
          <TouchableHighlight
            style={styles.start}
            onPress={this.handleLogin.bind(this)}
            underlayColor='red'>
            <View>
              <Text style={styles.startText}>SIGN IN WITH SPOTIFY</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

  render() {

    if (this.props.user.loading) {
      return (
        <View style={styles.containerLoader}>
          <View style={styles.textView}>
            <Text style={styles.title}>
              LOGGING IN...
            </Text>
            <Spinner />
          </View>
        </View>
      );
    }
    if (this.props.user.userToken) {
      return (
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.start}
            // onPress={Actions.SwiperEL}
            underlayColor='red'>
            {this.handleGreeting()}
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.start}
            onPress={Actions.SwiperEL}
            underlayColor='#fff'>
            <Text style={styles.startText}>Go to Survey</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.start}
            onPress={Actions.LikedList}
            underlayColor='#fff'>
            <Text style={styles.startText}>Go to Liked List</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.start}
            onPress={Actions.Recomm}
            underlayColor='#fff'>
            <Text style={styles.startText}>Go to Recommendation</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.start}
            onPress={() => this.handleLogout()}
            underlayColor='red'>
            <Text style={styles.startText}>Logout</Text>
          </TouchableHighlight>
        </View>
      );
    } else {
      return (
        this.renderLoginScreen()
      )
    }

  }
}

const mapDispatchToProps = (dispatch) => ({
  loading: () => dispatch(loading()),
  login: (code) => dispatch(login(code)),
  logout: () => dispatch(logout())
})

const mapStateToProps = (state) => ({
  navigationState: state.navigationState,
  user: state.user,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
