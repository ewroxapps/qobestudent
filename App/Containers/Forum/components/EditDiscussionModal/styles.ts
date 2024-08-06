import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -20,
    left: -20,
    flex: 1,
    width: Metrics.screenWidth,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingVertical: 10,
    backgroundColor: Colors.backgroundWhite
  },
  topRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headingContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginStart:110
   
  },
  heading: {
    ...Fonts.style.normal,
    width:'180%'

  },
  closeButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20
  },

  titleView:{
    paddingTop:50,
    paddingLeft:20,
    paddingRight:20
  },
  titleText:{
    color:'#475569',
    fontSize:16,
    fontWeight:'500'
  },
  titletextInput: {
    height: 45,
    backgroundColor: '#F8FAFC',
    textAlignVertical: 'top',
    borderRadius: 5,
    marginLeft:3,
    marginRight:3,
    marginTop:2.5,
    marginBottom:2.5,
    
  
  },
  detailView:{
    paddingTop:10,
    paddingLeft:20,
    paddingRight:20
  },

  CreateView:{
    paddingTop:10,
    paddingLeft:20,
    paddingRight:20,
 
  },
  innerCreateVie:{
    flexDirection: 'row',
    backgroundColor:'#38BDF8', 
    borderRadius:5, 
    alignItems:'center',
    justifyContent:'center',
    paddingTop:10,
    paddingBottom:10
  },

  detailtextInput: {
    height: 245,
    backgroundColor: '#F8FAFC',
    textAlignVertical: 'top',
    borderRadius: 5,
    marginLeft:3,
    marginRight:3,
    marginTop:2.5,
    marginBottom:2.5,
    
  
  },
  textWhite:{
    color:Colors.backgroundWhite
  }
});
