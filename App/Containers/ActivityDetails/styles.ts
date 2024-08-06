import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../Themes';
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    marginTop: -100,
    paddingBottom: 20,
    marginBottom: 5
  },
  blueBackground: {
    height: 100,
    backgroundColor: Colors.lightBlue,
    zIndex: -10
  },
  topContainer: {
    padding: 10
  },
  heading: {
    ...Fonts.style.h6,
    color: Colors.black,
    fontWeight: '700'
  },
  subInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  bodyText: {
    ...Fonts.style.description,
    color: Colors.black
  },
  marksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 7,
    backgroundColor: Colors.backgroundWhite,
    margin: 10,
    borderRadius: 7,
    elevation:4
  },
  divider: {
    width: 1,
    height: '100%'
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemLabel: {
    ...Fonts.style.regular,
    color: Colors.textBlack
  },
  itemValue: {
    ...Fonts.style.h6,
    fontWeight: '700',
    marginBottom: 5
  },
  remarksContainer: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor:Colors.backgroundWhite,
    elevation:2
 
  },
  extraTextContainer: {
    marginTop: 15
  },
  extraTextHeading: {
    ...Fonts.style.description,
    color: Colors.textBlack
  },
  bodyContainer: {
    ...Fonts.style.description
  },
  actionsContainer: {
    paddingHorizontal: 10,
    marginTop: 10
  },
  assignment:{
    marginLeft:20,
    marginRight:20,
    padding:10
  },
  attachmentText:{
    fontSize:15,
    color:Colors.black
  },
  attacchment:{
    marginLeft:10,
    marginRight:10,
    padding:10

  },
  questionView:{
    flexDirection: 'row',
    alignItems:'flex-start',
    flexWrap:'wrap'
   
  },
  questionHeading:{

   textAlign:'justify',
   fontSize:14,
   color:Colors.black,
   overflow:'hidden',
    width:deviceWidth/1.68
  },
  questionNum:{
    fontSize:14,
    color:Colors.black,
    overflow:'hidden',
    width:deviceWidth/17,
    display:'flex'
  },
  justifyView:{
    justifyContent:'space-between',
    flexDirection:'row',
    padding:10
  },
  justifyViewinner:{
    flexDirection:'row',
    alignItems:'center'
    
  },
  butonStyle:{
    marginLeft:10
  },
  txtS:{
   width:'90%',
   color:Colors.black
  },

  leftStyle:{
    alignSelf: 'flex-start',
    marginVertical: 10,
    width: 250,
    flexDirection: 'column'
  },
  rightStyle:{
    alignSelf: 'flex-start',
    marginVertical: 10,
    width: 300,
    flexDirection: 'column'
  }

});
