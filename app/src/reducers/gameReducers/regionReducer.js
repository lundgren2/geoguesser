import { SET_REGION } from '../../actions';

const initialState = 0; // Default to Sweden

const region = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGION:
      return action.payload;
    default:
      return state;
  }
};

export default region;
