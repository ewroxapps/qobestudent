import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
    textContainer:{
        backgroundColor:'#14B8A6',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        flexDirection:'row'
    },
    error:{
      color:'red'
    },
    textStyle:{
       color:Colors.backgroundWhite,
       fontSize:18,
     },
     outerContainer:{
        padding:20
     },
     questionContainer:{
        backgroundColor:'#E2E8F0',
        padding:10,
        flexDirection:'row'
     },
     headText:{
        color:Colors.black,
        fontWeight:'600',
        fontSize:14,
     },
     questionText:{
        color:Colors.black,
        fontSize:14,
        paddingRight:15,
        paddingLeft:5
     },
     choice: {
        padding: 8,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 4,
        marginVertical: 8,
      },
      selectedChoice: {
        backgroundColor: '#CAF2E1',
      },
      textchoice:{
        color:Colors.black
      },
      answerInput: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 4,
        padding: 8,
        marginVertical: 8,
      },
      dropdown: {
         height: 50,
         borderColor: 'gray',
         borderWidth: 0.5,
         borderRadius: 8,
         paddingHorizontal: 8,
         marginTop:10
       },
       placeholderStyle: {
         fontSize: 16,
       },
       selectedTextStyle: {
         fontSize: 16,
       },
       inputSearchStyle: {
         height: 40,
         fontSize: 16,
       },
       button:{
        backgroundColor:'#14B8A6',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        borderRadius:5,
        width:Dimensions.get('window').width/1.1,
        height:35,
        marginTop:20
        
       },
       submitButton: {
        alignSelf: 'center',
      },
 
});
