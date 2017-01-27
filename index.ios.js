import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import reducers from  './app/reducers/reducers';
import api      from './app/lib/api';
import AppContainer from './app/containers/AppContainer'


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(api)));

store.subscribe(() => {
  saveState({
    // events: store.getState().events,
    // user: store.getState().user
  });
});


// export default class spotamovieFE extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           SPOT A MOVIE or DIE HARD
//         </Text>
//       </View>
//     );
//   }
// }


const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

const styles = StyleSheet.create({
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

AppRegistry.registerComponent('spotamovieFE', () => App);
