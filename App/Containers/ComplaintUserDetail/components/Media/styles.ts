import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

const deviceHeight=Dimensions.get('screen').height
export default StyleSheet.create({
container:{
    marginTop:10,
    backgroundColor:Colors.backgroundGrey,
    flex:1,
    elevation:1
},
 justifyView:{
  justifyContent:'space-between',
  flexDirection:'row',
  marginLeft:10,
  marginRight:10,
  padding:5
 },
touchableView:{
  flexDirection:'row',
},
  userTxt:{
    fontSize:14,
    fontWeight:'400',
    color:Colors.black
  },
  viewImage:{
    flexDirection:'row',
    marginBottom:10
  },
  outerBlockContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft:3,
    marginRight:3,
    alignContent:'center',
    justifyContent:'center'
 
  },
});
