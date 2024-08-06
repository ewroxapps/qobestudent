import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

const deviceHeight=Dimensions.get('screen').height
export default StyleSheet.create({
container:{
    elevation:1,
    height:deviceHeight/2.8,
    backgroundColor:Colors.backgroundGrey
},
backContainer:{
  left:10,
  top:50
},
innerProfileView:{
  justifyContent:'center',
  alignItems:'center',

},
profile: {
    height: 150,
    width: 150,
    borderRadius: 70,
    backgroundColor:Colors.backgroundGrey,
    marginTop:50
  },

  userDetailView:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:10
  },
  userTxt:{
    fontSize:14,
    fontWeight:'700',
    color:Colors.black
  }
});
