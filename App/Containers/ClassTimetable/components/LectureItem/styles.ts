import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  leftContainer: {
    alignItems: 'center'
  },
  dayText: {
    ...Fonts.style.medium,
    color: Colors.primary
  },
  date: {
    ...Fonts.style.description,
    color: Colors.black
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginLeft: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight:10
  },
  dottedLine: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 1,
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 1
  },
  infoEntryContainer: {
    flexDirection: 'row',
    marginVertical: 3
  },
  infoLeftContainer: {},
  infoRightContainer: {
    flex: 1
  },
  infoEntryLabel: {
    flexDirection: 'row',
    paddingRight: 20
  },
  key: {
    fontSize:13,
    left: 10
  },
  valueContainer: { flex: 1 },
  value: {
    fontSize:13,
    color: Colors.black,
    marginRight:80
    
  }
});
