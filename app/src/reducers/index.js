import { combineReducers } from 'redux';
import settingsReducer from './settings';

export default combineReducers({
  settings: settingsReducer
});
