import { ADD_POINTS, CLEAR_SCORE, REQUEST_POINTS } from '../../actions';

const initialState = {
  score: 0.0,
  requestPoints: false
};

const scoreboard = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POINTS:
      return {
        ...state,
        score: (state.score + action.payload <= 0) ? 0 : state.score + action.payload,
        requestPoints: false
      };

    case REQUEST_POINTS:
      return {
        ...state,
        requestPoints: true
      };

    case CLEAR_SCORE:
      return {
        ...state,
        score: 0.0
      };

    default:
      return state;
  }
};

export default scoreboard;
