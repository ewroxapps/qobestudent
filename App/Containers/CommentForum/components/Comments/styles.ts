import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';
let deviceHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  recordContainer: {
    justifyContent: 'space-between',
    paddingTop:5,
    backgroundColor:Colors.backgroundWhite,
    flex: 1,
    paddingBottom:10
  },
  itemContainer: {
    flex: 1,
    flexDirection:'row',
    paddingLeft:20,
    paddingRight:20,
    paddingTop:10
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft:5,
    paddingRight:10,
  },

  rigtContainer:{
    flexDirection: 'row',
    justifyContent:'flex-end',
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
    flexDirection:'row',
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

  secondContainer:{
    paddingLeft:20,
    paddingRight:20,
    flexDirection:'column'
  },
  titleText:{
    fontWeight:'400',
    textAlign:'justify',
    fontSize:15
  },
  detailText:{
    marginTop:4,
    fontWeight:'500',
    textAlign:'justify',
    fontSize:13
  },
  thirdContainer:{
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
    flexDirection:'row'
  },
  readMore:{
    backgroundColor:'#475569',
    borderRadius:5,
    flexDirection:'row',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5
  },
  readMoreText:{
    color:Colors.backgroundWhite,
    marginRight:5
  },
  editContainer:{
    backgroundColor: Colors.banner,
     marginLeft:-80,
     elevation:10 
  },
  redBack:{
    flexDirection: 'row', 
    paddingLeft: 10, 
    paddingTop: 10, 
    paddingBottom: 10, 
    backgroundColor: '#FEE2E2'
  },
  whiteBack:{
    flexDirection: 'row', 
    paddingLeft: 10, 
    paddingTop: 10, 
    paddingBottom: 10, 

  },
  replyConatiner:{
    flexDirection:'row',
    backgroundColor:'#38BDF8',
    borderRadius:5,
    paddingLeft:15,
    paddingRight:20,
    paddingTop:10,
    paddingBottom:10
  },
  replyTest:{
    marginLeft:5,
    color:Colors.backgroundWhite,
    fontSize:16,
    marginTop:-3,
    fontWeight:'600'
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    backgroundColor: '#EF4444',
    marginBottom:10,
    marginTop:10
  },

  deleteButtonText: {
    color: 'white',
  },

  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    backgroundColor: Colors.quizBlue,
    marginBottom:10,
    marginTop:10
  },

  editButtonText: {
    color: 'white',
  },

});
