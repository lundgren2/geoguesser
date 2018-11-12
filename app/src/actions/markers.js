import {SET_MARKERS, SET_MARKERS_FORCE} from "./actions";

export const setMarkers = (markers) => ({type: SET_MARKERS, payload: markers});

export const setMarkersForce = (markers) => ({type: SET_MARKERS_FORCE, payload: markers});