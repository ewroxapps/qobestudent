import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../Themes';
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
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
  socialMediaContainer:{
    flexDirection:'row',
    backgroundColor:'#F5F5F5',
    width:deviceWidth,
    justifyContent:'center'
  },
  socialView:{
   padding:20
  },
  emailContainer1:{
    flexDirection:'row',
    justifyContent:'center',
 
  },
  emailContainer:{
    flexDirection:'row',
    justifyContent:'center',
    

  },
  email:{
    paddingTop:2,
    paddingLeft:3,
    color:'#475569'
  },
  emailText:{
    color:'#38BDF8',
    paddingLeft:10
  },
  whatsAppContainer:{
    paddingTop:40
  },
  salesText:{
    color:'#475569',
    fontWeight:'800',
    fontSize:22,
    paddingBottom:50
  },
  comeDown:{
    paddingTop:160
  },
  contactUS:{
    color:Colors.quizBlue,
    fontSize:14
  }
 
});
