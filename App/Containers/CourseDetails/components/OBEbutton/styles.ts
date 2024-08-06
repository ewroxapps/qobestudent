import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth / 4 - 15,
    marginHorizontal: 5,
    borderRadius: 5
  },
  innerContainer: {
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    ...Fonts.style.medium,
    marginTop: 5
  }
});
