import _ from 'lodash';
import { SET_CORRECT_MARKER } from '../../actions';

const initialState = null;

const markers = (state = initialState, action) => {
  switch (action.type) {
    case SET_CORRECT_MARKER:
      return action.payload;
    default:
      return state;
  }
};

export default markers;
