import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../../Themes';

export default StyleSheet.create({
 innerContainer:{
  flexDirection:'column',
  justifyContent:'center',
  backgroundColor:Colors.backgroundWhite,
  marginLeft:20,
  marginRight:20,
  padding:20
 },
 containers:{
    flexDirection:'column',
    paddingBottom:20
 },
 codeText:{
    color:'#64748B',
    fontWeight:'400',
    fontSize:13
 },
 codeTextDetail:{
    color:'#38BDF8',
    fontSize:18,
    marginTop:3,
    fontWeight:'600'
 },
 disTextDetail:{
    color:'#475569',
    fontSize:18,
    marginTop:3,
    fontWeight:'500'
 },
 stylesinner:{
    flexDirection:'row',
    paddingLeft:30,
    paddingRight:30,
    paddingTop:10,
    paddingBottom:10,
    justifyContent:'space-between'
 },
 viewDetailText:{
    color:'#0EA5E9'
 },
 mappingText:{
    color:'#475569'
 },
 PlosContainer:{
    paddingLeft:30,
    paddingRight:30,
    paddingTop:10,
 },
 itemContainer:{
    flexDirection:'row',
    
 },

 itemContainer1:{
    flexDirection:'row',
    justifyContent:'space-between',
    
 },
 spaceBte:{
  justifyContent:'space-between',
 },
 textHeader:{
    color:'#64748B',
    paddingLeft:5,
    fontSize:14
 },
 disText:{
    color:Colors.black,
    fontSize:16,
    fontWeight:'800'
 },
 levelText:{
    color:'#F97316',
    fontSize:16,
    fontWeight:'800'
 },
 pads:{
   paddingBottom:20
 },

 forRight:{
    alignItems:'flex-end', flex:1,
    marginTop:10,
    marginBottom:10
 },
 forLeft:{
   flex:1,
   marginTop:10,
    marginBottom:10
 }
 
});
