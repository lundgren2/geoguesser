// Get users initial position
import { Location, Permissions } from 'expo';
import countries from '../../constants/levelsJson/countries';

const getUserPosition = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    return countries.se;
  }

  const location = await Location.getCurrentPositionAsync({});
  const marker = {
    coordinate: {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    },
    center: location.coords,
    id: 0,
    markerType: 'CIRCLE',
  };
  return [marker];
};

export default getUserPosition;
