//Write amount of markers to be shown
const MAX_NR_MARKERS = 6; //TODO: move this to a constant file

function createMarker(city) {
  return {
    title: city.name,
    description: city.fcodeName,
    coordinate: {
      latitude: parseFloat(city.lat),
      longitude: parseFloat(city.lng)
    }
  };
}

export function getMarkers(level) {
  let listCities;
  switch (level) {
    case 1:
      listCities = require('../JSON/linkopingArea.json').geonames;
      break;
    case 2:
      listCities = require('../JSON/ostArea.json').geonames;
      break;
    default:
      listCities = require('../JSON/sverigeCities.json').geonames;
  }

  const NR_MARKERS = listCities.length >= MAX_NR_MARKERS ? MAX_NR_MARKERS : listCities.length;

  const MARKERS = listCities.slice(0, NR_MARKERS).map(createMarker)

  return MARKERS;
}