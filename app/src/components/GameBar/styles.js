import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bar: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
    width: '90%',
    margin: 10,
    height: '7%',
    borderWidth: 4,
    borderRadius: 24,
    borderColor: 'rgba(245, 223, 76, .88)',
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
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
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 30,
    position: 'absolute',
    backgroundColor: 'rgba(245, 223, 76, .88)',
  },
});
