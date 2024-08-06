import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor:colors.backgroundGrey,
    flex:1,
    padding:10
  },
  nextPressView:{
    backgroundColor:'#16A34A',
    alignItems:'center',
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
    padding:10,
    borderRadius:5,
    marginTop:20
  },

  textWhite:{
    color:Colors.backgroundWhite,
    fontSize:15,
    fontWeight:'700'
  }
});
