import _ from 'lodash';
import {
  SET_REGION,
  SET_INITIAL_MARKERS,
  SET_MARKERS,
  SET_CORRECT_MARKER,
  REMOVE_CORRECT_MARKER,
  TOGGLE_GAME_WON,
  TOGGLE_GAME_LOST,
  TOGGLE_START_GAME
} from '../actions';
import { addPoints, clearScore } from "./score";
import { SET_PROGRESS_TIMER } from "./actions";
import { Animated, Easing } from "react-native";

// NOTE: Redux-thunks should never be async-await.

/* Start the game from the beginning */
export const toggleStartGame = () => {
  return (dispatch, getState) => {
    const { game: { startGame } } = getState();
    dispatch({ type: TOGGLE_START_GAME });
    if (startGame) {
      dispatch(restartProgressTimer());
    }
  };
};

/**
 * Checks if pressed marker during game is correct.
 * If true starts next level.
 * TODO: If false, alerts user.
 */
export const handleMarkerPress = (markerId) => {
  return (dispatch, getState) => {
    const {
      game: { correctMarker }
    } = getState();

    if (markerId === correctMarker.id) {
      dispatch(correctMarkerChosen(correctMarker.id));
    } else {
      dispatch(wrongMarkerChosen());
    }
  };
};

// The player has chosen the correct marker
export const correctMarkerChosen = markerId => {
  return (dispatch, getState) => {
    const { game } = getState();

    // Add points
    const points = Math.floor(game.time.progress.__getValue());
    dispatch(addPoints(points));

    // If markers left will be empty call lastCorrectMarker
    if (game.markersLeft.length === 1) {
      dispatch(lastCorrectMarker());
    } else {
      // Remove correctMarker from the list of markers left
      dispatch({ type: REMOVE_CORRECT_MARKER, payload: game.correctMarker });

      // Setup next correct marker
      dispatch(randomizeCorrectMarker());
    }

    // Restart timer
    dispatch(restartProgressTimer());
  };
};

// Start game progress timer
export const restartProgressTimer = () => {
  return (dispatch, getState) => {
    // Stop the current timer and create a new
    const { game: { time } } = getState();
    Animated.timing(time.progress).stop();

    // Create a new one
    const timer = new Animated.Value(100);
    Animated.timing(timer, {
      toValue: 0,
      duration: 14000,
      easing: Easing.linear
    }).start(({ finished }) => {
      if (finished) {
        // Time ran out, player lost the game
        dispatch(wrongMarkerChosen());
      }
    });
    dispatch({ type: SET_PROGRESS_TIMER, payload: timer});
  }
};

// Stop game progress timer
export const stopProgressTimer = () => {
  return (dispatch, getState) => {
    const { game: { time } } = getState();
    Animated.timing(time.progress).stop();
  }
};

// The player has chosen an incorrect marker and lost the game
export const wrongMarkerChosen = () => {
  return dispatch => {
    // In the future we will probably add logic for multiple lifes here.
    dispatch({ type: TOGGLE_GAME_LOST });
    dispatch(clearScore());
    dispatch(stopProgressTimer());
  };
};

// The player has finished a region
export const lastCorrectMarker = () => {
  return (dispatch, getState) => {
    const {
      game: { region }
    } = getState();

    // Player wins the game if this was the last region
    if (region === 5) {
      dispatch({ type: TOGGLE_GAME_WON });
    } else {
      // Setup next region
      dispatch(setupNextRegion());
    }
  };
};

// Setup the initial region/level to play
export const setupInitialRegion = () => {
  return dispatch => {
    const region = 1;

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
  };
};
