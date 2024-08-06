import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
  container: {
   borderTopEndRadius:10,
   borderBottomEndRadius:10,
   borderBottomLeftRadius:10,
   borderTopStartRadius:10,
   padding:10,
   flexDirection:'row',
   marginBottom:10,
   justifyContent:'space-between'
  },

  textStyle :{
    color: Colors.backgroundWhite,
    marginTop:5,
    fontSize:14,
  },
  nextClickLeft:{
    flex:1, 
    alignItems:'flex-end'
  },
  nextClickRight:{
    flex:1, 
    alignItems:'flex-start'
  },
  symbolRight:{

  },
  symbolLeft:{
    
  },
  textRight:{
    
  },
  textLeft:{
    
  }
  
});
