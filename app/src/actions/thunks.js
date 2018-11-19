import _ from 'lodash';
import {
  SET_REGION,
  SET_INITIAL_MARKERS,
  SET_MARKERS,
  SET_CORRECT_MARKER,
  REMOVE_CORRECT_MARKER
} from '../actions';
import gameReducers from '../reducers/gameReducers';

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

    if (markerId === correctMarker.id) {
      dispatch(correctMarkerChosen(correctMarker.id));
    } else {
      // dispatch(wrongMarkerChosen());
    }
  };
};

// The player has chosen the correct marker
export const correctMarkerChosen = markerId => {
  return (dispatch, getState) => {
    const { game } = getState();

    // If markers left will be empty call lastCorrectMarker
    if (game.markersLeft.length === 1) {
      dispatch(lastCorrectMarker());
    } else {
      // Remove correctMarker from the list of markers left
      dispatch({ type: REMOVE_CORRECT_MARKER, payload: game.correctMarker });

      // Setup next correct marker
      dispatch(randomizeCorrectMarker());
    }
  };
};

/* // The player has chosen an incorrect marker
export const wrongMarkerChosen = () => {
  dispatch({ type: LOST_GAME, payload: 0 });
}; */

// The player has finished a region
export const lastCorrectMarker = () => {
  return (dispatch, getState) => {
    const {
      game: { region }
    } = getState();

    // Player wins the game if this was the last region
    if (region === 5) console.log('Player won the game!!!');

    // Setup next region
    dispatch(setupNextRegion());
  };
};

// Setup the initial region/level to play
export const setupInitialRegion = () => {
  return (dispatch, getState) => {
    const {
      game: { region }
    } = getState();

    dispatch({ type: SET_REGION, payload: region });
    dispatch({ type: SET_INITIAL_MARKERS, payload: region });
    dispatch({ type: SET_MARKERS, payload: region });
    dispatch(randomizeCorrectMarker());
  };
};

// Setup the next region/level to play
export const setupNextRegion = () => {
  return (dispatch, getState) => {
    const {
      game: { region }
    } = getState();

    // Just take the next region, no randomization
    const newRegion = region + 1;
    dispatch({ type: SET_REGION, payload: newRegion });
    dispatch({ type: SET_INITIAL_MARKERS, payload: newRegion });
    dispatch({ type: SET_MARKERS, payload: newRegion });
    dispatch(randomizeCorrectMarker());
  };
};

// Randomize the next correct marker for a region/level
export const randomizeCorrectMarker = () => {
  return (dispatch, getState) => {
    const { game } = getState();

    // Randomize a new correct marker from the markers left list
    const id = _.random(0, game.markersLeft.length - 1);
    const correctMarker = _.nth(game.markersLeft, id);

    dispatch({ type: SET_CORRECT_MARKER, payload: correctMarker });
    console.log(game);
  };
};
