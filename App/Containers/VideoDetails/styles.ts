import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  detailsContainer: {
    backgroundColor: Colors.backgroundWhite,
    marginTop: 10,
    padding: 10
  },
  detailsText: {
    ...Fonts.style.description,
    color: Colors.textBlack,
    fontWeight: '600'
  },
  description: {
    ...Fonts.style.description,
    color: Colors.black
  }
});
