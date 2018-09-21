import { combineReducers } from 'redux';
import debugReducer from './debug';

export default combineReducers({
  debug: debugReducer
});
