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
    },
    {
      id: 2,
      title: 'Malmö',
      coordinate: { latitude: 55.36, longitude: 13.02 }
    },
    {
      id: 3,
      title: 'Jönköping',
      coordinate: { latitude: 57.46, longitude: 14.09 }
    },
    {
      id: 4,
      title: 'Linköping',
      coordinate: { latitude: 58.24, longitude: 15.37 }
    },
    {
      id: 5,
      title: 'Norrköping',
      coordinate: { latitude: 58.6, longitude: 16.2 }
    },
    {
      id: 6,
      title: 'Lund',
      coordinate: { latitude: 55.7, longitude: 13.19 }
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
    },
    {
      id: 2,
      title: 'Luleå',
      coordinate: { latitude: 65.58, longitude: 22.15 }
    },
    {
      id: 3,
      title: 'Boden',
      coordinate: { latitude: 65.82, longitude: 21.69 }
    },
    {
      id: 4,
      title: 'Skellefteå',
      coordinate: { latitude: 64.75, longitude: 20.95 }
    },
    {
      id: 5,
      title: 'Jokkmokk',
      coordinate: { latitude: 66.61, longitude: 19.83 }
    },
    {
      id: 6,
      title: 'Arvidsjaur',
      coordinate: { latitude: 65.58, longitude: 19.16 }
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
