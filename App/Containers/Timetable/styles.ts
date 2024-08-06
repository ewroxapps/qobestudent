import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50
  },
  topContainer: {
    height: 100,
    backgroundColor: Colors.lightBlue,
    zIndex: -10
  },
  calendarContainer: {
    paddingHorizontal: 10,
    marginTop: -90
  },
  eventsContainer: {
    flex: 1,
    paddingHorizontal: 10
  },
  noEventsContainer: {
    flex: 1,
    height: Metrics.screenHeight * 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noEventText: {
    ...Fonts.style.normal
  },
  sectionHeading: {
    ...Fonts.style.normal,
    color: Colors.black,
    marginTop: 10,
  },
  dateHeading: {
    ...Fonts.style.normal
  },
  sectionListContainer: {
    flex: 1,
    marginVertical: 10
  },
  sectionListItem: {
    flex: 1,
    marginVertical: 5
  }
});
