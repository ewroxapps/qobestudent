import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../../../Themes';
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
    backgroundColor: Colors.backgroundWhite
  },

  topRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  heading: {
    ...Fonts.style.normal,
    width: '180%'

  },
  closeButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20
  },
  headingContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginStart: 110
  },
  trashContainer: {
    paddingTop: 30,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    marginStart: 160
  },
  trashText: {
    paddingRight: 40,
    textAlign: 'center',
    paddingLeft: 50,
    color: Colors.black,
    fontSize: 18
  },
  trash2: {
    paddingTop: 10,
  },
  itemValue: {
    color: Colors.backgroundWhite,
    fontWeight: '700',
    textAlign:'center',
  },


  innercontainer: {
    paddingBottom: 7,
    backgroundColor: '#F1F5F9',
    flexDirection: 'column',
  },

  recordContainer: {
    paddingTop: 40,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingBottom: 20,
    flexDirection:'row',
  },

  recordContainer2: {
    paddingTop: 40,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingBottom: 20,
    flexDirection:'column',
    backgroundColor:'#F1F5F9',
    marginLeft:20,
    marginRight:20,
    borderRadius:5
  },
  deleteContainer: {
    flexDirection: 'row',
    justifyContent:'center',
    backgroundColor:'#EF4444',
    paddingLeft:deviceWidth/6.5,
    paddingRight:deviceWidth/6.5,
    marginRight:20,
    paddingTop:15,
    paddingBottom:15,
    borderRadius:5
  },

  
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  calenderContainer:{
    flexDirection:'row'
  },
  time:{
    marginTop:4,
    color:'#475569',
    fontWeight:'500',
    fontSize:13
  },
  secondContainer:{
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
    flexDirection:'column'
  },
  titleText:{
    fontWeight:'700',
    textAlign:'justify',
    fontSize:15
  },
  detailText:{
    marginTop:4,
    fontWeight:'500',
    textAlign:'justify',
    fontSize:13
  },
  anotherContainer:{
    marginTop:3,
    flexDirection:'column',
    width:"80%"
  },
  textPostby:{
    marginLeft:5,
    color:'#475569',
    fontWeight:'500',
    fontSize:13
    
  },
  overallContainer:{
    flex: 1,
    flexDirection: 'row',
  },

  cancelContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#94A3B8',
    marginLeft:20,
    paddingLeft:deviceWidth/6.5,
    paddingRight:deviceWidth/6.5,
    paddingTop:15,
    paddingBottom:15,
    borderRadius:5
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 10
  },
  profile: {
    height: 45,
    width: 45,
    borderRadius: 50
  },

});
