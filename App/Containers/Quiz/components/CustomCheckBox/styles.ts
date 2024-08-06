import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft:10
      },
      checkboxChecked: {
        width: 15,
        height: 15,
        backgroundColor: Colors.quizBlue, // Change the color to your desired checked color
        marginRight: 10,
      },
      checkboxUnchecked: {
        width: 15,
        height: 15,
        borderWidth: 1,
        borderColor: Colors.quizBlue, // Change the color to your desired unchecked color
        marginRight: 10,
      },
      label: {
        fontSize: 14,
        color:Colors.black,
        fontWeight:'400',
        marginRight:7
      },
});
