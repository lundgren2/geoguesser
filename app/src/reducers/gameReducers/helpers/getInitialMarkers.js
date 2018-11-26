import _ from 'lodash';
import countries from '../../../constants/levelsJson/countries';

// Write amount of markers to be shown
const MAX_NR_MARKERS = 6; //TODO: move this to a constant file

const getInitialMarkers = level => {
  let listCities;
  switch (level) {
    case 1:
      listCities = countries.se;
      break;
    case 2:
      listCities = countries.no;
      break;
    case 3:
      listCities = countries.dk;
      break;
    case 4:
      listCities = countries.fi;
      break;
    case 5:
      listCities = countries.de;
      break;
    default:
      listCities = countries.se;
  }

  const NR_MARKERS =
    listCities.length >= MAX_NR_MARKERS ? MAX_NR_MARKERS : listCities.length;

  return listCities.geonames.slice(0, NR_MARKERS).map((city, index) => ({
    id: index,
    title: city.name,
    description: city.toponymName,
    coordinate: {
      latitude: parseFloat(city.lat),
      longitude: parseFloat(city.lng)
    }
  }));
};

export default getInitialMarkers;
