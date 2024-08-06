import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
export default StyleSheet.create({

  containers: {
    backgroundColor: Colors.backgroundGrey,
    flex: 1
  },
  
  
});
