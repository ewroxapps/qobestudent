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
        borderRadius:10,
        paddingVertical: 10,
        backgroundColor: Colors.backgroundWhite,
        paddingRight:10,
        paddingLeft:10,
        height:deviceHeight/2,
      },
     headerView:{
      alignItems:'center',
      marginTop:10,
      marginBottom:10
     },
     headerTexT:{
      color:Colors.black,
      fontSize:16,
      fontWeight:'600'
     },
     textStyle:{
      color:'#475569',
      marginTop:16
    },
    titletextInput: {
      height: 45,
      backgroundColor: '#F8FAFC',
      textAlignVertical: 'top',
      borderRadius: 5,
      marginRight:3,
      marginTop:2.5,
      marginBottom:2.5,
    },
    justifyView:{
      marginTop:20,
      justifyContent:'space-between',
      flexDirection:'row',
      paddingRight:5,
      paddingLeft:5,
      marginBottom:10
    },
    blueTexT:{
      color:Colors.quizBlue
    },
    profile: {
      height: 180,
      width: 180,
      borderRadius: 10,
    
    },

    createButton:{
      alignItems:'center',
      backgroundColor:Colors.quizBlue,
      paddingTop:8,
      paddingBottom:8,
      borderRadius:5,
      marginTop:10,
      marginBottom:30
    },
    whiteTexT:{
      color:Colors.backgroundWhite
    },
  
});
