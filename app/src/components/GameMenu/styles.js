import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
    maxHeight: 220,
    backgroundColor: 'rgba(0, 184, 148, 0.8)',
    borderRadius: 5,
    zIndex: 20,
  },
  buttonContainer: {
    margin: 'auto',
  },
  button: {
    width: '100%',
    borderRadius: 35,
    padding: 8,
    backgroundColor: '#0984e3',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#dfe6e9',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
