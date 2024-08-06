import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../Themes';
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({

    container: { 
        padding: 10,
        backgroundColor: '#F7F7F7',
       flex:1
      },
      yourMessageContainer: {
        alignItems: 'flex-end',
        marginBottom: 10,
      },
      otherMessageContainer: {
        alignItems: 'flex-start',
        marginBottom: 10,
      },
      messageBubble: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        maxWidth: '80%',
      },
      MymessageBubble: {
        padding: 10,
        backgroundColor: Colors.quizBlue,
        borderRadius: 10,
        maxWidth: '80%',
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 19,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: 'gray',
        

      },
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 8,
      },
      sendButton: {
        marginLeft: 10,
        flexDirection:'row'
      },
      sendButtonText: {
        color: Colors.quizBlue,
      },

      growFlex:{
        flex:1
      },
       mytext:{
        color:Colors.backgroundWhite
       },
       otherTxt:{
        color:Colors.black
       },
       dateView:{
        alignItems:'center',
        paddingBottom:20,
        paddingTop:20

       },
       dateTxt:{
        backgroundColor:'#0499c2',
        borderRadius:5,
        paddingLeft:5,
        paddingRight:5,
        elevation:10,
        color:Colors.backgroundWhite
        
       },
       profile: {
        height: 180,
        width: 180,
        borderRadius: 10,
      
      },
});
