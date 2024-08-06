import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../../../../../Themes';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundWhite,
    borderRadius: 5,
    elevation:2,
    marginBottom:5
  },
  topRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  labelHeading: {
    color: Colors.darkBlue,
    fontWeight: '700',
    fontSize:16
  },
  dateText: {
    fontSize:12,
    color: Colors.black,
    left:-10
  },
  subjectContainer: {
    backgroundColor: Colors.lightBlue,
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
    fontSize:12,

  },
  bottomRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: Colors.waterBlue
  },
  textWithIcon: {
    marginLeft: 5
  }
});
