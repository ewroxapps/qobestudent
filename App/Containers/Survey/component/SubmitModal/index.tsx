import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { useSubmitSurveyMutation } from '../../../../RTK/Api/CourseApi';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { submissionProps } from './types';
const SubmitModal = (props: submissionProps) => {
  const { dynamicDictionary, selectedDirection } = useLanguage();
  const navigationBack = useNavigation<IHomeNavigationProp>();
  const [submit, { data }] = useSubmitSurveyMutation();

  const onSubmitPress = () => {
    submit({
      code: props.code,
      answerForEveryItemFromArry: props.answers,
      arraySize: props.totalQuestion,
      questionId: props.questionId
    });
  };

  if (data != undefined) {
    if (data.success) {
      var message = 'Survey submitted successfully';
      var convertMessage = findWord(dynamicDictionary, message)
        ? findWord(dynamicDictionary, message)
        : message;
      ToastAndroid.show(convertMessage ?? message, ToastAndroid.SHORT);
      props.refetch();
      navigationBack.goBack();
      props.setModalVisible(!props.modalVisible);
    } else {
      var message = 'Please try again later';
      var convertMessage = findWord(dynamicDictionary, message)
        ? findWord(dynamicDictionary, message)
        : message;
      ToastAndroid.show(convertMessage ?? message, ToastAndroid.SHORT);
      props.refetch();
      props.setModalVisible(!props.modalVisible);
    }
  }
  return (
    <Modal
      style={{ alignItems: 'center' }}
      isVisible={props.modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.7}>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          {findWord(
            dynamicDictionary,
            'Are you sure you want to submit your survey?'
          )
            ? findWord(
                dynamicDictionary,
                'Are you sure you want to submit your survey?'
              )
            : 'Are you sure you want to submit your survey?'}
        </Text>
        <View style={styles.justify}>
          <TouchableOpacity
            onPress={() => {
              onSubmitPress();
            }}
            style={[
              styles.containerButton,
              {
                backgroundColor: '#14B8A6'
              }
            ]}>
            <Text style={[styles.text, { color: 'white' }]}>
              {findWord(dynamicDictionary, 'Submit')
                ? findWord(dynamicDictionary, 'Submit')
                : 'Submit'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.containerButton,
              {
                borderColor: '#14B8A6',
                borderWidth: 1
              }
            ]}
            onPress={() => {
              props.setModalVisible(!props.modalVisible);
            }}>
            <Text style={[styles.text, { color: 'black' }]}>
              {findWord(dynamicDictionary, 'Cancel')
                ? findWord(dynamicDictionary, 'Cancel')
                : 'Cancel'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SubmitModal;
