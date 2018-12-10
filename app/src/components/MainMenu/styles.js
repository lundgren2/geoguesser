import { StyleSheet } from 'react-native';
import theme from 'constants/theme';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: 100,
    padding: 20,
  },
  buttonContainer: {
    marginBottom: 18,
  },
  button: {
    width: '100%',
    borderRadius: theme.buttonBorderRadius,
    padding: 10,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  logoContainer: {
    height: 310,
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    maxHeight: '100%',
    maxWidth: '100%',
  },
});
