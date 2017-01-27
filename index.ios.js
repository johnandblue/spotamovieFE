import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import reducers from '../reducers/reducers';
import api      from '../lib/api';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, loadState(), composeEnhancers(applyMiddleware(api, thunkMiddleware)));

store.subscribe(() => {
  saveState({
    events: store.getState().events,
    user: store.getState().user
  });
});


export default class spotamovieFE extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button
          onPress={() => console.log('HELLO')}
          title="Learn More"
          color="#841584"
          backgroundColor="blue"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

AppRegistry.registerComponent('spotamovieFE', () => spotamovieFE);
