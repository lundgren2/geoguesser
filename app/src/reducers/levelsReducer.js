import {} from '../actions/settings';

const initialState = [
  [
    {
      id: 0,
      title: 'Stockholm',
      coordinate: { latitude: 59.36, longitude: 18.26 }
    },
    {
      id: 1,
      title: 'Göteborg',
      coordinate: { latitude: 57.71, longitude: 11.98 }
    }
  ],
  [
    {
      id: 0,
      title: 'Kiruna',
      coordinate: { latitude: 67.5, longitude: 20.15 }
    },
    {
      id: 1,
      title: 'Sundsvall',
      coordinate: { latitude: 62.23, longitude: 17.17 }
    }
  ]
];

export const NEW_LEVELS = 'NEW_LEVELS';

const levels = (state = initialState, action) => {
  switch (action.type) {
    case NEW_LEVELS:
    // return { ...state, debug: !state.debug };
    default:
      return state;
  }
};

export default levels;
