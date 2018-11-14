import _ from 'lodash';

// Write amount of markers to be shown
const MAX_NR_MARKERS = 6; //TODO: move this to a constant file

const getMarkers = (level) => {
  let listCities;
  switch (level) {
    case 1:
      listCities = require('../../../constants/levelsJson/se.json')
        .geonames;
      break;
    case 2:
      listCities = require('../../../constants/levelsJson/fi.json')
        .geonames;
      break;
    case 3:
      listCities = require('../../../constants/levelsJson/dk.json')
        .geonames;
      break;
    case 4:
      listCities = require('../../../constants/levelsJson/no.json')
        .geonames;
      break;
    case 5:
      listCities = require('../../../constants/levelsJson/de.json')
        .geonames;
      break;
    default:
      listCities = require('../../../constants/levelsJson/se.json')
        .geonames;
  }

  const NR_MARKERS =
    listCities.length >= MAX_NR_MARKERS ? MAX_NR_MARKERS : listCities.length;

  return listCities.slice(0, NR_MARKERS).map((city, index) => ({
    id: index,
    title: city.name,
    description: city.toponymName,
    coordinate: {
      latitude: parseFloat(city.lat),
      longitude: parseFloat(city.lng)
    }
  }));
};

export default getMarkers;
