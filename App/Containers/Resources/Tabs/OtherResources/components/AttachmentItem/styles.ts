import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },

  heading: {
    fontSize:13,
    width:'80%',
    marginBottom:5,
    color: Colors.black
  },
  dateText: {
    fontSize:11,
    color: Colors.textBlack,
    marginBottom: 15
  },
  description: {
    fontSize:13,
    color: Colors.black
  },
  hitSlop: {
    left: 20,
    right: 20,
    top: 20,
    bottom: 20
  }
});
