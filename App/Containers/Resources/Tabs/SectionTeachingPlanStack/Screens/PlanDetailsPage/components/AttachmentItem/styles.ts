import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../../../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },

  heading: {
    color: Colors.black,
    fontSize:13,
    width:'80%',
    marginBottom:5
  },
  dateText: {
    color: Colors.textBlack,
    fontSize:10,
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
