import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Backs from '../../../../Assets/SVGs/Backs';
import BackModal from '../BackModal';
import styles from './styles';
import { backprops } from './types';

const BackButton = (props: backprops) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <Backs />
      </TouchableOpacity>
      {modalVisible ? (
        <BackModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      ) : null}
    </View>
  );
};

export default BackButton;
