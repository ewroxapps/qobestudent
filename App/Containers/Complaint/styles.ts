import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

export default StyleSheet.create({

    contaner:{
        backgroundColor:Colors.backgroundGrey,
        flex:1
    },
    paginationContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
        flexDirection:'row'
    },
    blueTxt:{
        color:Colors.quizBlue
    },
    pageNumber: {
        padding: 8,
        margin: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
      },
      
      selectedPage: {
        backgroundColor: 'blue',
        borderColor: 'blue',
        color: 'white',
      },
      noResults: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
      },

      containers: {
        position: 'absolute',
        bottom: 20,
        right: 20,
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#38BDF8',
        elevation:15
      },
     
      textWhite:{
        color:Colors.backgroundWhite
      },
      innerContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 25,
        height: 25,
        borderRadius: 30,
        backgroundColor: Colors.backgroundWhite,
      },
      innerContainer2:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 23,
        height: 23,
        borderRadius: 30,
        backgroundColor: '#38BDF8',
      },
    
});
