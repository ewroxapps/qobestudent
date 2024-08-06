import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

const deviceHeight=Dimensions.get('screen').height
export default StyleSheet.create({
container:{
    marginTop:10,
    backgroundColor:Colors.backgroundGrey,
    flex:1,
    elevation:2
},
 justifyView:{
  justifyContent:'space-between',
  flexDirection:'row',
  marginLeft:10,
  marginRight:10,
  padding:5
 },

  userTxt:{
    fontSize:14,
    fontWeight:'400',
    color:Colors.black
  },
  viewImage:{
    marginBottom:5,
    flexDirection:'row',
    paddingLeft:10,
    paddingTop:3
  },
  
  profile: {
    height:30,
    width: 30,
    borderRadius: 15,
    backgroundColor:Colors.backgroundGrey,
    marginLeft:5,
    marginRight:5,
  },

  participantView:{
    justifyContent:'space-between',
    flexDirection:'row',
   },

   createrView:{
    backgroundColor:Colors.backgroundWhite,
    elevation:1,
    height:15,
    right:20,
    borderRadius:5,
    paddingLeft:10,
    paddingRight:10,
   },
   textColor:{
    color:Colors.quizBlue,
    fontSize:10,
    fontWeight:'700'
   }
  
});
