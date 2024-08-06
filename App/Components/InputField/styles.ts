import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../Themes';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.inputBorderBlue,
    borderRadius: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10
  },
  inputField: {
    flex: 1,
    ...Fonts.style.normal,
    padding: 10,
  },
  inputFieldRight: {
    flex: 1,
    ...Fonts.style.normal,
    padding: 10,
    textAlign:'right'
  },
  error: {
    marginTop: 5,
    ...Fonts.style.description,
    color: Colors.error
  },
  hitSlop: {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
  }
});
