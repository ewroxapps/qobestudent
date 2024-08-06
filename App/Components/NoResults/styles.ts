import { StyleSheet } from 'react-native';
import { Fonts } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    ...Fonts.style.normal
  }
});
