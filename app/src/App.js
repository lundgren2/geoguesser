import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import GameScreen from './screens/Game';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default () => {
  return (
    <Provider store={store}>
      <GameScreen />
    </Provider>
  );
};
