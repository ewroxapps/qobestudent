import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../Themes';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundWhite,
  },
  backgroundImage: {
    width: '100%',
    position: 'absolute',
    height: Metrics.screenWidth + 2 // as image height is 2 pixels more than width
  },
  logoContainer: {
    marginTop: 50,
    alignItems: 'center'
  },
  logo: {
    marginTop: 20
  },
  qobe: {
    marginTop: 5,
    fontSize: Fonts.size.regular,
    color: colors.backgroundWhite
  },
  innerContainer: {
    justifyContent:'space-between',
    marginTop: 30,
    marginBottom: 5,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 35,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.9)',
    elevation:3,
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },
  headingContainer: {
    alignItems: 'center',
    marginBottom: 25,
    flex:1
  },
  headingText: {
    ...Fonts.style.h1,
    fontWeight: '700'
  },
  bodyText: {
    color:Colors.black,
    fontSize:12
  },
  inputField: {
    marginTop: 5,
  },
  passwordInputContainer: {
    marginTop: 25
  },
  loginButton: {
    marginTop: 30,
  },

  loginButtons: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.bloodOrange,
    paddingVertical: 13,
    borderRadius: 5,
    shadowColor: colors.secondary,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginTop:30
  },
  forgotPasswordContainer: {
    marginTop: 30
  },
  texts: {
    ...Fonts.style.normal,
    color: Colors.backgroundWhite
  },
  forgotPassword: {
    ...Fonts.style.normal,
    textAlign: 'center'
  },
  alfozeLogoContainer: {
    marginBottom: -15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    flex:1
  }
});
