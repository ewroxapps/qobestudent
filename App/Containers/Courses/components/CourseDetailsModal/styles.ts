import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -20,
    left: -20,
    flex: 1,
    width: Metrics.screenWidth,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingVertical: 10,
    backgroundColor: Colors.backgroundWhite
  },
  topRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headingContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginStart: 90
  },
  heading: {
    ...Fonts.style.normal
  },
  closeButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20
  },
  courseInfoContainer: {
    paddingHorizontal: 10
  },
  infoSectionContainer: {
    flexDirection: 'row'
  },
  infoItemContainer: {
    flex: 1,
    marginBottom: 15
  },
  labelContainer: {
    flex: 1
  },
  valueContainer: {
    flex: 1
  },
  label: {
    ...Fonts.style.description,
    color: Colors.iconGrey,
    marginBottom: 3
  },
  highlightedValue: {
    ...Fonts.style.medium,
    color: Colors.secondary,
  },

  highlightedValue2: {
    ...Fonts.style.medium,
    color: Colors.secondary,
    alignSelf:'flex-end'
  },

  value: {
    ...Fonts.style.medium,
    color: Colors.black,
  },
  value1: {
    ...Fonts.style.medium,
    color: Colors.black,
    alignSelf:'flex-end'
  },
  viewDetailsButton: {
    backgroundColor: Colors.secondary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 5
  },
  buttonText: {
    ...Fonts.style.normal,
    color: Colors.backgroundWhite
  }
});
