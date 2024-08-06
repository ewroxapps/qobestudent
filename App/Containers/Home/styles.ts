import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../Themes';

export default StyleSheet.create({
  container: {
    paddingBottom: 20
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    right: 15
  },
  speaker: {
    marginHorizontal: 15
  },
  profile: {
    borderRadius: 50,
    width: 35,
    height: 35
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 10,
    backgroundColor: Colors.lightBlue,
    justifyContent: 'space-between'
  },
  topLeft: {
    flex: 1
  },
  heading: {
    ...Fonts.style.h5,
    color: Colors.black,
    fontWeight: '700'
  },
  body: {
    ...Fonts.style.normal,
    color: Colors.black
  },
  bottomContainer: {
    paddingHorizontal: 12
  },
  upNextContainer: {
    marginTop: 20
  },
  sectionHeading: {
    ...Fonts.style.normal,
    fontWeight: '500',
    marginTop:5,
    marginBottom:5
  },
  currentCoursesContainer: {
    marginTop: 5
  },
  welcomeImage: {
    width: 162,
    height: 106
  }
});
