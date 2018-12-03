import { RESET_LIFE, REDUCE_LIFE, INCREASE_LIFE, } from './actions';

export const removeLife = () => ({ type: REDUCE_LIFE });
export const addLife = () => ({ type: INCREASE_LIFE });
export const resetLife = () => ({ type: RESET_LIFE });