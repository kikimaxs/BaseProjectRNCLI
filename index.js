/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Enable Reactotron in development
if (__DEV__) {
  require('./src/configs/debug');
}

AppRegistry.registerComponent(appName, () => App);
