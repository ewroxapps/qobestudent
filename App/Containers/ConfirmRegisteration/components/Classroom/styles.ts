import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
 
    radioButton: {
        flexDirection: 'row',
        marginTop:5
      },
      radioCircle: {
        height: 12,
        width: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.quizBlue,
        marginTop:4
      },
      selectedRadioInnerCircle: {
        height: 10,
        width: 10,
        borderRadius: 6,
        backgroundColor: Colors.quizBlue,
      },
      label: {
        marginLeft:2,
        fontSize: 11,
        color:'#64748B',
        fontWeight:'600',
        width:250
      },
      Nolabel: {
        marginLeft: 5,
        fontSize: 11,
        color:'#64748B',
        fontWeight:'400'
      },

});
