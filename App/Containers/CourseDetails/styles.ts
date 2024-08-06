import { StyleSheet } from 'react-native';
import { Fonts } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    // Add any other styles specific to your list container
  },
  studentCourseContainer: {
    marginTop: -40,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation:4
  },
  list: {
    flex: 1,
    marginTop: 10,
    paddingBottom: 20
  },
  listItemContainer: {
    paddingHorizontal: 10
  },
  listHeading: {
    ...Fonts.style.h5,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom:5
  },


  listHeading2: {
    ...Fonts.style.normal,
    marginLeft:10,
    marginRight:10
   
  },

  noResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  }
});
