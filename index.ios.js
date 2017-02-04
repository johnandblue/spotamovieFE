import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';

import reducers from  './app/reducers/reducers';
import api      from './app/lib/api.js';
import AppContainer from './app/containers/AppContainer'
import Login from './app/containers/Login'
import { SpotifySymbol, TMDBSymbol } from './app/actions/actions'

import {
  AppRegistry,
  StyleSheet
} from 'react-native';

// const API_KEY = 'b7e6c4c8913b06fd1a52159e1aa7f343';

const composeEnhancers = composeWithDevTools({ realtime: true });
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(
    api(SpotifySymbol,  'https://spotamovie.herokuapp.com'),
    api(TMDBSymbol,     'https://api.themoviedb.org/3', '?api_key=b7e6c4c8913b06fd1a52159e1aa7f343')
  )
));

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

export default App

AppRegistry.registerComponent('spotamovieFE', () => App);
