import _ from 'lodash';
import country from '../../../constants/levelsJson/countries';

// Write amount of markers to be shown
const MAX_NR_MARKERS = 6; //TODO: move this to a constant file

const getMarkers = (level) => {
  let listCities;
  switch (level) {
    case 1:
      listCities = country.se;
      break;
    case 2:
      listCities = country.no;
      break;
    case 3:
      listCities = country.dk;
      break;
    case 4:
      listCities = country.fi;
      break;
    case 5:
      listCities = country.de;
      break;
    default:
      listCities = country.se;
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

export default getMarkers;
