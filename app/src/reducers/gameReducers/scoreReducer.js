import {ADD_POINTS, CLEAR_SCORE} from "../../actions";

const initialState = {
  score: 0.0,
};

const scoreboard = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POINTS:
      return {
        ...state,
        score: state.score + action.payload,
      };
    case CLEAR_SCORE:
      return {
        ...state,
        score: 0.0,
      };
    default:
      return state;
  }
};

export default scoreboard;
