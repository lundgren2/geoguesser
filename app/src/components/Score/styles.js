import { StyleSheet } from 'react-native';
import colors from 'constants/colors';

export default StyleSheet.create({
  bar: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 95,
    zIndex: 10,
  },
  text: {
    zIndex: 30,
    fontSize: 35,
    color: colors.yellow,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
