import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 7,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 5
  },
  heading: {
    ...Fonts.style.h5,
    color: Colors.black,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    ...Fonts.style.regular,
    color: Colors.black,
    marginVertical: 3
  },
  bottomContainer: {
    flexDirection: 'row'
  },
  valuesContainer: {
    flex: 1,
    marginLeft: 5
  },
  key: {
    ...Fonts.style.small,
    color: Colors.textBlack
  },
  value: {
    ...Fonts.style.small,
    color: Colors.black,
    fontWeight: '700'
  },
  newTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    borderRadius: 20,
    paddingHorizontal: 8
    // paddingVertical: 3
  },
  newText: {
    ...Fonts.style.tiny,
    color: Colors.backgroundWhite
  },
  hitSlop: {
    left: 5,
    right: 5,
    top: 5,
    bottom: 5
  },
  viewDetailsText: {
    ...Fonts.style.description,
    color: Colors.secondary
  },
  marksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 7,
    backgroundColor: Colors.backgroundGrey,
    marginVertical: 10,
    borderRadius: 10
  },
  divider: {
    width: 1,
    height: '100%'
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemLabel: {
    ...Fonts.style.regular,
    color: Colors.textBlack
  },
  itemValue: {
    ...Fonts.style.h6,
    fontWeight: '700'
  },

  submit:{
    marginTop: 5, 
    color: '#F4BC1C',
    flex:1,
    textAlign:'left'
  }
});
