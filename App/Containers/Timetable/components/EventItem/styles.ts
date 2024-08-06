import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    marginHorizontal: 2,
    marginVertical: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 2,
    justifyContent: 'space-between',
    backgroundColor:'white',
    elevation:1
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileContainer: {
    borderRadius: 50
  },
  profile: {
    height: 60,
    width: 60,
    borderRadius: 50
  },
  topTextContainer: {
    flex: 1,
    marginLeft: 10
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lectureNumber: {
    ...Fonts.style.description,
    color: Colors.black
  },
  classLabel: {
    ...Fonts.style.description,
    fontWeight: '700'
  },
  instructorName: {
    ...Fonts.style.description
  },
  bottomContainer: {
    flexDirection: 'row',
    marginTop: 7
  },
  planned: {
    backgroundColor: Colors.secondary,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 15
  },
  plannedText: {
    ...Fonts.style.regular,
    color: Colors.backgroundWhite
  },
  bottomInfo: {
    marginLeft: 10
  },
  expandedView: {
    flex: 1,
    backgroundColor: Colors.lightBlue,
    paddingTop: 5,
    paddingBottom: 10,
    paddingHorizontal: 20
  },
  expandedViewItem: {
    flexDirection: 'row',
    marginTop: 10
  },
  expandedKey: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  expandedValue: {
    flex: 1
  },
  key: {
    ...Fonts.style.medium,
    marginLeft: 5
  },
  value: {
    ...Fonts.style.medium,
    marginLeft: 5,
    color: Colors.black
  }
});
