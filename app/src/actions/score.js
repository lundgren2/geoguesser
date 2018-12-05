import { ADD_POINTS, REDUCE_POINTS, CLEAR_SCORE, REQUEST_POINTS } from './actions';

export const addPoints = points => ({ type: ADD_POINTS, payload: points });
export const reducePoints = points => ({ type: REDUCE_POINTS, payload: points });
export const requestPoints = () => ({ type: REQUEST_POINTS });
export const clearScore = () => ({ type: CLEAR_SCORE });
