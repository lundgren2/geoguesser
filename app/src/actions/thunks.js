import _ from 'lodash';
import { SET_MARKERS, SET_REGION, SET_CORRECT_MARKER } from '../actions';

// NOTE: Redux-thunks should never be async-await.

/**
 * Checks if pressed marker during game is correct.
 * If true starts next level.
 * TODO: If false, alerts user.
 */
export const handleMarkerPress = markerId => {
  return (dispatch, getState) => {
    const {
      game: { correctMarker }
    } = getState();
    console.log('MarkerID:', markerId, 'CorrectMarker:', correctMarker.id);

    if (markerId === correctMarker.id) {
      dispatch(correctMarkerChosen());
    }
  };
};

export const correctMarkerChosen = () => {
  return (dispatch, getstate) => {
    // Start new level.
    dispatch(setupLevel());
  };
};

export const setupLevel = () => {
  return (dispatch, getState) => {
    const {
      game: { region }
    } = getState();

    // TEMPORARY
    const newRegion = region === 1 ? 0 : 1;
    dispatch({ type: SET_REGION, payload: newRegion });
    dispatch({ type: SET_MARKERS, payload: newRegion });
    dispatch(randomizeCorrectMarker());
  };
};

export const randomizeCorrectMarker = () => {
  return (dispatch, getState) => {
    const { game } = getState();

    const id = _.random(0, game.markers.length - 1);
    const correctMarker = _.nth(game.markers, id);

    dispatch({ type: SET_CORRECT_MARKER, payload: correctMarker });
  };
};
