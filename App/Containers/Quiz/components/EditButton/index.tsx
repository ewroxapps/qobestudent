import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useQuizAnswerMutation } from '../../../../RTK/Api/CourseApi';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { editProps } from './types';
const EditButton = (props: editProps) => {
  const [quizAnswer,] = useQuizAnswerMutation();
  const { dynamicDictionary, selectedDirection } = useLanguage();
  const editRadio = () => {
    quizAnswer({
      id: props.id,
      qid: props.qid,
      answer: ' ',
      ans_img:
        '/images/questions/196/63a873a246ea7f70fde87a4e7da66af4f3e971c244460.jpg'
    });
  };


  const resetSelectedCheckboxes = () => {
    const choices = props.data?.quizDetail[props.pageCount]?.choices;
    if (choices) {
      // Create an object with all choices set to false
      const newSelectedCheckboxes: { [label: string]: boolean } = {};
      choices.forEach(choice => {
        newSelectedCheckboxes[choice] = false;
      });

      // Update the state using the updater function
      props.SetSelectedCheckboxes(prevState => ({
        ...prevState,
        ...newSelectedCheckboxes
      }));
    }
  };

  return (
    <View style={styles.viewContainer}>
      
      <View style={{ flexDirection: 'row', marginLeft:10,top:6 }}>
        {selectedDirection === 'left' ?(
          <View style={styles.greenCircle}>
          <Text style={styles.tick}>✓</Text>
        </View>
        ):null

        }
        
        <Text style={styles.selectedText}>
          {findWord(dynamicDictionary, 'Saved')
            ? findWord(dynamicDictionary, 'Saved')
            : 'Saved'}
        </Text>

        {selectedDirection != 'left' ?(
          <View style={styles.greenCircle}>
          <Text style={styles.tick}>✓</Text>
        </View>
        ):null

        }
      </View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          props.refetch();
          if (props.isSuccess) {
            if (props.data.quizDetail[props.pageCount].type === 'R') {
   
              editRadio();
              props.setValue(' ');
            
            }

            if (props.data.quizDetail[props.pageCount].type === 'M') {
              editRadio();
              resetSelectedCheckboxes();
            }

            if (props.data.quizDetail[props.pageCount].type === 'T') {
              editRadio();
              props.setTextValue('');
            }

            props.refetch();
            props.setSaveButton(!props.saveButton);
            props.setEditButton(!props.editButton);
          } else {
            props.setSubmission(!props.submission);
          }
        }}>
        <Text style={styles.textStyle}>
          {findWord(dynamicDictionary, 'Edit') ?? 'Edit'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditButton;
