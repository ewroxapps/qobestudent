import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import TimeUp from '../../../../Assets/SVGs/TimeUp';
import { useQuizSubmitMutation } from '../../../../RTK/Api/CourseApi';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { submissionProps } from './types';
const SubmissionModal = (props: submissionProps) => {
  const navigation = useNavigation();
  const [quizSubmit, { isLoading, data }] = useQuizSubmitMutation();
  const { dynamicDictionary } = useLanguage();

 

  useEffect(()=>{
    if (!isLoading && data != undefined) {
      if (data.sucess) {
        var message = 'Quiz submitted successfully';
        var convertMessage = findWord(dynamicDictionary, message)
          ? findWord(dynamicDictionary, message)
          : message;
        ToastAndroid.show(convertMessage ?? message, ToastAndroid.SHORT);
        props.setModalVisible(false)
        navigation.goBack()
      } else {
        var message = 'You have already submitted quiz!';
        var convertMessage = findWord(dynamicDictionary, message)
          ? findWord(dynamicDictionary, message)
          : message;
        ToastAndroid.show(convertMessage ?? message, ToastAndroid.SHORT);
      }
    }
  },[isLoading,data])

  return (
    <Modal
      style={{ alignItems: 'center' }}
      isVisible={props.modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.7}>
      <View style={styles.container}>
        <TimeUp />
        <Text style={styles.whiteTxt}>
          {findWord(dynamicDictionary, props.headerText) ?? props.headerText}
        </Text>
        {props.headerText != 'Quiz time has ended' ? (
          <Text style={styles.whiteTxtcustom}>
            {findWord(dynamicDictionary, 'Submit your quiz') ??
              'Submit your quiz'}
          </Text>
        ) : null}
      </View>

      {props.headerText != 'Quiz time has ended' ? (
        <TouchableOpacity
          style={styles.container2}
          onPress={() => {
            quizSubmit({ id: props.quizID });
          }}>
          <Text style={[styles.whiteTxtcustom, { marginTop: 0 }]}>
            {findWord(dynamicDictionary, 'Submit') ?? 'Submit'}
          </Text>
        </TouchableOpacity>
      ) : null}
    </Modal>
  );
};

export default SubmissionModal;
