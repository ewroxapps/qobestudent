import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import Errormodal from '../../../../Assets/SVGs/Errormodal';
import WhiteCross from '../../../../Assets/SVGs/WhiteCross';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { errorModalProps } from './types';
const ErrorModal = (props: errorModalProps) => {
  const { dynamicDictionary, selectedDirection } = useLanguage();
  return (
    <Modal
      isVisible={props.modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.7}
      onBackButtonPress={() => props.setModalVisible(false)}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[selectedDirection === 'left' ? styles.cross : { left: -130 }]}
          onPress={() => {
            props.setModalVisible(!props.modalVisible);
          }}>
          <WhiteCross width={18} height={18} />
        </TouchableOpacity>
        {selectedDirection === 'left' ? (
          <View style={styles.errorSvg}>
            <Errormodal />
            <Text style={styles.whiteTxt}>!</Text>
            <Text style={styles.whiteTxt2}>
              {findWord(dynamicDictionary, props.errorHeader)
                ? findWord(dynamicDictionary, props.errorHeader)
                : props.errorHeader}
            </Text>
          </View>
        ) : (
          <View style={styles.errorSvg}>
            <Text style={styles.whiteTxt2}>
              {findWord(dynamicDictionary, props.errorHeader)
                ? findWord(dynamicDictionary, props.errorHeader)
                : props.errorHeader}
            </Text>
            <Errormodal />
            <Text style={styles.whiteTxt}>!</Text>
          </View>
        )}

        <Text style={styles.whiteTxt1}>
          {' '}
          {findWord(dynamicDictionary, props.errorText)
            ? findWord(dynamicDictionary, props.errorText)
            : props.errorText}
        </Text>
      </View>
    </Modal>
  );
};

export default ErrorModal;
