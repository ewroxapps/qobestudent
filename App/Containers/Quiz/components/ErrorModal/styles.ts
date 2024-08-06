import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    container:{
        backgroundColor:'#EF4444',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
        borderRadius:5
    },
    errorSvg:{
        flexDirection:'row',
        marginTop:-15
    },
    whiteTxt:{
        color:Colors.backgroundWhite,
        right:12
    },
    cross:{
        left:130
    },
    whiteTxt1:{
        color:Colors.backgroundWhite,
        fontSize:12
    },

    whiteTxt2:{
        color:Colors.backgroundWhite,
        fontSize:13,
        top:3,
        fontWeight:'700'
    },
   
});
