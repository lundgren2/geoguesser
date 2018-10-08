import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import GameScreen from './screens/Game';
import WelcomeView from './screens/Welcome';

const store = createStore(rootReducer);

export default () => {
  return (
    <Provider store={store}>
      <WelcomeView />
    </Provider>
  );
};
