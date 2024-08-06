import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    container:{
        backgroundColor:Colors.backgroundWhite,
        flexDirection:'column',
        marginLeft:10,
        marginRight:10,
        borderRadius:5,
        marginBottom:5,
        paddingRight:20,
        paddingBottom:10
    },
    innerContainer:{
        flexDirection:'row',
        backgroundColor:Colors.backgroundWhite,
        marginBottom:5,
    },
    sendContainer:{
        backgroundColor:'#38BDF8',
        justifyContent:'center',
        borderRadius:5,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:3,
        paddingBottom:3,
        marginLeft:5,
        height:deviceHeight/15
    },
    commentText:{
        marginLeft:20,
        paddingBottom:3,
        fontSize:15,
        color:'#94A3B8'
    },
    textInputContainer:{
        borderRadius:5,
        backgroundColor:'#94A3B8',
        marginLeft:20
    },
    titletextInput:{
        borderRadius:5,
        backgroundColor:'#F8FAFC',
        marginLeft:2,
        marginRight:2,
        marginTop:2,
        marginBottom:2,
        width:deviceWidth/1.5,
        minHeight:10,
        maxHeight:deviceHeight/7
    }
});
