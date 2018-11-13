import {ADD_POINTS} from "../../actions";

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
    default:
      return state;
  }
};

export default scoreboard;
