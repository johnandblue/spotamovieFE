import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
// import { ActionCreators } from '../actions'
import config from '../../config';
import querystring from 'querystring';
import {
  Animated,
  StyleSheet,
  View,
  NavigationExperimental,
  Text,
  AppRegistry,
  TouchableHighlight,
  Linking
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

class AppContainer extends Component {
  componentDidMount() {
    console.log('componentDidMount');
    spotifyOauth()
    Linking.addEventListener('url', this._handleOpenURL);
  }

  _handleOpenURL(event) {
    console.log(event.url);
  }

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
