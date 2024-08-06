import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import WhiteCross from '../../../../Assets/SVGs/WhiteCross';
import { BASE_URL } from '../../../../Config/Api';
import styles from './styles';
import { imageProps } from './types';

const ImageModal = (props: imageProps) => {
  return (
    <Modal
      isVisible={props.modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.7}
      onBackButtonPress={() => props.setModalVisible(false)}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            props.setModalVisible(!props.modalVisible);
          }}>
          <WhiteCross style={styles.cross} />
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={{
            uri: BASE_URL + props.url
          }}
          resizeMode='center'
        />
      </View>
    </Modal>
  );
};

export default ImageModal;
