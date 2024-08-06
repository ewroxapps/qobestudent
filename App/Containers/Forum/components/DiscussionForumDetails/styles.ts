import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    backgroundColor:Colors.backgroundWhite,
    marginHorizontal:5,
    marginVertical:10,
    elevation:10,
    borderRadius:10
  },

  justifyView:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10
  },

  unclickedConfig:{
    justifyContent:'flex-end',
    flexDirection:'row',
    marginTop:1,
    alignContent:'flex-end',
    alignItems:'flex-end',
    backgroundColor:Colors.backgroundWhite,
    padding:5
 },
 
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft:5,
    paddingRight:10,
    flex:1
  },
  profile: {
    height: 45,
    width: 45,
    borderRadius: 50
  },
  anotherContainer:{
    marginTop:3,
    flexDirection:'column',
    width:"80%"
  },
  calenderContainer:{
    flexDirection:'row'
  },
  textPostby:{
    marginLeft:5,
    color:'#475569',
    fontWeight:'500',
    fontSize:12
    
  },
  time:{
    marginTop:4,
    color:'#475569',
    fontWeight:'500',
    fontSize:12
  },

  menuOptionsContainer: {
    marginTop: 30,
    paddingHorizontal: 5,
    marginLeft: -10,
    paddingVertical: 10,
    borderRadius: 4,
    width: 100
  },
  menuOptionContainer: {
    flexDirection: 'row',
    left:5,

  },
  text:{
    fontSize:12,
    left:5,
    color:Colors.quizBlue
 },

  secondContainer:{
    marginTop:10,
    padding:10
  },
  titleText:{
    color:Colors.black,
    fontSize:13,
    fontWeight:'700'

  },
  detailText:{
    marginTop:5,
    color:Colors.black,
    fontSize:12,
    fontWeight:'300'
  },
  thirdContainer:{
    justifyContent:'space-between',
    flexDirection:'row',
    marginTop:20,
    marginLeft:10,
    marginRight:10,
    paddingBottom:10
  },
  commentView:{
    flexDirection:'row',
    flex:1
  },
  readMoreView:{
    backgroundColor:'#475569',
    flexDirection:'row',
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:10,
    paddingTop:10,
    borderRadius:5
    
  }


});
