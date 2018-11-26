import {
  TOGGLE_OPTIONS_MENU,
  TOGGLE_GAME_WON,
  TOGGLE_GAME_LOST
} from './actions';

export const toggleOptionsMenu = () => ({ type: TOGGLE_OPTIONS_MENU });

export const toggleGameWon = () => ({ type: TOGGLE_GAME_WON });

export const toggleGameLost = () => ({ type: TOGGLE_GAME_LOST });
