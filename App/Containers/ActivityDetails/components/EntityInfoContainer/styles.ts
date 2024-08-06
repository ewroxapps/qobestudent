import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';

export default StyleSheet.create({
  topContainer: {
    flexDirection: 'row'
  },
  topTextContainer: {
    marginLeft: 10
  },
  entityName: {
    ...Fonts.style.description,
    color: Colors.black,
    fontFamily: 'Inter',
    fontWeight: '700'
  },
  role: {
    ...Fonts.style.regular,
    fontFamily: 'Inter',
    color: Colors.textBlack
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 50
  }
});
