import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useQuizAnswerMutation } from '../../../../RTK/Api/CourseApi';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { saveButton } from './types';
const SaveButton = (props: saveButton) => {
  const [quizAnswer] = useQuizAnswerMutation();
  const { dynamicDictionary, selectedDirection } = useLanguage();
  function saveAnswer(value: string) {
    quizAnswer({
      id: props.id,
      qid: props.qid,
      answer: value,
      ans_img:
        '/images/questions/196/63a873a246ea7f70fde87a4e7da66af4f3e971c244460.jpg'
    });
  }
  const saveRadio = () => {
    if (props.radioValue.length === 2) {
      props.setMyErrorModal(!props.myErrorModal);
      props.setErrorMessage(
        findWord(
          dynamicDictionary,
          'Please select an option to save your answer'
        ) ?? 'Please select an option to save your answer'
      );
      props.setErrorMessageHeader(
        findWord(dynamicDictionary, 'Error Saving Your Answer') ??
          'Error Saving Your Answer'
      );
    } else {
      saveAnswer(props.radioValue);
      props.refetch();
      props.setSaveButton(!props.saveButton);
      props.setEditButton(!props.editButton);
    }
  };

  const saveMultiple = () => {
    const allunSelected = Object.values(props.selectedCheckboxes).every(
      value => value === false
    );

    if (allunSelected) {
      props.setMyErrorModal(!props.myErrorModal);
      props.setErrorMessage(
        findWord(
          dynamicDictionary,
          'Please select an option to save your answer'
        ) ?? 'Please select an option to save your answer'
      );
      props.setErrorMessageHeader(
        findWord(dynamicDictionary, 'Error Saving Your Answer') ??
          'Error Saving Your Answer'
      );
    } else {
      const trueValues = Object.keys(props.selectedCheckboxes).filter(
        key => props.selectedCheckboxes[key] === true
      );

      const selectedOptionsString = trueValues.join(', ');
      saveAnswer(selectedOptionsString);
      props.refetch();
      props.setSaveButton(!props.saveButton);
      props.setEditButton(!props.editButton);
    }
  };

  const saveText = () => {
    if (props.textValue.length === 0) {
      props.setMyErrorModal(!props.myErrorModal);
      props.setErrorMessage(
        findWord(
          dynamicDictionary,
          'Please write something to save your answer.'
        ) ?? 'Please write something to save your answer.'
      );
      props.setErrorMessageHeader(
        findWord(dynamicDictionary, 'Error Saving Your Answer') ??
          'Error Saving Your Answer'
      );
    } else {
      let inputText;

      if (typeof props.textValue === 'string') {
        inputText = props.textValue; // textValue is already a string
      } else if (Array.isArray(props.textValue)) {
        inputText = props.textValue.join(', '); // Join the array elements with a comma and space
      } else {
        inputText = ''; // Handle other cases as needed
      }

      console.debug(inputText);
      saveAnswer(inputText);
      props.refetch();
      props.setSaveButton(!props.saveButton);
      props.setEditButton(!props.editButton);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.refetch();
        if (props.isSuccess) {
          if (props.data.quizDetail[props.pageCount].type === 'R') {
            saveRadio();
          }
          if (props.data.quizDetail[props.pageCount].type === 'M') {
            saveMultiple();
          }
          if (props.data.quizDetail[props.pageCount].type === 'T') {
            saveText();
          }
        } else {
          props.setSubmission(!props.submission);
        }
      }}>
      <Text style={styles.textStyle}>{findWord(dynamicDictionary,'Save')??'Save'}</Text>
    </TouchableOpacity>
  );
};

export default SaveButton;
