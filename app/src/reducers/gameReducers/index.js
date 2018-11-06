import { combineReducers } from 'redux';

import markersReducer from './markersReducer';
import correctMarkerReducer from './correctMarkerReducer';
import regionReducer from './regionReducer';

export default combineReducers({
  region: regionReducer,
  markers: markersReducer,
  correctMarker: correctMarkerReducer
});
