import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import BlueAttach from '../../../../Assets/SVGs/BlueAttach';
import { BASE_URL } from '../../../../Config/Api';
import styles from './styles';
import { CourseDetailsModalProps } from './types';
const ImageActionActivity = (props: CourseDetailsModalProps) => {
  const url = props.url;
  const navigation2 = useNavigation<ICoursesNavigationProp>();
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View>
    <TouchableOpacity
      style={styles.container}
      onPress={() =>{
        setModalVisible(true);
      }}>
        <Text style={styles.textsize}>Image {props.index + 1}</Text>
        <BlueAttach width={16} height={16}/>     
    </TouchableOpacity>

      <Modal visible={modalVisible} onRequestClose={closeModal}>
        <ImageViewer
          imageUrls={[{ url: `${BASE_URL}${url}` }]}
          onCancel={closeModal}
          enableSwipeDown={true}
        />
      </Modal>
    </View>
  );
};

export default ImageActionActivity;
