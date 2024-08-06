import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({

 container:{
    backgroundColor:Colors.quizBlue,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:10,
    paddingBottom:10,
    
 },
 whitetxt:{
    color:Colors.backgroundWhite,
    fontSize:13
 },
 anotherTxt:{
    color:Colors.backgroundWhite,
    top:3,
    fontSize:13,
    left:140
 }
});
