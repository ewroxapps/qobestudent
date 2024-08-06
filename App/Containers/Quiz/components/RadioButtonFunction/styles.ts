import { Dimensions, StyleSheet } from 'react-native';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({

    container:{
        
        paddingLeft: '3%',
        height: deviceHeight / 2,
        marginHorizontal: 10,
        marginVertical: 20,
    }
});
