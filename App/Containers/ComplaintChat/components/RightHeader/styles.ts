import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';
import colors from '../../../../Themes/Colors';

export default StyleSheet.create({
 innerContainer:{
  flexDirection:'row',
  justifyContent:'center',
  marginTop:10,
  left:'15%'
 },
 textCLO:{
  marginLeft:3,
  marginTop:5,
  fontSize:15,
  colors:colors.black
 },
 textCourse:{
  fontSize:14,
  fontWeight:'800',
  color:colors.black,
  textAlign:'center',
  width:200,
  marginTop:5,
 },

 unclickedConfig:{
    justifyContent:'flex-end',
    flexDirection:'row',
    marginTop:1,
    alignContent:'flex-end',
    alignItems:'flex-end',
    backgroundColor:colors.backgroundWhite,
    padding:5
 },

 clickedConfig:{
   justifyContent:'flex-end',
   flexDirection:'row',
   marginTop:1,
   alignContent:'flex-end',
   alignItems:'flex-end',
   backgroundColor:'#E0F2FE',
   padding:5
},

    
 unclickedtext:{
    fontSize:12,
    marginRight:5,
    marginTop:2,
    color:Colors.black
 },

 clickedtext:{
   fontSize:12,
   marginRight:5,
   marginTop:2,
   color:'#0EA5E9'
},
menuOptionsContainer: {
   marginTop: 35,
   paddingHorizontal: 5,
   marginLeft: -10,
   paddingVertical: 10,
   borderRadius: 4,
   width: 130
 },
 menuOptionContainer: {
   flexDirection: 'row'
 },
 textColor:{
  color:Colors.quizBlue,
 },
 
 line: {
  borderBottomColor: '#F1F5F9',
  borderBottomWidth: 1,
  marginVertical: 2,
},

deleteAll:{
  color:'#EF4444',
  marginTop:3,
  marginLeft:5
},
importExport:{
  color:Colors.quizBlue,
  marginTop:3,
  marginLeft:5
}
});
