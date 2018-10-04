import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import GameScreen from './screens/Game';

const store = createStore(rootReducer);

export default () => {
  return (
    <Provider store={store}>
      <GameScreen />
    </Provider>
  );
};
