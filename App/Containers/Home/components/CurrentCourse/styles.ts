import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 13,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'white',
    borderTopEndRadius:10,
    borderBottomEndRadius:10,
    borderBottomLeftRadius:10,
    borderTopStartRadius:10,
    elevation:1
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileContainer: {
    borderRadius: 50
  },
  profile: {
    height: 60,
    width: 60,
    borderRadius: 50
  },
  topTextContainer: {
    flexShrink: 1,
    flex: 1,
    marginLeft: 10,
    marginRight:10,
  },
  classLabel: {
    ...Fonts.style.description,
    color: Colors.black,
    fontFamily: 'Inter',
    fontWeight: '500'
  },
  instructorName: {
    ...Fonts.style.regular,
    fontFamily: 'Inter',
    color: Colors.black
  }
});
