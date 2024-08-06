import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -20,
    left: -20,
    flex: 1,
    width: Metrics.screenWidth,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: Colors.backgroundWhite
  },
  topRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headingContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginStart: 140
  },
  heading: {
    ...Fonts.style.normal,
    fontWeight: '700'
  },
  closeButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10
  },
  textInput: {
    height: 200,
    backgroundColor: Colors.backgroundGrey,
    textAlignVertical: 'top',
    borderRadius: 10
  },
  buttonContainer: {
    marginTop: 10
  },
  noteText: {
    marginBottom: 5
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  uploadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.lightBlue
  },
  fileName: {
    ...Fonts.style.description,
    color: Colors.black,
    width:"80%"

  },
  remove: {
    ...Fonts.style.small,
    color: Colors.red,
    marginRight: 5
  },
  removeButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  selectButtonContainer: {
    flexShrink: 1,
    flexWrap: 'wrap',
    marginBottom: 5
  }
});
