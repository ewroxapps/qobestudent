import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';



export default StyleSheet.create({

  container: {
    paddingHorizontal: 4,
    paddingVertical: 33,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:Colors.backgroundWhite,
    elevation:3,
    marginTop:10
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
    fontSize:13
    
  },
  submissionDate:{
    fontFamily: 'Inter',
    color: '#16A34A',
    fontSize:10
  },
  submit:{

    color:Colors.purplesss,
    backgroundColor:Colors.purplesss,
    marginTop:20,
    borderTopEndRadius:10,
    borderBottomEndRadius:10,
    borderBottomStartRadius:10,
    borderTopStartRadius:10,
    paddingHorizontal: "40%",
    paddingVertical: 9,
    flexDirection:'row'
  },
  start:{

    paddingLeft:4,
    color:Colors.background
  },
  horizontalLine:{
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginVertical: 10, 
     
  },
  header:{
    ...Fonts.style.medium,
    fontFamily: 'Inter',
    color: Colors.black,
    paddingRight: 10
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
