import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
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
    backgroundColor: Colors.backgroundWhite,
    height:deviceHeight/3.5
  },

  recordContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  itemContainer: {
    flex: 1,
    padding:20,
    backgroundColor:'#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5,
    marginLeft:10,
    marginRight:10
  },
  itemValue: {
    marginTop:5,
    color: "#475569",
    fontWeight: '400',
    fontSize:12
  },
});
