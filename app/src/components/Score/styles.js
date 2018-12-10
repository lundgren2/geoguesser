import { StyleSheet } from 'react-native';
import theme from 'constants/theme';

export default StyleSheet.create({
  bar: {
    position: 'absolute',
    top: 10,
    left: 2,
    width: 95,
    zIndex: 10,
  },
  text: {
    zIndex: 30,
    fontSize: 30,
    color: theme.yellow,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    textShadowColor: '#666',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
});
