import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../../../../../Themes/Colors';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
export default StyleSheet.create({

  containers: {
    flex: 1
  },
  headerContainer: {
    height: deviceWidth / 6,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop:20,
    justifyContent:'space-between'
  },
  innerView1:{
    flexDirection:'row',
    justifyContent:'center',
    flex:1
  },
  innerView:{
    flexDirection:'row',
    paddingRight:-70,
  },
  textHeader: {
    color: '#0284C7',
    fontSize: 14,
    paddingRight:30
  },
  textHeader1: {
    color: '#0284C7',
    fontSize: 14,
    width:"50%"
  },
  text:{
    color: colors.black,
    fontSize: 14,
    textAlign:'center'

  },
  
});
