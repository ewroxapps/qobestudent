import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useLanguage } from '../../../../Types/LanguageContext';
import CourseList from '../CourseList';
import styles from './styles';
import { semesterProps } from './types';
const SemesterNumber = (props: semesterProps) => {
  const { dynamicDictionary, selectedDirection,courseRegSingleChoice } = useLanguage();
  const [selectedClassrooms, setSelectedClassrooms] = useState<{
    [courseId: number]: number | null;
  }>(() => {
    const selectedClassrooms: { [courseId: number]: number | null } = {};

    if (props.courseId[props.semester]) {
      props.courseId[props.semester].forEach((course: Course) => {
        if (course.course_selected === '1') {
          selectedClassrooms[course.course_id] = course.course_id;
        } else {
          selectedClassrooms[course.course_id] = null;
        }
      });
    }

    return selectedClassrooms;
  });


  const handleCheckboxChange = (courseId: number,course:Course) => {
    
    setSelectedClassrooms((prevSelectedClassrooms) => {
      const updatedSelectedClassrooms = { ...prevSelectedClassrooms };
      if (updatedSelectedClassrooms[courseId] === null) {
        updatedSelectedClassrooms[courseId] = courseId;
      } else {
          updatedSelectedClassrooms[courseId] = null;
         
      } 
      return updatedSelectedClassrooms;
    });
  };

  const filteredCourses = props.courseId[props.semester].filter(
    (course: Course) => course.course_selected === '1'
  );
  

  return (
    <View style={styles.container}>
      <Text style={[styles.textcolorWhite,selectedDirection != 'left' ?{
          alignSelf:'flex-end'
      }:{}]}>{props.semester}</Text>
      <FlatList
        data={props.singlePick === true ? filteredCourses : props.courseId[props.semester]}
        keyExtractor={(item, index) => {
          const key = item.course_id.toString();
          return key;
        }}
        renderItem={({ item, index }) => (
          <CourseList
            data={item}
            registerationId={props.registerationId}
            reg={props.reg}
            setReg={props.setReg}
            unReg={props.unReg}
            setUnReg={props.setUnReg}
            handleCheckboxChange={handleCheckboxChange}
            selectedCheckboxes={selectedClassrooms[item.course_id]}
            check={props.check}
            setCheck={props.setCheck}
            selectedRadioButtons={props.selectedRadioButtons}
            setSelectedRadioButtons={props.setSelectedRadioButtons}
            uncheck={props.uncheck}
            setUnCheck={props.setUnCheck}
            singlePick={props.singlePick}
          />
        )}
      />
    </View>
  );
};

export default SemesterNumber;
