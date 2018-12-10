import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    width: '100%',
    height: '108%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    zIndex: 100,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    width: '100%',
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#0984e3',
  },
  buttonText: {
    color: '#dfe6e9',
  },
  logoContainer: {
    marginTop: '22%',
    marginBottom: 40,
  },
  logo: {
    height: 260,
    width: '100%',
  },
});
