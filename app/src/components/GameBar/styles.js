import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bar: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    width: '90%',
    margin: 10,
    height: '6%',
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    borderWidth: 3,
    borderColor: 'rgba(245, 223, 76, .88)',
    borderRadius: 6,
  },
  barText: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    zIndex: 30,
  },
  filler: {
    flex: 1,
    left: 0,
    zIndex: 30,
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(245, 223, 76, .88)',
  },
});
