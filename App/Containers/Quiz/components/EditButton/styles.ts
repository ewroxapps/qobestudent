import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
 container:{
  backgroundColor:Colors.quizBlue,
  marginRight:10,
  marginBottom:10,
  paddingLeft:30,
  paddingRight:30,
  paddingTop:8,
  paddingBottom:8,
  borderRadius:5
 },
 viewContainer:{
   flexDirection:'row',
   justifyContent:'space-between'
 },
 textStyle:{
    color:Colors.backgroundWhite
 },

 greenCircle:{

  width: 22,
  height: 22,
  backgroundColor: 'white',
  borderWidth: 2,
  borderColor: 'green',
  marginLeft: 5,
  marginRight:5,
  justifyContent: 'center',
   alignItems: 'center',
   borderRadius:12
 },
 tick:{
  color:'green'
 },
 selectedText:{
  color:'green',
  fontSize:15,
  fontWeight:'600'
 }

 
});
