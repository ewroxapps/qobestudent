import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({

  overallStyle:{
    flex:1,
  },
  container: {
    backgroundColor: Colors.quizBlue,
    width: deviceWidth,
    flexDirection: 'row'
  },

  
  questionContainer: {
    padding: '5%',
    backgroundColor: "#E2E8F0",
    alignItems: 'flex-start',
    flexDirection:'column'
  },

  questionText: {
    textAlign: 'justify',
    fontSize: 14,
    color: Colors.black,
    width:deviceWidth/1.13,
  
  },
  answerText:{
    fontSize:15,
    color:Colors.black,
    paddingTop:10
  },
  inputText:{
    paddingHorizontal: 8,
    paddingVertical: 13,
    backgroundColor:"#E2E8F0",
    colors:Colors.black,
    textAlignVertical: 'top',
    padding: 4,
    marginTop: 5,
    fontSize: 16,
    borderColor: '#E6E5ED',
    height:deviceHeight/10
  },

  answerConatiner:{
    padding:10
  },
  saveAnswerContainer:{
    marginLeft:10,
    marginRight:10
  },
  saveAnswerTexT:{
    color:Colors.black,
    fontWeight:'300',
    fontSize:13
  },
  growFlex:{
    flex:1
  },
  uploadView:{
    width:deviceWidth
  },
  downloadView:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10
  },
  blueDownloadTxt:{
    color:Colors.quizBlue,
    top:8
  },
  mytextBlue:{
    color:Colors.quizBlue,
    fontSize:12,
    right:5,
    top:2
  }
});
