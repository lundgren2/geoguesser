import { StyleSheet } from 'react-native';
import theme from 'constants/theme';

export default StyleSheet.create({
  overlay: {
    backgroundColor: 'transparent',
    zIndex: 100,
    padding: 20,
    elevation: 0,
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
