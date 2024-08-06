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
      closeContainer:{
        flexDirection:'row',
        alignContent:'flex-end',
        justifyContent:'flex-end',
        paddingRight:20
   
      },
 
      deleteText:{
        color:'#38BDF8',
        fontSize:24,
        marginTop:5
      },

      titleView:{
        paddingTop:50,
        paddingLeft:20,
        paddingRight:20
      },
      titleText:{
        color:'#475569',
        fontSize:16,
        fontWeight:'500'
      },
      titletextInput: {
        height: 45,
        backgroundColor: '#F8FAFC',
        textAlignVertical: 'top',
        borderRadius: 5,
        marginLeft:3,
        marginRight:3,
        marginTop:2.5,
        marginBottom:2.5,
        
      
      },
  
});
