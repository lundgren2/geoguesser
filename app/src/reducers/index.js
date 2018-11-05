import { combineReducers } from 'redux';
import settingsReducer from './settingsReducer';
import layersReducer from './layersReducer';
import {
  regionReducer,
  markersReducer,
  correctMarkerReducer
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
    blurred: false
  }
});
