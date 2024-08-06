import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';
import colors from '../../../../Themes/Colors';

const deviceHeight=Dimensions.get('screen').height
export default StyleSheet.create({
container:{
    elevation:1,
    backgroundColor:Colors.backgroundGrey,
    marginTop:10,
    paddingBottom:10,
    paddingTop:10
},
justifyView:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    alignItems:'center',

},
topHeading:{
    color:Colors.black,
    left:10,
    marginRight:30
},
heading:{
    color:Colors.black,
    fontSize:13,
    fontWeight:'600',
},
detail:{
    color:Colors.black,
    fontSize:13,
    fontWeight:'400'
},
attachment:{
    marginLeft:60,
    marginRight:30,
    marginTop:10,
},
container2: {
    alignItems: 'center',
    justifyContent: 'center',
    width:320,
    height:90,
    marginLeft:-40,
    marginTop:10,
    borderColor:colors.black,
    borderWidth:0.6
  },
profile: {
    width: '100%', 
    height: '100%',
    resizeMode:'cover',
    borderRadius:10
  }
});
