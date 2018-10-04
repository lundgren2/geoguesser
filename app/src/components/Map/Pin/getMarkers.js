//Write ammount of markers to be shown
const max_nr_markers = 6; //TODO: move this to a constant file

export function getMarkersJSON(level) {
  let file_JSON;
  switch (level) {
    case 1:
      file_JSON = require('../JSON/linkopingArea.json');
      break;
    case 2:
      file_JSON = require('../JSON/ostArea.json');
      break;
    default:
      file_JSON = require('../JSON/sverigeCities.json');
  }

  let list_cities = file_JSON['geonames'];
  let list_markers = [];

  if (list_cities.length >= max_nr_markers) {
    var nr_markers = max_nr_markers;
  } else {
    nr_markers = list_cities.length;
  }

  for (var i = 0; i < nr_markers; i++) {
    let marker = {
      title: list_cities[i]['name'],
      description: list_cities[i]['fcodeName'],
      coordinate: {
        latitude: parseFloat(list_cities[i]['lat']),
        longitude: parseFloat(list_cities[i]['lng'])
      }
    };
    list_markers.push(marker);
  }

  return list_markers;
}