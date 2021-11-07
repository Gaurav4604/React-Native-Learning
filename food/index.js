/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducers from './src/reducers';

const RNRedux = () => (
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
