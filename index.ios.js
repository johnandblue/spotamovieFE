import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import reducers from  './app/reducers/reducers';
import api      from './app/lib/api';
import AppContainer from './app/containers/AppContainer'
import Login from './app/containers/Login'

import {
  AppRegistry,
  StyleSheet
} from 'react-native';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(api)));

const App = () => (
  <Provider store={store}>
    <Login />
  </Provider>
)


AppRegistry.registerComponent('spotamovieFE', () => App);
