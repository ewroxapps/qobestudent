import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Submitted from '../../../../Assets/SVGs/Submitted';
import { VectorIcons } from '../../../../Components';
import { ICON_TYPES } from '../../../../Components/VectorIcons/VectorIcons';
import { Colors } from '../../../../Themes';
import { useLanguage } from '../../../../Types/LanguageContext';
import {
  convertNumberToArabic,
  findWord
} from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { questioncountProps } from './types';
const QuestionCount = (props: questioncountProps) => {
  const { dynamicDictionary, selectedDirection } = useLanguage();
  const handleMultipleChoiceDecrement = () => {
    const choices = props.data?.quizDetail[props.pageCount - 1]?.choices;
    const answer = props.data?.quizDetail[props.pageCount - 1]?.answer;

    if (choices && Array.isArray(answer) && answer.length > 0) {
      const answerArray = answer.flatMap(choice => choice.split(','));

      // Use the previous state updater function provided by useState
      props.SetSelectedCheckboxes(prevSelectedCheckboxes => {
        const newSelectedCheckboxes = { ...prevSelectedCheckboxes };

        choices.forEach(choice => {
          newSelectedCheckboxes[choice] = answerArray.includes(choice);
        });

        return newSelectedCheckboxes;
      });
    }
  };

  const handleMultipleChoiceIncrement = () => {
    const choices = props.data?.quizDetail[props.pageCount + 1]?.choices;
    const answer = props.data?.quizDetail[props.pageCount + 1]?.answer;

    if (choices && Array.isArray(answer) && answer.length > 0) {
      const answerArray = answer.flatMap(choice => choice.split(','));

      // Use the previous state updater function provided by useState
      props.SetSelectedCheckboxes(prevSelectedCheckboxes => {
        const newSelectedCheckboxes = { ...prevSelectedCheckboxes };

        choices.forEach(choice => {
          newSelectedCheckboxes[choice] = answerArray.includes(choice);
        });

        return newSelectedCheckboxes;
      });
    }
  };
  function decrement() {
    props.refetch();
    if (props.isSuccess === true) {
      if (props.pageCount > 0) {
        props.setPageCount(props.pageCount - 1);
        props.setSaveButton(
          props.data.quizDetail[props.pageCount - 1].answer.length === 0
            ? true
            : false
        );

        props.setRadioValue(
          props.data?.quizDetail[props.pageCount - 1].type === 'R' &&
            JSON.stringify(props.data?.quizDetail[props.pageCount - 1].answer)
              .length > 0
            ? JSON.stringify(props.data?.quizDetail[props.pageCount - 1].answer)
            : ''
        );

        props.setTextValue(
          props.data?.quizDetail[props.pageCount - 1].type === 'T' &&
            props.data?.quizDetail[props.pageCount - 1].answer != undefined &&
            props.data?.quizDetail[props.pageCount - 1].answer.length > 0
            ? JSON.stringify(props.data?.quizDetail[props.pageCount - 1].answer)
            : ''
        );

        handleMultipleChoiceDecrement();
        props.setEditButton(
          props.data.quizDetail[props.pageCount - 1].answer.length > 0
            ? true
            : false
        );
      }
      props.refetch();
    } else {
      props.setSubmission(!props.submission);
    }
  }

  function increment() {
    if (props.isSuccess === true) {
      if (props.totalCount != undefined && props.pageCount < props.totalCount) {
        props.setPageCount(props.pageCount + 1);
        props.setSaveButton(
          props.data.quizDetail[props.pageCount + 1].answer.length === 0
            ? true
            : false
        );

        props.setRadioValue(
          props.data?.quizDetail[props.pageCount + 1].type === 'R' &&
            JSON.stringify(props.data?.quizDetail[props.pageCount + 1].answer)
              .length > 0
            ? JSON.stringify(props.data?.quizDetail[props.pageCount + 1].answer)
            : ''
        );

        props.setTextValue(
          props.data?.quizDetail[props.pageCount + 1].type === 'T' &&
            props.data?.quizDetail[props.pageCount + 1].answer != undefined &&
            props.data?.quizDetail[props.pageCount + 1].answer.length > 0
            ? JSON.stringify(props.data?.quizDetail[props.pageCount + 1].answer)
            : ''
        );

        handleMultipleChoiceIncrement();

        props.setEditButton(
          props.data.quizDetail[props.pageCount + 1].answer.length > 0
            ? true
            : false
        );
      }

      props.refetch();
    } else {
      props.setSubmission(!props.submission);
    }
  }
  return (
    <View style={styles.container}>
      {props.pageCount != 0 ? (
        <View>
          <TouchableOpacity
            style={{ flexDirection: 'row' }}
            onPress={() => {
              props.refetch();
              decrement();
            }}>
            <VectorIcons
              name="left"
              size={18}
              color={Colors.backgroundWhite}
              iconType={ICON_TYPES.AntDesign}
            />
            <Text style={styles.whitetxt}>
              {findWord(dynamicDictionary, 'Back') ?? 'Back'}
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <Text style={props.pageCount != 0 ? styles.whitetxt : styles.anotherTxt}>
        {findWord(dynamicDictionary, 'Question') ?? 'Question'}{' '}
        {convertNumberToArabic(dynamicDictionary, props.pageCount + 1) ??
          props.pageCount + 1}
        /{' '}
        {convertNumberToArabic(dynamicDictionary, props.totalCount) ??
          props.totalCount}{' '}
      </Text>
      {props.totalCount != undefined &&
      props.pageCount + 1 != props.totalCount ? (
        <View>
          <TouchableOpacity
            style={{ flexDirection: 'row' }}
            onPress={() => {
              props.refetch();
              increment();
            }}>
            <Text style={styles.whitetxt}>
              {findWord(dynamicDictionary, 'Next') ?? 'Next'}
            </Text>
            <VectorIcons
              name="right"
              size={18}
              color={Colors.backgroundWhite}
              iconType={ICON_TYPES.AntDesign}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => {
            props.setSubmission(!props.submission);
          }}>
          <Submitted />
        </TouchableOpacity>
      )}

      
    </View>
  );
};

export default QuestionCount;
