import { combineReducers } from 'redux';

import regionReducer from './regionReducer';
import markersReducer from './markersReducer';
import markersLeftReducer from './markersLeftReducer';
import correctMarkerReducer from './correctMarkerReducer';
import scoreReducer from './scoreReducer';
import lifeReducer from './lifeReducer';
import markerHighlighted from './markerHighlightedReducer';

export default combineReducers({
  region: regionReducer,
  markers: markersReducer,
  markersLeft: markersLeftReducer,
  markerHighlighted: markerHighlighted,
  correctMarker: correctMarkerReducer,
  scoreboard: scoreReducer,
  playerLife: lifeReducer,
});
