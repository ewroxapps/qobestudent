import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

export default StyleSheet.create({
  topcontainer: {
    alignItems: 'center'
  },

  bocontainer: {
    alignItems: 'center',
    marginTop:60
  },
  textStyle: {
    marginTop: 15,
    fontSize: 16,
    color: Colors.black,
    fontWeight: '700'
  },
  textStyleBottom: {
    marginTop: 15,
    fontSize: 16,
    width: 250,
    color: Colors.black,
    fontWeight: '700',
    textAlign: 'center'
  },
  noResultsContainer: {
    flex: 1
  },
});
