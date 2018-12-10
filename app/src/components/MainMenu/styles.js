import { StyleSheet } from 'react-native';
import colors from 'constants/colors';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    zIndex: 100,
    padding: 40,
  },
  buttonContainer: {
    marginBottom: 18,
  },
  button: {
    width: '100%',
    borderRadius: 35,
    padding: 12,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  logoContainer: {
    height: 280,
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    maxHeight: '100%',
    maxWidth: '90%',
  },
});
