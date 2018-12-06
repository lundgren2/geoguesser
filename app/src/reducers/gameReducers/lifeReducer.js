import { RESET_LIFE, DECREASE_LIFE, INCREASE_LIFE} from '../../actions';

const STARTLIFE = 3;

const initialState = {
  life: STARTLIFE
};

const playerLife = (state = initialState, action) => {
  switch (action.type) {
    case DECREASE_LIFE:
      return {
        life: state.life - 1
      };

    case INCREASE_LIFE:
      return {
        life: state.life == STARTLIFE ? state.life : state.life + 1
      };

    case RESET_LIFE:
      return {
        life: STARTLIFE
      };

    default:
      return state;
  }
};

export default playerLife;