import {ADD_POINTS, CLEAR_SCORE} from "./actions";

export const addPoints = (points) => ({type: ADD_POINTS, payload: points});
export const clearScore = () => ({type: CLEAR_SCORE});