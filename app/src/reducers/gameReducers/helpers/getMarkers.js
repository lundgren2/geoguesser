import _ from 'lodash';

// Write amount of markers to be shown
const MAX_NR_MARKERS = 6; //TODO: move this to a constant file

const getMarkers = (level, shuffle = false) => {
  let listCities;
  switch (level) {
    case 1:
      listCities = require('../../../constants/levelsJson/linkopingArea.json')
        .geonames;
      break;
    case 2:
      listCities = require('../../../constants/levelsJson/ostArea.json')
        .geonames;
      break;
    case 3:
      listCities = [];
      break;
    default:
      listCities = require('../../../constants/levelsJson/sverigeCities.json')
        .geonames;
  }

  listCities = shuffle ? _.shuffle(listCities) : listCities;

  const NR_MARKERS =
    listCities.length >= MAX_NR_MARKERS ? MAX_NR_MARKERS : listCities.length;

  return listCities.slice(0, NR_MARKERS).map((city, index) => ({
    id: index,
    title: city.name,
    description: city.fcodeName,
    coordinate: {
      latitude: parseFloat(city.lat),
      longitude: parseFloat(city.lng)
    }
  }));
};

export default getMarkers;
