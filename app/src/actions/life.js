import { RESET_LIFE, DECREASE_LIFE, INCREASE_LIFE, } from './actions';

export const decreaseLife = () => ({ type: DECREASE_LIFE });
export const increaseLife = () => ({ type: INCREASE_LIFE });
export const resetLife = () => ({ type: RESET_LIFE });