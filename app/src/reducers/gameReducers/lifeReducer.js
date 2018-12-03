import { RESET_LIFE, REDUCE_LIFE, INCREASE_LIFE} from '../../actions';

const STARTLIFE = 3;

const initialState = {
  life: STARTLIFE
};

const playerLife = (state = initialState, action) => {
  console.log("Life: " + state.life);
  switch (action.type) {
    case REDUCE_LIFE:
      return {
        ...state,
        life: state.life - 1
      };

    case INCREASE_LIFE:
      return {
        ...state,
        life: state.life + 1
      };

    case RESET_LIFE:
      return {
        ...state,
        life: STARTLIFE
      };

    default:
      return state;
  }
};

export default playerLife;