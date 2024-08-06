import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    overallStyle:{
        flex:1,
        backgroundColor:Colors.backgroundGrey,
        flexDirection:'column'
      },
      headerContainer: {
        backgroundColor:"#FFFFFF",
        width: deviceWidth,
        height: deviceHeight / 13,
        flexDirection: 'row',
        marginTop: '9.9%'
      },
      container: {
    
        backgroundColor: Colors.quizBlue,
        width: deviceWidth,
            height: deviceHeight / 14,
        flexDirection: 'row'
      },
      listItemContainer: {
        paddingHorizontal: 10,
      },    
      timeText: {
        fontSize: 18,
        marginLeft: 10,
        marginTop:-14,
        color: Colors.black,
        width: '60%',
        alignSelf:'center'
    
      },
      modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
      },
      modalText: {
        fontSize: 13,
        color:Colors.black
      },

      modalClose:{
        alignItems:'flex-end',
      },
      buttonClik:{
        backgroundColor:'red',
        color:Colors.backgroundWhite,
        paddingLeft:15,
        paddingRight:15,
        paddingTop:5,
        paddingBottom:5,
        borderRadius:5
      }
});
