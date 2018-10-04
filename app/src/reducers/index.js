import { combineReducers } from 'redux';
import settingsReducer from './settingsReducer';
import levelsReducer from './levelsReducer';

export default combineReducers({
  settings: settingsReducer,
  levels: levelsReducer
});
