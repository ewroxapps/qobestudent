import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../Themes';
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tryme:{
    backgroundColor:Colors.backgroundGrey,
    flex:1
  }
 
 
});
