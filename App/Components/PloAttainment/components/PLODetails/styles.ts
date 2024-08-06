import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';
export default StyleSheet.create({
  
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'#94A3B8',
    paddingBottom:5,
    paddingTop:5
  },
  itemContainer: {
    flex: 1,
    marginTop:10
  },
  itemContainer1: {
    flex: 1,
    marginTop:10,
    marginLeft:20
  },
  textstyle:{
    color:Colors.backgroundWhite,
    marginLeft:25,
    textAlign:'justify',
    fontSize:14,
    fontWeight:'700',
    marginRight:25
  },

  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom:15
  },
  itemContainer2: {
    flex: 1,
    marginTop:5,
    paddingLeft:10,
    paddingRight:10
  },
  itemContainer12: {
    flex: 1,
    marginTop:5,
    marginLeft:20
  },
  ploNametext:{
    color:'#475569',
    fontSize:14
  },
  ploDistext:{
    color:'#000000',
    fontSize:14,
    fontWeight:'600'
  },
  ploDistexxt:{
    color:'#000000',
    fontSize:14,
    fontWeight:'600',
  },
  ploDistexxt1:{
    color:'#000000',
    fontSize:14,
    fontWeight:'600',
    marginLeft:20
  },
  valametext:{
    color:Colors.black,
    fontSize:14,
    textAlign:'center',
    top:15
  },
  valametext11:{
    color:Colors.black,
    fontSize:14,
    textAlign:'center',
    marginTop:-10
  },
  plotext:{
    fontSize:14,
    textAlign:'center',
    color:'#64748B',
  },
  valametext1:{
    color:'#EF4444',
    fontSize:14,
    textAlign:'center',
    top:20
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom:15,
    backgroundColor:'#E0F2FE'
  },
  reqPer:{
    color:'#475569',
    fontSize:14,
    paddingBottom:10
  }
});
