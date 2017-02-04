import React, { Component, PropTypes } from 'react';
import base64 from 'base-64';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { login, logout } from '../actions/actions'
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
    backgroundColor: '#333',
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

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userLogged: false
    }
  }


  componentDidMount() {
      spotifyOauth()
      Linking.addEventListener('url', this.handleOpenSpotifyURL.bind(this));
  }

  componentWillReceiveProps(nextProps) {

  }

  handleOpenSpotifyURL(event) {
    let code = event.url.match(/code=(.+)\&/);
    code = code[1];
    console.log('in handleOpenSpotifyURL: ', code);
    this.props.login(code);
  }

  handleGreeting() {
    if (this.props.user.name !== undefined) {
      return <Text style={buttonStyle.startText}>Welcome {this.props.user.name}</Text>
    } else {
      return <Text style={buttonStyle.startText}>Welcome</Text>
    }
  }

  handleLogin() {
    spotifyOauth()
    console.log('in handleOpenSpotifyURL: ', this.props);
    Linking.addEventListener('url', this.handleOpenSpotifyURL.bind(this));

  }

  handleLogout() {
    console.log('handleLogout');
    this.props.logout()
    this.setState({userLogged: false})
    console.log(this.props.user);
  }

  renderLoginButton() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={buttonStyle.start}
          onPress={this.handleLogin.bind(this)}
          underlayColor='red'>
            <Text style={buttonStyle.startText}>Login</Text>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    if (this.props.user.userToken) {
      return (
        <View style={styles.container}>
          <TouchableHighlight
            style={buttonStyle.start}
            // onPress={Actions.SwiperEL}
            underlayColor='red'>
            {this.handleGreeting()}
          </TouchableHighlight>
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
          <TouchableHighlight
            style={buttonStyle.start}
            onPress={Actions.Recomm}
            underlayColor='#fff'>
            <Text style={buttonStyle.startText}>Go to Recommendation</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={buttonStyle.start}
            onPress={() => this.handleLogout()}
            underlayColor='red'>
            <Text style={buttonStyle.startText}>Logout</Text>
          </TouchableHighlight>
        </View>
      );
    } else {
      return (
        this.renderLoginButton()
      )
    }

  }
}

const mapDispatchToProps = (dispatch) => ({
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
