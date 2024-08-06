import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../Themes';
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    
    paddingBottom: 7,
    backgroundColor: '#F1F5F9',
    flexDirection:'column',
  },

  recordContainer: {
    paddingTop:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
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
