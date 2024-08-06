import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../../../Themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  thumbnailContainer: {
    marginRight: 10
  },
  thumbnailPlaceholder: {
    backgroundColor: Colors.background,
    width: 130,
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  label: {
    ...Fonts.style.normal,
    fontWeight: '700',
    color: Colors.black
  },
  detailsText: {
    ...Fonts.style.description,
    color: Colors.textBlack,
    fontWeight: '600'
  },
  description: {
    ...Fonts.style.regular,
    color: Colors.textBlack
  },

  description2:{
    ...Fonts.style.regular,
    color: Colors.textBlack,
    alignSelf:'flex-end'
  }
});
