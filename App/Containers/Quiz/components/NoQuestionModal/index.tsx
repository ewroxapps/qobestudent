import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import GreyBack from '../../../../Assets/SVGs/GreyBack';
import styles from './styles';
import { errorModalProps } from './types';
const NoQuestionModal = (props: errorModalProps) => {
  const Endnavigation = useNavigation();
  return (
    <Modal
    isVisible={props.modalVisible}
    hasBackdrop={true}
    backdropOpacity={0.7}
    onBackButtonPress={() => props.setModalVisible(false)}>
    <View style={styles.container}>
      <GreyBack width={70} height={70} />
      <Text style={styles.textStyle}>
        No questions found in this quiz. Please try again later, or contact you instructor.
      </Text>
      <View style={styles.buttonView}>

        <TouchableOpacity style={styles.quitButton}  onPress={() => {
            Endnavigation.goBack()
          }}>
          <Text style={styles.whiteTxt}>Okay</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
  );
};

export default NoQuestionModal;
