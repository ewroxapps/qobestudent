import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../Themes';

export default StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    right: 15
  },
  speaker: {
    marginHorizontal: 15
  },
  profile: {
    borderRadius: 50,
    width: 35,
    height: 35
  },
  menuOptionsContainer: {
    marginTop: 35,
    paddingHorizontal: 5,
    marginLeft: -10,
    paddingVertical: 10,
    borderRadius: 4,
    width: 180
  },
  menuOptionContainer: {
    flexDirection: 'row'
  },
  text: {
    marginLeft: 10,
    marginRight:10,
    ...Fonts.style.description
  },
  logoutText: {
    color: Colors.red
  }
});
