import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({

    container:{
        justifyContent:'space-between',
        flexDirection:'row',
        paddingBottom:20,
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20
    },

    innerConatiner:{
        flex:1,
    },
    innerConatiner2:{
        flexDirection:'row'
    },
    download:{
        color:Colors.quizBlue,
        fontSize:14,
        marginTop:2,
        paddingRight:9
    },
    semesterName:{
        fontSize:14,
        color:Colors.black
    }
 
});
