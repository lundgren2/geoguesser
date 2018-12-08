import { RESET_LIFE, DECREASE_LIFE, INCREASE_LIFE } from '../../actions';

const START_LIFE = 3;

const initialState = {
  life: START_LIFE,
};

const playerLife = (state = initialState, action) => {
  switch (action.type) {
    case DECREASE_LIFE:
      return {
        life: state.life - 1,
      };

    case INCREASE_LIFE:
      return {
        life: state.life === START_LIFE ? state.life : state.life + 1,
      };

    case RESET_LIFE:
      return {
        life: START_LIFE,
      };

    default:
      return state;
  }
};

export default playerLife;
