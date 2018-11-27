import { SET_PROGRESS_TIMER } from "../../actions";
import { Animated } from "react-native";


const initialState = {
  progress: new Animated.Value(100),
};

const time = (state = initialState, action) => {
  switch(action.type) {
    case SET_PROGRESS_TIMER:
      return {
        ...state,
        progress: action.payload,
      };

    default:
      return state;
  }
};

export default time;
