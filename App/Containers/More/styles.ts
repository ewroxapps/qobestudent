import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  aboutContainer: {
    // position: 'absolute'
  },
  topContainer: {
    padding: 20,
    backgroundColor: Colors.lightBlue
  },
  logo: {
    width: 200
  },
  aboutQobeHeading: {
    ...Fonts.style.description,
    fontWeight: '700',
    color: Colors.darkBlue
  },
  aboutQobeText: {
    ...Fonts.style.description,
    color: Colors.darkBlue
  },
  logosContainer: {
    paddingVertical: 15,
    backgroundColor: Colors.waterBlue
  },
  allRightsContainer: {
    backgroundColor: Colors.backgroundWhite
  }
});
