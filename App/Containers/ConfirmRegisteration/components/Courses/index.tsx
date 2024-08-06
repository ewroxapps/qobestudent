import React from 'react';
import { FlatList, Text, View } from 'react-native';
import colors from '../../../../Themes/Colors';
import ClassList from '../Classroom';
import styles from './styles';
import { courseListProps } from './types';
const Course = (props: courseListProps) => {

  const containerStyles = [
    styles.container,
    props.selectedCheckboxes != null ? styles.checkContainer : null,
    props.data?.disabled ? styles.disabledContainer : null
  ];

  var coursename, courseCrd, courseMandatory, courseImprove;
  const [courseCode, courseName] = props.data?.label.split(' - ');
  if (courseName != undefined) {
    const name = courseName.substring(0, courseName.indexOf('[') - 1);
    coursename = name;
    const parts = courseName
      .substring(courseName.indexOf('[') + 1, courseName.lastIndexOf(']'))
      .split('] [');

    if (parts[0] != undefined) {
      courseCrd = parts[0];
      if (parts[1] != undefined) {
        courseMandatory = parts[1];
      }
      if (parts[2] != undefined) {
        courseImprove = parts[2];
      }
    }
  }

  return (
    <View>
      <View
        style={containerStyles}>
        <Text style={styles.coureseTitle}>{coursename}</Text>
        <View style={styles.courseDetailView}>
          <View style={styles.rowView}>
            <Text style={styles.type}>Course Code: </Text>
            <Text style={styles.explain}>{courseCode}</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.type}>Credit Hour: </Text>
            <Text style={styles.explain}>{courseCrd}</Text>
          </View>
          {props.selectedCheckboxes != null ? (
            <FlatList
              data={props.data?.classrooms}
              keyExtractor={(item, index) => {
                const key = item.id.toString();
                return key;
              }}
              renderItem={({ item, index }) => (
                <ClassList
                  data={item}
                  classroom={props.classroom}
                />
              )}
            />
          ) : null}
        </View>

        <View style={styles.justifyView}>
          <View style={[styles.innerView, { justifyContent: 'space-between' }]}>
            {courseMandatory?.includes('Mandatory') ? (
              <View style={styles.mandatoryView}>
                <Text style={styles.whiteText}>Mandatory</Text>
              </View>
            ) : null}

            {courseImprove?.includes('IMPROVE') ? (
              <View style={styles.improveView}>
                <Text style={styles.whiteText}>Improvee</Text>
              </View>
            ) : null}
          </View>

          <View style={[styles.innerView, { justifyContent: 'flex-end' }]}>
            {props.selectedCheckboxes != null ? (
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.selectedText}>Selected</Text>
                <View
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: colors.quizBlue,
                    borderWidth: 0.8,
                    borderColor: colors.quizBlue,
                    marginTop: 6,
                    marginLeft: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                  <Text style={styles.tick}>✓</Text>
                </View>
              </View>
            ) : (
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.selectText}>Select</Text>
                <View
                  style={{
                    width: 12,
                    height: 12,
                    borderWidth: 0.8,
                    borderColor:
                      props.selectedCheckboxes != null
                        ? colors.quizBlue
                        : 'black',
                    marginTop: 6,
                    marginLeft: 6
                  }}
                />
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Course;
