import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import GreyBack from '../../../../Assets/SVGs/GreyBack';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { backModalProps } from './types';
const BackModal = (props: backModalProps) => {
  const Endnavigation = useNavigation();
  const { dynamicDictionary, selectedDirection } = useLanguage();
  return (
    <Modal
      isVisible={props.modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.7}
      onBackButtonPress={() => props.setModalVisible(false)}>
      <View style={styles.container}>
        
        <GreyBack width={70} height={70} />
        <Text style={styles.textStyle}>
          {findWord(
            dynamicDictionary,
            'Are you sure you want to quit this quiz?'
          ) ?? 'Are you sure you want to quit this quiz?'}
        </Text>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => {
              props.setModalVisible(!props.modalVisible);
            }}>
            <Text style={styles.whiteTxt}>
              {findWord(dynamicDictionary, 'Cancel') ?? 'Cancel'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quitButton}
            onPress={() => {
              Endnavigation.goBack();
            }}>
            <Text style={styles.whiteTxt}>
              {findWord(dynamicDictionary, 'Quit') ?? 'Quit'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default BackModal;
