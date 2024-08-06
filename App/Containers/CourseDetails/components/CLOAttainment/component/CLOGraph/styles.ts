import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../../../Themes';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
export default StyleSheet.create({

  containers: {
    backgroundColor: Colors.backgroundWhite,
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
  texts:{
    color:Colors.black,
    fontWeight:'800',
    marginLeft:3,
    marginRight:3,
    fontSize:10,
    paddingTop:2
  }
  
});
