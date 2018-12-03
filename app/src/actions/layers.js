import {
  START_GAME,
  STOP_GAME,
  SETUP_GAME,
  PAUSE_GAME,
  TOGGLE_GAME_WON,
  TOGGLE_GAME_LOST,
  TOGGLE_GAME_MENU,
  TOGGLE_MAIN_MENU,
} from './actions';

export const startGame = () => ({ type: START_GAME });

export const setupGame = () => ({ type: SETUP_GAME });

export const stopGame = () => ({ type: STOP_GAME });

export const pauseGame = () => ({ type: PAUSE_GAME });

export const toggleGameWon = () => ({ type: TOGGLE_GAME_WON });

export const toggleGameLost = () => ({ type: TOGGLE_GAME_LOST });

export const toggleGameMenu = () => ({ type: TOGGLE_GAME_MENU });

export const toggleMainMenu = () => ({ type: TOGGLE_MAIN_MENU });
