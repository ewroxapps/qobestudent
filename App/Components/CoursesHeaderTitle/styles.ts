import { StyleSheet } from 'react-native';
import { Fonts } from '../../Themes';

export default StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  title: { ...Fonts.style.normal, marginLeft: 5 }
});
