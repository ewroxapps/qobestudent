import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    marginVertical: 5
  },
  body: {
    ...Fonts.style.description,
    marginLeft: 10,
    color: Colors.textBlack
  },
  noCoursesContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
