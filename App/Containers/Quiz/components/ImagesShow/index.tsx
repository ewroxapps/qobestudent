import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { BASE_URL } from '../../../../Config/Api';
import styles from './styles';
import { imageProps } from './types';

const ImageShow = (props: imageProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          props.setModalVisible(!props.modalVisible);
        }}>
      <Image
        style={styles.image}
        source={{
          uri: BASE_URL + props.url
        }}
        resizeMode='center'
      />
      </TouchableOpacity>
    </View>
  );
};

export default ImageShow;
