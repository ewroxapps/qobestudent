import React, { useState } from 'react';
import { Image, Modal, TouchableOpacity, View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { BASE_URL } from '../../../../../../Config/Api';
import { Images } from '../../../../../../Themes';
import styles from './styles';
import { ImageProps } from './types';
const Media = (props: ImageProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openImage = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  
  return (
    <View>
      <TouchableOpacity onPress={openImage}>
        <Image
          source={{
            uri: `${BASE_URL}${props.image}`
          }}
          defaultSource={Images.profilePlaceholder}
          style={styles.profile}
        />
      </TouchableOpacity>

      <Modal 
         visible={modalVisible} 
         onRequestClose={closeModal}
         >
        <ImageViewer
          imageUrls={[{ url: `${BASE_URL}${props.image}` }]}
          onCancel={closeModal}
          enableSwipeDown={true}
        />
      </Modal>
    </View>
  );
};

export default Media;
