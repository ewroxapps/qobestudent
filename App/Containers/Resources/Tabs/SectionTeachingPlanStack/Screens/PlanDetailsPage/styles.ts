import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../../../Themes';

export default StyleSheet.create({
  primaryContainer: {
    paddingVertical: 3,
    paddingHorizontal: 5
  },
  container: {
    elevation: 5,
    backgroundColor: Colors.backgroundWhite,
    borderRadius: 5,
    paddingBottom: 10
  },
  topRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  labelHeading: {
    ...Fonts.style.h6,
    color: Colors.darkBlue,
    fontWeight: '700'
  },
  dateText: {
    color: Colors.black,
    fontSize:12
  },
  subjectContainer: {
    backgroundColor: Colors.waterBlue,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  subject: {
    ...Fonts.style.h6,
    color: Colors.black,
    fontWeight: '700'
  },
  topic: {
    ...Fonts.style.normal,
    color: Colors.black
  },
  textWithIconContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  detailContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  cloContainer: {
    marginBottom: 15
  },
  detailLabel: {
    ...Fonts.style.medium,
    color: Colors.textBlack
  },
  detailValue: {
    color: Colors.black,
    fontSize:11
  },
  textWithIcon: {
    marginLeft: 5
  },
  attachmentsHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: Colors.background,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  divider: {
    height: 1
  },
  commentsContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10
  }
});
