import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../../../Themes/Colors';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import { ErrorModal } from '../../../Quiz/components';
import ClassList from '../ClassList';
import styles from './styles';
import { courseListProps } from './types';
const CourseList = (props: courseListProps) => {
  const [disabled, setDisabled] = useState(false);
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

  useEffect(() => {
    if (props.data.course_selected === '1') {
      props.setCheck(prevCheck => {
        const updatedCheck = [...prevCheck];
        const indexToUpdate = updatedCheck.findIndex(
          item => item.course_id === props.data.course_id
        );

        if (indexToUpdate === -1) {
          updatedCheck.push(props.data);
        } else {
          updatedCheck[indexToUpdate] = props.data;
        }

        return updatedCheck;
      });

      props.setReg(prevCheck => {
        const updatedCheck = [...prevCheck];

        const existingIndex = props.reg.findIndex(
          course => course.courseID === props.data.course_id
        );

        const courseRegistration = {
          courseRegisteration: props.registerationId,
          courseID: props.data.course_id
        };

        if (existingIndex === -1) {
          updatedCheck.push(courseRegistration);
        } else {
          updatedCheck[existingIndex] = courseRegistration;
        }

        return updatedCheck;
      });
    }
  }, [props.data]);

  const [selectedRadioIndex, setSelectedRadioIndex] = React.useState(
    props.data?.classroom_selected !== null
      ? props.data?.classrooms.findIndex(
          item => item.id === props.data?.classroom_selected
        )
      : -1
  );

  const toggleRadioValue = (index: number) => {
    if (selectedRadioIndex === index) {
      setSelectedRadioIndex(-1);
    } else {
      setSelectedRadioIndex(index);
    }
  };

  const addCourse = (courseToAdd: Course) => {
    props.setCheck(prevSelectedCheckboxes => {
      const indexOfCourse = prevSelectedCheckboxes.find(
        course => course.course_id === courseToAdd.course_id
      );

      if (indexOfCourse !== undefined) {
        const classroomIdsToRemove = courseToAdd.classrooms.map(
          classroom => classroom.id
        );

        if (classroomIdsToRemove.length > 0) {
          const updatedRadioButtons = props.selectedRadioButtons.filter(
            classroom => !classroomIdsToRemove.includes(classroom.classroom.id)
          );

          if (courseToAdd.course_selected != '1') toggleRadioValue(-1);
          props.setSelectedRadioButtons(updatedRadioButtons);

          if (courseToAdd.course_selected === '1') {
            props.setUnCheck(prevUnCheck => [...prevUnCheck, courseToAdd]);
          }
        }
        return prevSelectedCheckboxes.filter(
          course => course.course_id !== courseToAdd.course_id
        );
      } else {
        console.debug('select');
        const classroomIdsToRemove = courseToAdd.classrooms.map(
          classroom => classroom.id
        );
        if (classroomIdsToRemove.length > 0) {
          const updatedRadioButtons = props.selectedRadioButtons.filter(
            classroom => !classroomIdsToRemove.includes(classroom.classroom.id)
          );
          if (courseToAdd.course_selected != '1') toggleRadioValue(-1);
          props.setSelectedRadioButtons(updatedRadioButtons);

          if (courseToAdd.course_selected === '1') {
            props.setUnCheck(prevUnCheck =>
              prevUnCheck.filter(
                course => course.course_id !== courseToAdd.course_id
              )
            );
          }
        }
        return [...prevSelectedCheckboxes, courseToAdd];
      }
    });
  };

  const addReg = (courseToAdd: MyCourseRegistration) => {
    props.setReg(prevSelectedCheckboxes => {
      const indexOfCourse = prevSelectedCheckboxes.find(
        course => course.courseID === courseToAdd.courseID
      );

      if (indexOfCourse !== undefined) {
        if (props.data.course_selected === '1') {
          props.setUnReg(prevUnReg => [...prevUnReg, courseToAdd]);
        }

        return prevSelectedCheckboxes.filter(
          course => course.courseID !== courseToAdd.courseID
        );
      } else {
        if (props.data.course_selected === '1') {
          props.setUnReg(prevUnReg =>
            prevUnReg.filter(course => course.courseID !== courseToAdd.courseID)
          );
        }
        return [...prevSelectedCheckboxes, courseToAdd];
      }
    });
  };
  const { dynamicDictionary, selectedDirection,courseRegSingleChoice } = useLanguage();

  
  return (
    <View>
     
      <TouchableOpacity
        style={containerStyles}
        onPress={() => {
          if(!props.singlePick){
            if (props.data?.disabled) {
              setDisabled(!disabled);
            } else {
              props.handleCheckboxChange(props.data.course_id, props.data);
              addCourse(props.data);
  
              const courseRegistration = {
                courseRegisteration: props.registerationId,
                courseID: props.data.course_id
              };
  
              addReg(courseRegistration);
            }        
          }
         
        }}>
        <Text
          style={[
            styles.coureseTitle,
            selectedDirection != 'left'
              ? {
                  alignSelf: 'flex-end'
                }
              : {}
          ]}>
          {coursename}
        </Text>

        {selectedDirection === 'left' ? (
          <View style={styles.courseDetailView}>
            <View style={styles.rowView}>
              <Text style={styles.type}>
                {findWord(dynamicDictionary, 'Course Code')
                  ? findWord(dynamicDictionary, 'Course Code')
                  : 'Course Code'}
                :{' '}
              </Text>
              <Text style={styles.explain}>{courseCode}</Text>
            </View>
            <View style={styles.rowView}>
              <Text style={styles.type}>
                {findWord(dynamicDictionary, 'Credit Hour')
                  ? findWord(dynamicDictionary, 'Credit Hour')
                  : 'Credit Hour'}
                :{' '}
              </Text>
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
                    courseID={props.data.course_id}
                    data={item}
                    checkpoint={props.data?.classroom_selected}
                    selected={selectedRadioIndex === index}
                    toggleRadioValue={() => toggleRadioValue(index)}
                    selectedRadioButtons={props.selectedRadioButtons}
                    setSelectedRadioButtons={props.setSelectedRadioButtons}
                    singlePick = {props.singlePick}
                  />
                )}
              />
            ) : null}
          </View>
        ) : (
          <View style={[styles.courseDetailView, { alignItems: 'flex-end' }]}>
            <View style={styles.rowView}>
              <Text style={styles.explain}>{courseCode}</Text>
              <Text style={styles.type}>
                {findWord(dynamicDictionary, 'Course Code')
                  ? findWord(dynamicDictionary, 'Course Code')
                  : 'Course Code'}
                :{' '}
              </Text>
            </View>
            <View style={styles.rowView}>
              <Text style={styles.explain}>{courseCrd}</Text>
              <Text style={styles.type}>
                {findWord(dynamicDictionary, 'Credit Hour')
                  ? findWord(dynamicDictionary, 'Credit Hour')
                  : 'Credit Hour'}
                :{' '}
              </Text>
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
                    courseID={props.data.course_id}
                    data={item}
                    checkpoint={props.data?.classroom_selected}
                    selected={selectedRadioIndex === index}
                    toggleRadioValue={() => toggleRadioValue(index)}
                    selectedRadioButtons={props.selectedRadioButtons}
                    setSelectedRadioButtons={props.setSelectedRadioButtons}
                    singlePick={props.singlePick}
                  />
                )}
              />
            ) : null}
          </View>
        )}

        <View style={styles.justifyView}>

        {selectedDirection != 'left' ? (
            <View style={[styles.innerView, { justifyContent: 'flex-start' }]}>
              {props.selectedCheckboxes != null ? (
                <View style={{ flexDirection: 'row' }}>
                 
                  <View
                    style={{
                      width: 12,
                      height: 12,
                      backgroundColor: colors.quizBlue,
                      borderWidth: 0.8,
                      borderColor: colors.quizBlue,
                      marginTop: 6,
                      marginLeft: 5,
                      marginRight:5,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                    <Text style={styles.tick}>✓</Text>
                  </View>
                  <Text style={styles.selectedText}>
                    {findWord(dynamicDictionary, 'Selected')
                      ? findWord(dynamicDictionary, 'Selected')
                      : 'Selected'}
                  </Text>
                </View>
              ) : (
                <View style={{ flexDirection: 'row' }}>
                  
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
                      marginLeft: 6,
                      marginRight:6
                    }}
                  />
                  <Text style={styles.selectText}>
                    {findWord(dynamicDictionary, 'Select')
                      ? findWord(dynamicDictionary, 'Select')
                      : 'Select'}
                  </Text>
                </View>
              )}
            </View>
          ) : null}
          <View style={[styles.innerView, { justifyContent: 'space-between' }]}>
            {courseMandatory?.includes('Mandatory') ? (
              <View style={styles.mandatoryView}>
                <Text style={styles.whiteText}>
                  {findWord(dynamicDictionary, 'Mandatory')
                    ? findWord(dynamicDictionary, 'Mandatory')
                    : 'Mandatory'}
                </Text>
              </View>
            ) : null}

            {courseImprove?.includes('IMPROVE') ? (
              <View style={styles.improveView}>
                <Text style={styles.whiteText}>
                  {findWord(dynamicDictionary, 'Improve')
                    ? findWord(dynamicDictionary, 'Improve')
                    : 'Improve'}
                </Text>
              </View>
            ) : null}
          </View>

          {selectedDirection === 'left' ? (
            <View style={[styles.innerView, { justifyContent: 'flex-end' }]}>
              {props.selectedCheckboxes != null ? (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.selectedText}>
                    {findWord(dynamicDictionary, 'Selected')
                      ? findWord(dynamicDictionary, 'Selected')
                      : 'Selected'}
                  </Text>
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
                  <Text style={styles.selectText}>
                    {findWord(dynamicDictionary, 'Select')
                      ? findWord(dynamicDictionary, 'Select')
                      : 'Select'}
                  </Text>
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
          ) : null}
        </View>
      </TouchableOpacity>
      {disabled ? (
        <ErrorModal
          modalVisible={disabled}
          setModalVisible={setDisabled}
          errorHeader="Sorry for inconvinence"
          errorText="Currently this course is disabled for you."
        />
      ) : null}
    </View>
  );
};

export default CourseList;
