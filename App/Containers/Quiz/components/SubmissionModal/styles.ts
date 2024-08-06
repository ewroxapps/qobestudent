import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
 container:{
    backgroundColor:'#EF4444',
    alignItems:'center',
    justifyContent:'center',
    padding:5,
    borderRadius:5,
    height:deviceHeight/7,
 },
 whiteTxt:{
    color:Colors.backgroundWhite,
    marginTop:5,
    fontSize:15,
    fontWeight:'700',
    paddingLeft:10,
    paddingRight:10,
 },
 whiteTxtcustom:{
    color:Colors.backgroundWhite,
    marginTop:5,
    fontSize:12,
    fontWeight:'400'
 },
 container2:{
   backgroundColor:'#16A34A',
   alignItems:'center',
   justifyContent:'center',
   padding:5,
   borderRadius:5,
   height:30,
   width:deviceWidth/1.14,
   marginTop:20
},
});
