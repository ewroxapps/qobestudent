import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../../Themes';
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
      deleteContainer:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
   
      },
    cancelContainer:{
        flex:1,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        paddingTop:10
   
      },
      deleteText:{
        color:'#EF4444',
        fontSize:24,
        marginTop:5
      },

     cancelText:{
        color:'#38BDF8',
        fontSize:24,
        marginTop:5
      }
  
});
