import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';



export default StyleSheet.create({

  container: {
    paddingHorizontal: 4,
    paddingVertical: 25,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:Colors.backgroundWhite,
    marginBottom:10
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileContainer: {
    borderRadius: 50
  },
  profile: {
    height: 60,
    width: 60,
    borderRadius: 50
  },
  topTextContainer: {
    flexShrink: 1,
    flex: 1,
    marginLeft: 10
  },
  classLabel: {
    ...Fonts.style.description,
    color: Colors.black,
    fontFamily: 'Inter',
    fontWeight: '700',
 
  },
  instructorName: {
    ...Fonts.style.regular,
    fontFamily: 'Inter',
    color: Colors.black,
    paddingRight:10,
    fontSize:13
    
  },
  submissionDate:{
    fontFamily: 'Inter',
    color: '#16A34A',
    paddingRight:10,
    fontSize:10
  },
  submit:{

    color:'#14B8A6',
    backgroundColor:'#14B8A6',
    marginTop:20,
    borderRadius:5,
    paddingLeft:100,
    paddingRight:100,
    paddingTop:5,
    paddingBottom:5,
    flexDirection:'row'
  },
  start:{
    paddingLeft:4,
    color:Colors.background
  },
  textStyle:{
    color:Colors.black
  },

  textStyles:{
    ...Fonts.style.medium,
    fontFamily: 'Inter',
    color: Colors.black
  },

  horizontalLine:{
    flex: 0,
    height: 1,
    backgroundColor: Colors.backgroundGrey,
    marginBottom:5,
    marginTop:5
  }
});
