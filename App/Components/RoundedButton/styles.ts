import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../Themes';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.secondary,
    paddingVertical: 13,
    borderRadius: 5,
    shadowColor: colors.secondary,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  text: {
    ...Fonts.style.normal,
    color: Colors.backgroundWhite
  }
});
