import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../../../Themes/Colors';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
 container:{
    backgroundColor:'#F0F9FF',
    alignItems:'center',
    padding:5,
    borderRadius:5,
    height:deviceHeight/7,
    paddingLeft:10,
    paddingRight:10,
    width:deviceWidth/1.2,
    borderColor:'#14B8A6',
    borderWidth:1
 },

 headerText:{
   color:colors.black,
   fontSize:14,
   fontWeight:'600',
   marginTop:10,
 },

 justify:{
  flexDirection:'row',
  justifyContent:'space-between',
  width:deviceWidth/1.2,
  paddingLeft:15,
  paddingRight:15,
  marginTop:15
 },

 containerButton:{
  flex:1,
  alignItems:'center',
  marginLeft:5,
  marginRight:5,
  borderRadius:3,
  paddingTop:5,
  paddingBottom:5
 },

 text:{
  fontSize:12,
 }

});
