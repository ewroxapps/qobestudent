import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    paddingBottom: 7,
    flexDirection:'column',
  },

  recordContainer: {
    paddingTop:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap:'wrap',
    paddingBottom:10,
    
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
    color:Colors.black,
    fontWeight: '500'
  },

  
  itemValue2: {
    color:Colors.backgroundWhite,
    fontWeight: '500',
    marginTop:-16,
    marginLeft:5
  },


  start: {
    flexDirection:'row',
    backgroundColor:'#38BDF8',
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    paddingLeft:25,
    paddingRight:25,
    paddingTop:7,
    paddingBottom:10
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
  viewDetailsButton: {
    padding: 3
  },
  viewDetailsText: {
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
