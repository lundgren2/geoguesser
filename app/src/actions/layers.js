import {
  TOGGLE_PAUSE_MENU,
  TOGGLE_MAIN_MENU,
  START_GAME,
  STOP_GAME,
  PAUSE_GAME,
} from './actions';

export const togglePauseMenu = () => ({ type: TOGGLE_PAUSE_MENU });

export const toggleMainMenu = () => ({ type: TOGGLE_MAIN_MENU });

export const startGame = () => ({ type: START_GAME });

export const stopGame = () => ({ type: STOP_GAME });

export const pauseGame = () => ({ type: PAUSE_GAME });
