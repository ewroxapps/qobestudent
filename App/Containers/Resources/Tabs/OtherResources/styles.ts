import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite
  },
  attachmentsHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: Colors.background,
    paddingHorizontal: 15,
    paddingVertical: 8
  },
  detailLabel: {
    ...Fonts.style.medium,
    color: Colors.textBlack
  },
  detailValue: {
    ...Fonts.style.medium,
    color: Colors.black
  },
  textWithIcon: {
    marginLeft: 5
  },
  divider: {
    height: 1
  }
});
