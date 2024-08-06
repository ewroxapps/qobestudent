import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../../Themes';

export default StyleSheet.create({
 containers:{
    flex:1,
    backgroundColor:Colors.backgroundWhite,
    elevation:10,
    padding:8,
    marginBottom:10,
    marginTop:10,
    marginLeft:5,
    marginRight:5

 },
 leftContainer: {
   flexDirection: 'row',
   alignItems: 'center',
   padding:5,
   marginLeft:5,
   marginRight:5,
   marginTop:5
 },
 profileContainer: {
   borderRadius: 50
 },
 profile: {
   height: 60,
   width: 60,
   borderRadius: 50
 },
 topTextContainer: {
  flexShrink: 1,
  flex: 1,
  justifyContent:'space-between',
  flexDirection:'row'
},
heading:{
  color:'#475569',
  fontSize:16,
  paddingBottom:2
},
h2:{
  color:Colors.black,
  fontSize:18,
  fontWeight:'700',
},
h3:{
  color:'#475569',
  fontSize:12
},
date:{
  color:'#475569',
  fontSize:13
},
status:{
  color:Colors.backgroundWhite
},
statusView:{
  backgroundColor:Colors.quizBlue,
  justifyContent:'center',
  alignContent:'center',
  alignItems:'center',
  padding:3,
  borderRadius:10
},
middleCntainer:{
  justifyContent:'space-between',
  flexDirection:'row',
  paddingTop:20,
  paddingBottom:20,
  marginTop:20
},
t1:{
  fontSize:12,
  color:'#475569',
},
t2:{
  fontSize:14,
  color:'#475569'
},
bottomContainer:{
  flexDirection:'row',
  backgroundColor:'#F1F5F9',
  padding:10
},
probH1:{
  color:Colors.black,
  fontWeight:'700',
  paddingBottom:10
},
probH2:{
  color:'#475569',
  fontSize:12
},
verticalLine: {
  height: '100%', // Take up the full height of the container
  borderRightWidth: 1, // Width of the vertical line
  borderColor: 'light-grey', // Color of the vertical line
  marginHorizontal: 10, // Adjust the spacing between the text and the line
},
});
