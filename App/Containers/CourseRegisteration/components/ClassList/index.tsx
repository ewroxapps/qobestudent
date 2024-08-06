import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../../Themes';
import styles from './styles';
import { classListProps } from './types';
const ClassList = (props: classListProps) => {
  useEffect(() => {
    if (props.checkpoint != null) {
      const classroom = {
        courseId: props.courseID,
        classroom: props.data
      };
      props.setSelectedRadioButtons(prevCheck => {
        if (!prevCheck.some(item => item.courseId === props.courseID)) {
          return [...prevCheck, classroom];
        }
        return prevCheck;
      });
    }
  }, [
    props.data
  ]);


  const addClassroom = (xclass: MyClassroom) => {
    props.setSelectedRadioButtons(prevSelectedCheckboxes => {
      const isItemSelected = prevSelectedCheckboxes.some(
        classroom => classroom.courseId === xclass.courseId && classroom.classroom.id === xclass.classroom.id
      );
  
      if (isItemSelected) {
        // If the selected item is already selected, remove it
        return prevSelectedCheckboxes.filter(
          classroom => !(classroom.courseId === xclass.courseId && classroom.classroom.id === xclass.classroom.id)
        );
      } else {
        return [
          ...prevSelectedCheckboxes.filter(classroom => classroom.courseId !== xclass.courseId),
          xclass
        ];
      }
    });
  };
  
  
  
  return (
    <TouchableOpacity
      style={styles.radioButton}
      onPress={() => {
        if(!props.singlePick){
          props.toggleRadioValue();

          const classroom = {
            courseId: props.courseID,
            classroom: props.data
          };
          addClassroom(classroom);
        }
      
      }}>
      <View
        style={[
          styles.radioCircle,
          {
            backgroundColor: props.selected
              ? Colors.quizBlue
              : Colors.backgroundWhite
          }
        ]}>
        {props.selected && <View style={styles.selectedRadioInnerCircle} />}
      </View>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.Nolabel}>Teacher:</Text>
          <Text style={styles.label}>{props.data?.teacher}</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.Nolabel}>Timing:</Text>
          <Text style={styles.label}>{props.data?.timing}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.Nolabel}>Section:</Text>
          <Text style={styles.label}>{props.data?.section}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ClassList;
