import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../../../Themes';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 50,
    justifyContent: 'space-between'
  },
  container1: {
    width: Metrics.screenWidth / 4 - 15,
    marginHorizontal: 5,
    borderRadius: 5
  },
  label: {
    ...Fonts.style.medium,
    marginTop: 5
  },
  topContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileContainer: {
    borderRadius: 50
  },
  profile: {
    height: 96,
    width: 96,
    borderRadius: 50
  },
  topTextContainer: {
    flex: 1,
    marginLeft: 10
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  courseName: {
    ...Fonts.style.description,
    color: Colors.textBlack
  },
  classLabel: {
    ...Fonts.style.medium,
    fontWeight: '700',
    color: Colors.black
  },
  instructorName: {
    ...Fonts.style.description
  },
  viewDetailsButton: {
    backgroundColor: Colors.backgroundGrey,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 9,
    marginTop: 7,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10
  },
  viewDetailsText: {
    ...Fonts.style.medium
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 15,
    justifyContent:'center'
  },
  menuOptionsContainer: {
    marginTop: 65,
    marginLeft: 10,
    marginRight: 20,
 
    borderRadius: 4,
    width: deviceWidth,
    backgroundColor:'#F0F9FF',
  },
  innerMenu:{
    backgroundColor:'#F0F9FF',

  },

  container2: {
    paddingHorizontal: 5,
    paddingTop: 10,
    paddingBottom: 7
  },
  recordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
 
  itemContainer: {
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.backgroundWhite,
    width:deviceWidth/2.5,
    height:deviceHeight/10,
    marginRight:20,
    elevation:4,
  },
  itemContainering: {
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.backgroundWhite,
    width:deviceWidth/2.5,
    height:deviceHeight/10,
    marginRight:20,
    marginLeft:5,
    elevation:4,
    marginTop:5
  },
  itemContainerr: {
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.backgroundWhite,
    width:deviceWidth/1.1,
    height:deviceHeight/10,
    marginRight:20,
    elevation:4,
    marginTop:10
  },
  itemLabel: {
    ...Fonts.style.regular,
    color: Colors.textBlack
  },
  itemValue: {
    ...Fonts.style.medium,
    fontWeight: '500',
    marginTop:5
  },
  divider: {
    width: 1,
    height: '100%'
  },
  viewDetailsContainer: {
    marginTop: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewDetailsButton1: {
    padding: 3
  },
  viewDetailsText1: {
    ...Fonts.style.small,
    color: Colors.primary
  },
  hitSlop: {
    left: 5,
    top: 5,
    right: 5,
    bottom: 5
  }
});
