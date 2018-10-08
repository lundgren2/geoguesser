const initialState = 2; // Default to Östergötland

const region = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_REGION:
      return action.payload;
    default:
      return state;
  }
};

export default region;
