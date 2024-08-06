import { Dimensions, Platform, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  overlay: {
    flex: 1,
  },
  textStyle:{
    color:'#475569',
    marginTop:16
  },
  dropDown: {
    flexDirection:'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
    elevation: 5,
    ...Platform.select({
      ios: {
        maxHeight: 100,
      },
      android: {
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        maxWidth: '80%',
      },
    }),
    maxHeight:100
  },

  viewDrop:{
    backgroundColor: '#F8FAFC',
    height:45,
    borderRadius: 5,
    marginRight:3,
    marginTop:2.5,
    marginBottom:2.5,
    justifyContent:'space-between',
   flexDirection:'row',
   alignItems:'center'
  },
  viewDropError:{
    backgroundColor: '#F8FAFC',
    height:45,
    borderRadius: 5,
    marginRight:3,
    marginTop:2.5,
    marginBottom:2.5,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    borderColor:Colors.red,
    borderWidth:1
  },
  selectedText:{
    marginLeft:12
  },
 errorText:{
    color:Colors.red,
    fontSize:10,
    fontWeight:'400'
  }
});
