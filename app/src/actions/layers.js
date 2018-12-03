import {
  TOGGLE_MAIN_MENU,
  TOGGLE_GAME_MENU,
  START_GAME,
  STOP_GAME,
  PAUSE_GAME,
  TOGGLE_GAME_WON,
  TOGGLE_GAME_LOST,
} from './actions';

export const toggleGameMenu = () => ({ type: TOGGLE_GAME_MENU });

export const startGame = () => ({ type: START_GAME });

export const stopGame = () => ({ type: STOP_GAME });

export const toggleGameWon = () => ({ type: TOGGLE_GAME_WON });

export const toggleGameLost = () => ({ type: TOGGLE_GAME_LOST });
