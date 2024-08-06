import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../Themes';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundWhite,
    paddingBottom: 20
  },
  backgroundImage: {
    width: '100%',
    position: 'absolute',
    height: Metrics.screenWidth + 2 // as image height is 2 pixels more than width
  },
  logoContainer: {
    marginTop: 80,
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
    marginTop: 40,
    marginBottom: 5,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 35,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.backgroundWhite
  },
  headingContainer: {
    alignItems: 'center',
    marginBottom: 25
  },
  headingText: {
    ...Fonts.style.h4,
    fontWeight: '700',
    color: Colors.darkGreen
  },
  bodyText: {
    ...Fonts.style.description
  },
  inputField: {
    marginTop: 5
  },
  loginButton: {
    marginTop: 30
  },
  forgotPasswordContainer: {
    marginTop: 30
  },
  forgotPassword: {
    ...Fonts.style.normal,
    textAlign: 'center'
  },
  alfozeLogoContainer: {
    marginBottom: -20,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 2
  },
  labelContainer: {
    flexDirection: 'row'
  },
  label: {
    ...Fonts.style.medium
  },
  labelSpacing: {
    marginLeft: 5
  },
  passwordConfirmationContainer: {
    marginTop: 5
  },
  backButtonContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backButtonText: {
    ...Fonts.style.medium,
    color: Colors.black
  },
  hitSlop: {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5
  },
  successText: {
    ...Fonts.style.h3,
    fontWeight: '700',
    color: Colors.darkGreen
  }
});
