import { Dimensions, StyleSheet } from 'react-native';
var widthss = Dimensions.get('screen').width
export default StyleSheet.create({
container:{
    flex:1,
    width:widthss/1.5,
    left:-13,
    top:5
},
innerProfileView:{
  width:'80%',
  flexDirection:'row'
},
profile: {
    height: 45,
    width: 45,
    borderRadius: 50,
    
  },
  time:{
    color:'#475569',
    fontWeight:'700',
    fontSize:12,
    marginTop:15,
    left:12
  },

});
