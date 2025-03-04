import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';

const styles = StyleSheet.create({
  bottomContainer: {
    paddingHorizontal: 10
  },
  component: {
    alignItems: 'center'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5
  },
  arrowButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: Colors.textBlack,
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    ...Fonts.style.large,
    fontWeight: '700',
    marginLeft: 5
  },
  week: {
    width: '100%',
    paddingVertical: 5
  },
  weekdayLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10
  },
  weekdayLabel: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 3,
    paddingVertical: 10,
    borderRadius: 30,
    paddingHorizontal: 0,
    backgroundColor: Colors.backgroundWhite,
    elevation: 2
  },
  selectedWeekdayLabel: {
    backgroundColor: Colors.secondary
  },
  weekdayLabelText: {
    ...Fonts.style.large,
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  selectedDayText: {
    color: Colors.backgroundWhite
  },
  weekdayNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5
  },
  weekDayNumber: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  weekDayNumberCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 30 / 2
  },
  weekDayNumberTextToday: {
    color: 'white'
  },
  schedule: {
    width: '100%'
  },
  pickerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  picker: {
    backgroundColor: 'white',
    paddingBottom: 20
  },
  modal: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  blurredArea: {
    flex: 1,
    opacity: 0.7,
    backgroundColor: 'black'
  },
  modalButton: {
    padding: 15
  },
  modalButtonText: {
    fontSize: 20
  },
  indicator: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    position: 'absolute'
  },
  day: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderTopColor: 'grey',
    borderTopWidth: StyleSheet.hairlineWidth
  },
  dayLabel: {
    width: '20%',
    alignItems: 'center',
    padding: 10,
    borderRightColor: 'grey',
    borderRightWidth: StyleSheet.hairlineWidth
  },
  monthDateText: {
    fontSize: 20
  },
  dayText: {},
  allEvents: {
    width: '80%'
  },
  event: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  eventDuration: {
    width: '30%',
    justifyContent: 'center'
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  durationDot: {
    width: 4,
    height: 4,
    backgroundColor: 'grey',
    marginRight: 5,
    alignSelf: 'center',
    borderRadius: 4 / 2
  },
  durationDotConnector: {
    height: 20,
    borderLeftColor: 'grey',
    borderLeftWidth: StyleSheet.hairlineWidth,
    position: 'absolute',
    left: 2
  },
  durationText: {
    color: 'grey',
    fontSize: 12
  },
  eventNote: {},
  lineSeparator: {
    width: '100%',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  dot: {
    width: 4,
    height: 4,
    marginTop: 1,
    alignSelf: 'center',
    borderRadius: 4 / 2,
    position: 'absolute',
    bottom: '10%'
  }
});

export default styles;
