import { combineReducers } from 'redux';

import markersReducer from './markersReducer';
import correctMarkerReducer from './correctMarkerReducer';
import regionReducer from './regionReducer';
import scoreReducer from './scoreReducer';

export default combineReducers({
  region: regionReducer,
  markers: markersReducer,
  correctMarker: correctMarkerReducer,
  scoreboard: scoreReducer
});
