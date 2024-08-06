import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({

    container:{
        backgroundColor:'#F0F9FF',
        alignItems:'center',
        borderRadius:5,
        padding:10
    },
    textStyle:{
        color:Colors.black,
        marginTop:10,
        fontWeight:'300',
        fontSize:15
    },
    whiteTxt:{
        color:Colors.backgroundWhite,
        fontSize:14,
        fontWeight:'700'
    },
    buttonView:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:30
    },
    cancelButton:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#94A3B8',
        marginLeft:10,
        marginRight:10,
        borderRadius:3,
        paddingTop:5,
        paddingBottom:5
    },
    quitButton:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#F43F5E',
        marginLeft:10,
        marginRight:10,
        borderRadius:3,
        paddingTop:5,
        paddingBottom:5
    }
});
