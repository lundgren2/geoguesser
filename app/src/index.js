// Taken from crna-entry.js
// Do not edit, needed to run the app properly.

import Expo from 'expo';
import App from './App';

if (process.env.NODE_ENV === 'development') {
  Expo.KeepAwake.activate();
}

Expo.registerRootComponent(App);
