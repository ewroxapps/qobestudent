import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({

  recordContainer: {
    paddingTop:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap:'wrap',
    paddingBottom:20,
    marginHorizontal:deviceWidth/9
  },


  itemContainer: {
    justifyContent:"flex-start",
    alignItems: 'flex-start',
    flex:1
  },

  itemContainers: {
    justifyContent:'flex-end',
    alignItems: 'flex-end',
    flex:1
  },

  itemContainers2: {
    flex:1,
    alignItems:'flex-start'
  },

  itemLabel: {
    ...Fonts.style.regular,
    color: Colors.textBlack,
  },

  nameLabel:{
    ...Fonts.style.regular,
    color: Colors.textBlack,  },

  dateLabel:{
    ...Fonts.style.regular,
    color: Colors.textBlack,

  },
  itemValue: {
    color:"#64748B",
    fontWeight: '700'
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
  },
  itemLabel1:{
    ...Fonts.style.regular,
    color: 'red'
  }
});
