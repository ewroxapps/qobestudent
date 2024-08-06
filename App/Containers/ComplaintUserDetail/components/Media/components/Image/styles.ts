import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../../../Themes';

const deviceHeight=Dimensions.get('screen').height
export default StyleSheet.create({
    profile: {
        height:100,
        width: 100,
        borderRadius: 20,
        backgroundColor:Colors.backgroundGrey,
        marginLeft:5,
        marginRight:5,
        borderColor:Colors.black,
        borderWidth:0.2
      },
});
