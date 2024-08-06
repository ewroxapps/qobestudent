import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({

    container:{
        paddingLeft:20,
        paddingRight:20,
        paddingTop:20
    },
    texts:{
        color:'#475569',
        marginLeft:8
    },
    inputText:{
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor:Colors.backgroundWhite,
        colors:Colors.black,
        textAlignVertical: 'top',
        padding: 4,
        marginTop: 5,
        fontSize: 16,
        borderColor: '#E6E5ED',
        height:deviceHeight/15,
        marginLeft:10,
        marginRight:10
        
      },

      inputTextd:{
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor:Colors.backgroundWhite,
        colors:Colors.black,
        textAlignVertical: 'top',
        padding: 4,
        marginTop: 5,
        fontSize: 16,
        borderColor: '#E6E5ED',
        height:deviceHeight/7,
        marginLeft:10,
        marginRight:10
        
      },

      containerd:{
        paddingLeft:20,
        paddingRight:20,
        paddingTop:20,
        paddingBottom:10
    },
    buttonSubmit:{
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:Colors.quizBlue,
        marginBottom:20,
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:3,
        alignItems:'center'

    },
    textSubmit:{
        color:Colors.backgroundWhite,
        fontSize:16
    },
    errorText:{
        color:Colors.red,
        marginLeft:5
    }
});
