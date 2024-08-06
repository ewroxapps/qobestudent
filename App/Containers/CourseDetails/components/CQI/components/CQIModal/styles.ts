import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../../../../Themes';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -20,
    left: -20,
    flex: 1,
    width: Metrics.screenWidth,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingVertical: 10,
    backgroundColor:'#F0F9FF',
  },

  topRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20
  },
  heading:{
    color:'#475569',
    marginBottom:10
  },
  profile: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom:10
  },
  middleContainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  text1:{
    color:'#475569',
    fontSize:14,
    marginTop:1,
    paddingBottom:15
  },
  text:{
    color:'#475569',
    fontSize:12,
  
  },
  texting:{
    color:Colors.black,
    fontSize:14,
    fontWeight:'600',
    paddingTop:10
  },
  text2:{
    color:Colors.black,
    fontSize:18,
    fontWeight:'700',
    marginTop:-10
  },

  lowMainContainer:{
    backgroundColor:Colors.backgroundWhite,
    padding:20
  },
  rowCont:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingBottom:20
  },
  Containers:{
    paddingBottom:20
  },
  Containers1:{
    paddingBottom:20
  },

  Containerss:{
    paddingBottom:20,
    flexDirection:'row',
  },
  cloT:{
    color:Colors.backgroundWhite,
   
  },
  an:{
    backgroundColor:'#A78BFA',
    borderRadius:10,
    paddingLeft:8,
    paddingRight:10,
    paddingTop:2,
    paddingBottom:2
  },

  ans:{
    backgroundColor:'#38BDF8',
    borderRadius:10,
    paddingLeft:8,
    paddingRight:10,
    paddingTop:2,
    paddingBottom:2
  }
});
