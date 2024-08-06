import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';
import colors from '../../../../Themes/Colors';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
   
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      dropdown: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
        width: '100%',
      },
      dropdownText: {
        fontSize: 16,
      },
      dropdownList: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginTop: 5,
        width: '100%',
        maxHeight: 150, // Adjust as needed
      },

      dropdownListOpen: {
        borderWidth: 1,
        borderColor: Colors.skyBlue,
        borderRadius: 5,
        marginTop: 5,
        width: '100%',
      
      },
      dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection:'row'
      },
      dropdownItemText: {
        fontSize: 16,
        color:colors.black,
        marginTop:2
      },
      logoContainer: {
        alignItems: 'center',
        marginTop: 20,
      },
      logo: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginRight:3
      },
   
      dropdownclick:{
        borderWidth: 1,
        borderColor: Colors.skyBlue,
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
        width: '100%',
      }
});
