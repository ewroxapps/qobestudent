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
    backgroundColor: '#F0F9FF'
  },
  topRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headingContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginStart: 120,
    flexDirection:'row'
  },
  heading: {
    ...Fonts.style.normal,
    paddingLeft:3,
    marginBottom:3
  },
  closeButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20
  },

  courseHeadingContainer:{
    marginTop:20,
    marginLeft:25,
    flexDirection:'column'
  },

  courseTest:{
    color:Colors.black,
    fontSize: 16,
  
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft:20,
    paddingRight:20,
    flex:1
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
    fontSize:12,
    marginRight:10
  },
  justifyView:{
    justifyContent:'space-between',
    flexDirection:'row'
  }
});
