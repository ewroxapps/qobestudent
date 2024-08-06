import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
 
 container:{
    backgroundColor:Colors.backgroundWhite,
    marginTop:10,
    padding:10,
    borderRadius:5,
    elevation:2
 },
 checkContainer:{
  backgroundColor:'#E0F2FE',
  marginTop:10,
  padding:10,
  borderRadius:5,
  elevation:2
 },
 disabledContainer:{
  backgroundColor:'#808080',
  marginTop:10,
  padding:10,
  borderRadius:5,
  elevation:2
 },
 coureseTitle:{
    color:Colors.black,
    fontSize:13,
    fontWeight:'500'
 },
 courseDetailView:{
    backgroundColor:'#F1F5F9',
    marginTop:10,
    marginBottom:10,
    padding:10,
    borderRadius:5
 },
 type:{
  color:'#64748B',
  fontSize:11
 },
 explain:{
    color:'#475569',
    fontSize:11
 },
 rowView:{
    flexDirection:'row',
    marginTop:3
 },

 justifyView:{
   flexDirection:'row',
   justifyContent:'space-between'
 },
 innerView:{
   flex:1,
   flexDirection:'row'
 },
 mandatoryView:{
   backgroundColor:'#F87171',
   alignItems:'center',
   borderRadius:15,
   paddingTop:5,
   paddingBottom:5,
   flex:1,
   marginRight:10,
 },
 whiteText:{
   color:Colors.backgroundWhite,
   fontSize:11,
   fontWeight:'600'
 },
 improveView:{
   backgroundColor:'#FBBF24',
   alignItems:'center',
   borderRadius:15,
   paddingTop:5,
   paddingBottom:5,
   flex:1,
 },
 selectedText:{
  color:Colors.quizBlue,
  fontSize:13,
  marginTop:3
 },
 selectText:{
  color:'#64748B',
  fontSize:13,
  marginTop:3
 },
 tick:{
  color:Colors.backgroundWhite,
  fontSize:8
 }
});
