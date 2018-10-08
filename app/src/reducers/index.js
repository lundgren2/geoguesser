import { combineReducers } from 'redux';
import settingsReducer from './settingsReducer';
import {
  correctMarkerReducer,
  markersReducer,
  levelsReducer
} from './gameReducers';

export default combineReducers({
  settings: settingsReducer,
  layers: layersReducer,
  game: {
    region: regionReducer,
    markers: markersReducer,
    correctMarker: correctMarkerReducer
  },
  map: {
    activeRegion: {},
    blurred: boolean
  }
});
