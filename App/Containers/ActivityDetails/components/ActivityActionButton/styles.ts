import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    borderRadius: 5
  },
  label: {
    ...Fonts.style.description,
    color: Colors.backgroundWhite,
    marginLeft: 5
  }
});
