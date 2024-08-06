import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  container: { 
  height:deviceHeight/1.5,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: Colors.background,
  flexDirection:'row'
 },

 textStyle:{
  fontSize:20,
  color:Colors.charcoal,
  textAlign:'justify',
  paddingTop:5
 }

});
