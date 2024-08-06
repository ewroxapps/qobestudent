import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  containers: {
    backgroundColor: Colors.backgroundGrey,
    flex: 1,
    justifyContent:'space-between'
  },
  headerContainer: {
    height: deviceWidth / 6,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop:20,
    justifyContent:'space-between',
  },
  innerView:{
    flexDirection:'row',
    paddingRight:-70,
  },
  textHeader: {
    color: '#475569',
    fontSize: 14,
    fontWeight: '600',
    paddingRight:30
  },
  text:{
    color: '#475569',
    fontSize: 14,
    fontWeight: '600',
    marginTop:3,
    marginLeft:2,
    marginRight:2
  },
  textCLO:{
    color:'#475569',
    fontSize:20,
    marginLeft:10
  },
  avg:{
    width:"20%",
    height:"45%",
    marginTop:6,
    backgroundColor:'#EF4444',
  },
  my:{
    backgroundColor:'#3B82F6',
    width:"14%",
    height:"60%",
    marginTop:6,
  },
  max:{
    backgroundColor:'#F97316',
    width:"20%",
    height:"45%",
    marginTop:6,
  },
  min:{
    backgroundColor:'#22C55E',
    width:"20%",
    height:"45%",
    marginTop:6,

  },
  texts:{
    color:Colors.black,
    fontWeight:'800',
    marginLeft:3,
    marginRight:3,
    fontSize:10,
  },
  texts1:{
    color:Colors.black,
    fontWeight:'800',
    marginLeft:3,
    marginRight:3,
    fontSize:10,
    paddingTop:3
  },

  clograph:{
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
  }
  
});
