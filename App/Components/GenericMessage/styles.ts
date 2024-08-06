import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';
import { Fonts } from '../../Themes';

export default StyleSheet.create({
  modalPosition: {
    position: 'absolute',
    left: -32,
    right: -32,
    top: -32,
    bottom: -32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000B3',
    elevation: 24
  },
  modalContainer: {
    width: 335,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 12
  },
  rowContainer: {
    flexDirection: 'row'
  },
  textContainer: {
    marginVertical: 10,
    width: '80%'
  },
  imageContainer: {
    marginTop: 10,
    marginLeft: 5
  },
  image: {
    tintColor: '#586462'
  },
  hitSlop: {
    left: 20,
    right: 20,
    top: 20,
    bottom: 20
  },
  message: {
    ...Fonts.style.normal,
    color: Colors.black
  }
});
