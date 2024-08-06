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
    backgroundColor: Colors.backgroundWhite
  },

  topRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  closeButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20
  },
  heading:{
    color:'#475569'
  },
  item:{
    color:'#38BDF8',
    fontSize:14
  },
  bodering:{
    paddingBottom:20,
    paddingLeft:20,
    paddingRight:20,
  },
  scoreContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'60%'
    
  },
  avg:{
    padding:5,
    backgroundColor:'#EF4444',
    marginTop:3,
    marginBottom:3
  },
  my:{
    padding:5,
    backgroundColor:'#3B82F6',
    marginTop:3,
    marginBottom:3
  },
  max:{
    padding:5,
    backgroundColor:'#F97316',
    marginTop:3,
    marginBottom:3
  },
  min:{
    padding:5,
    backgroundColor:'#22C55E',
    marginTop:3,
    marginBottom:3
  },
  textCLO:{
    color:'#475569',
    fontSize:16,
    marginLeft:5,
    marginRight:5,
    marginBottom:-10
  },
  texts:{
    color:Colors.black,
    fontWeight:'800',
    marginLeft:3,
    marginRight:3,
    fontSize:10,
    paddingTop:2
  },
  clogrph:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  }
});
