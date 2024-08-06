import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import CustomRadioButton from '../CustomRadioButton';
import styles from './styles';
import { radioProps } from './types';
const RadioButtonFunction = (props: radioProps) => {
  const choices = props.data?.quizDetail[props.pageCount]?.choices;
  const answer = props.data.quizDetail[props.pageCount].answer;
  function radioB(choice: string, answer: string[]) {
    return answer.includes(choice);
  }

  const { dynamicDictionary, selectedDirection } = useLanguage();
  useEffect(() => {
    const matchingChoice = choices?.find(choice => radioB(choice, answer));
    if (matchingChoice) {
      props.setValue(matchingChoice)
    }
  }, [choices, answer,props.data])

  const handleRadioButtonChange = (newValue: string) => {
    if (props.data?.quizDetail[props.pageCount].answer.length != 0) {
      props.setMyErrorModal(!props.myErrorModal)
      props.setErrorMessage(
        findWord(
          dynamicDictionary,
          'Please press edit to choose a different option.'
        ) ?? 'Please press edit to choose a different option.'
      );
      props.setErrorMessageHeader(
        findWord(dynamicDictionary, 'Error editing your answer') ??
          'Error editing your answer'
      );
    } else {
      props.setValue(newValue);
    }
  };

  return <View
  style={styles.container}>
  {choices?.map((item, index) => (
      <CustomRadioButton
        key={index}
        label={item}
        selected={props.value === item}
        onSelect={handleRadioButtonChange}
        disabled={radioB(item, answer)} 
      />
    ))}
</View>
};

export default RadioButtonFunction;
