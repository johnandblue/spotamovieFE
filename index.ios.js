import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';


import reducers from  './app/reducers/reducers';
import api_movie      from './app/lib/api_movie.js';
import AppContainer from './app/containers/AppContainer'
import Login from './app/containers/Login'

import {
  AppRegistry,
  StyleSheet
} from 'react-native';

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
const store = createStore(reducers, composeEnhancers(applyMiddleware(api_movie)));

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)


AppRegistry.registerComponent('spotamovieFE', () => App);
