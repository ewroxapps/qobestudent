import { Dimensions, StyleSheet } from 'react-native';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    container:{
        alignItems:'center',
    },
    image:{
        width: deviceWidth/1,
        height: deviceHeight/3,
    },
});
