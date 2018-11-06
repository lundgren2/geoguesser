import { SET_REGION } from '../../actions';

const initialState = 2; // Default to Östergötland

const region = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGION:
      return action.payload;
    default:
      return state;
  }
};

export default region;
