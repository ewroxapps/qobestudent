import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
export default StyleSheet.create({

  containers: {
    backgroundColor: Colors.backgroundGrey,
    flex: 1
  },
  headerContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop:20,
    marginBottom:10,
    justifyContent:'space-between'
  },
  textHeader: {
    color: '#475569',
    fontSize: 18,
    fontWeight: '700',
    flex:1


  },
  itemText: {
    color: '#94A3B8',
    marginTop: 5,
    fontWeight: '500',
    fontSize: 13,
    
  },
  flatListStyle:{
    
  }
});
