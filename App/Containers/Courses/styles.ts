import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -95,
    paddingHorizontal: 10
  },
  topContainer: {
    height: 100,
    backgroundColor: Colors.lightBlue,
    zIndex: -10
  },
  scrollView: {
    flex: 1
  },
  searchBoxContainer: {
    marginBottom: 20,
    top:-90
  },
  noResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  }
});
