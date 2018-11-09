import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: '108%', // Uses height over 100% to hide the google logo.
    width: '100%',
    margin: 'auto',
  },
}));
