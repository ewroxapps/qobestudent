import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    backgroundColor:'#8B5CF6',
    padding:10
  },
  justfyView:{
    justifyContent:'space-between',
    flexDirection:'row'
  },
  textcolor:{
    color:Colors.backgroundWhite,
    fontSize:14,
  },
  textcolorWhite:{
    marginTop:16,
    color:Colors.backgroundWhite,
    fontSize:16,
    fontWeight:'600'
  }
 
});
