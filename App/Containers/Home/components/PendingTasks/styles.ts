import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';

export default StyleSheet.create({
  floatingContainer: {
    paddingVertical: 15,
    marginTop: -33,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    elevation: 10,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27
  },
  floatingContainerSection: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  importantCount: {
    ...Fonts.style.h4,
    color: Colors.backgroundWhite,
    fontWeight: '600'
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    ...Fonts.style.description,
    color: Colors.backgroundWhite,
    marginLeft: 5
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: Colors.backgroundGrey
  }
});
