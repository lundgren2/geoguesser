import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import GameScreen from './screens/Game';

const defaultState = {
  debug: true
};

const store = createStore(rootReducer, defaultState);

export default () => {
  return (
    <Provider store={store}>
      <GameScreen />
    </Provider>
  );
};
