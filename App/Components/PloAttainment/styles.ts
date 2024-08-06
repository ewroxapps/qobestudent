import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../Themes';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  noResultsContainer: {
    flex: 1
  },
  recordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingBottom:10,
    paddingTop:10
  },
  recordContainer1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom:5,
    alignItems:'center',
    justifyContent:'center'
  },
  innerView:{
    flexDirection:'row',
   
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'#94A3B8',
    paddingBottom:5
  },
  textstyle:{
    color:Colors.backgroundWhite,
    marginLeft:10,
    textAlign:'justify',
    fontSize:14,
    fontWeight:'700'
  },
  itemContainer: {
    flex: 1,
    marginTop:"2%",
  },
  itemContainer1: {
    flex: 1,
    marginTop:"2%",
    
  },
  itemValue: {
    marginTop:6,
    color: "#64748B",
    fontWeight: '500',
    marginLeft:10,
    marginRight:10
  },
  textStyle:{
    color: "#64748B",
    fontWeight: '500',
    textAlign:'center',
    marginTop:3,
    paddingLeft:3,
    paddingRight:3,
    fontSize:14
  },
  flatList:{
    paddingTop:10,
  }
});
