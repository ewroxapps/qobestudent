import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.quizBlue,
        alignItems: 'center',
        justifyContent: 'center',
      },
      selectedRadioInnerCircle: {
        height: 10,
        width: 10,
        borderRadius: 6,
        backgroundColor: Colors.quizBlue,
      },
      label: {
        marginLeft: 10,
        fontSize: 13,
        color:Colors.black,
        marginRight:10
      },
});
