import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor:colors.backgroundGrey,
    flex:1
  },

  nextPressView:{
    backgroundColor:Colors.quizBlue,
    alignItems:'center',
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
    padding:10,
    borderRadius:5
  },

  textWhite:{
    color:Colors.backgroundWhite,
    fontSize:15,
    fontWeight:'700'
  },

  centerVire:{
    alignItems:'center'
  },
  text:{
    color:'black'
  }
 
});
