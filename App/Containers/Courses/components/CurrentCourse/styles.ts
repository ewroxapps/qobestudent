import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    marginHorizontal: 2,
    marginVertical: 3,
    paddingTop: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    backgroundColor:Colors.backgroundWhite,
    elevation:3,
    marginBottom:10
    
  },
  topContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5
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
    ...Fonts.style.small,
    color: Colors.textBlack
  },
  classLabel: {
    ...Fonts.style.description,
    fontWeight: '700'
  },
  instructorName: {
    ...Fonts.style.description
  },
  viewDetailsButton: {
    backgroundColor: Colors.backgroundGrey,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 9,
    marginTop: 7,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10
  },
  viewDetailsText: {
    ...Fonts.style.medium
  }
});
