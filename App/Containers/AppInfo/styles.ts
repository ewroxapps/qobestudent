import { Dimensions, StyleSheet } from 'react-native';
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  

  recordContainer: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',  
  },


  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  itemContainer1: {
    flex: 1,
    marginLeft:20,
    marginRight:20,
    flexDirection:'column'
  },

  contactUS:{
    color:'#0EA5E9',
    fontSize:14
  },

  QobeText:{
    color:'#0369A1',
    fontWeight:'700',
    paddingTop:60,
    fontSize:16

  },

  secondContainer:{
    flexDirection:'row',
    backgroundColor:'#E0F2FE',
    width:deviceWidth,
    alignContent:'center',
    justifyContent: 'center',
    paddingTop:20,
    paddingBottom:20
  }
  
});
