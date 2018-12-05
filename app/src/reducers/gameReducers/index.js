import { combineReducers } from 'redux';

import regionReducer from './regionReducer';
import markersReducer from './markersReducer';
import markersLeftReducer from './markersLeftReducer';
import correctMarkerReducer from './correctMarkerReducer';
import scoreReducer from './scoreReducer';
import markersHighlighted from "./markersHighlighted";

export default combineReducers({
  region: regionReducer,
  markers: markersReducer,
  markersLeft: markersLeftReducer,
  markersHighlighted: markersHighlighted,
  correctMarker: correctMarkerReducer,
  scoreboard: scoreReducer,
});
