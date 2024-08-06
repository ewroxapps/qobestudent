import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';

export default StyleSheet.create({
 topContainer:{
    position:'absolute',
    bottom:170,
    width: Metrics.screenWidth,
    backgroundColor: Colors.backgroundWhite,
    height:40,
    justifyContent:'center',
    elevation:10,
    left:222,
    flex:1
 },

 moretopContainer:{
   position:'absolute',
   bottom:230,
   width: Metrics.screenWidth,
   backgroundColor: Colors.backgroundWhite,
   height:40,
   justifyContent:'center',
   elevation:10,
   left:222,
   flex:1
},
 innerContainer:{
    flexDirection:'row',
    marginLeft:20
 },
 textStyle:{
    marginTop:4,
    marginLeft:2,
    color:Colors.black,
    fontSize:14
 },
 middleContainer:{
    position: 'absolute',
    flex: 1,
    width: Metrics.screenWidth,
    height:40,
    left:222,
    bottom:110,
    backgroundColor: Colors.backgroundWhite,
    justifyContent:'center',
    elevation:10
 },
 bottomContainer:{
    position: 'absolute',
    bottom: 50,
    left: 222,
    flex: 1,
    width: Metrics.screenWidth,
    height:40,
    backgroundColor: Colors.backgroundWhite,
    justifyContent:'center',
    elevation:10
 }
});
