import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

export default StyleSheet.create({
 innerContainer:{
  flexDirection:'row',
 },
 text:{
   fontSize:15,
   color:Colors.black,
   left:5,
 },
 topContainer:{
  width:Dimensions.get('screen').width/1.6,
  alignItems:'center',
  justifyContent:'center'
 }
 
});
