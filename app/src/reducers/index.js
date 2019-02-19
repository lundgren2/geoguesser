import { combineReducers } from 'redux';
import settingsReducer from './settingsReducer';
import layersReducer from './layersReducer';
import gameReducer from './gameReducers';

export default combineReducers({
  settings: settingsReducer,
  layers: layersReducer,
  game: gameReducer,
  map: {
    activeRegion: {},
    blurred: false,
  },
});
