import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { BASE_URL } from '../../../../Config/Api';
import { Images } from '../../../../Themes';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { HeaderProps } from './types';
const ComplaintDetail = (props: HeaderProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { selectedDirection, dynamicDictionary } = useLanguage();
  const openImage = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.topHeading}>{findWord(dynamicDictionary,'Complaint Detail')?
    findWord(dynamicDictionary,'Complaint Detail'):'Compalaint Detail'  
    }</Text>
      <View style={styles.justifyView}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.heading}>{findWord(dynamicDictionary,'Department')?
        findWord(dynamicDictionary,'Department'):'Department'  
        }</Text>
          <Text style={styles.detail}>{props.data.dept}</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.heading}>{findWord(dynamicDictionary,'Category')?
        findWord(dynamicDictionary,'Category'):'Category'  
        }</Text>
          <Text style={styles.detail}>{props.data.category}</Text>
        </View>
      </View>

      <View style={styles.justifyView}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.heading}>{findWord(dynamicDictionary,'Allow Chat')?
        findWord(dynamicDictionary,'Allow Chat'):'Allow Chat'  
        }</Text>
          <Text style={styles.detail}>
            {props.data.allowChat ? 'Yes' : 'No'}
          </Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.heading}>{findWord(dynamicDictionary,'Status')?
        findWord(dynamicDictionary,'Status'):'Status'  
        }</Text>
          <Text style={styles.detail}>{props.data.status}</Text>
        </View>
      </View>

      <View style={styles.justifyView}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.heading}>{findWord(dynamicDictionary,'Detail')?
        findWord(dynamicDictionary,'Detail'):'Detail'  
        }</Text>
          <Text style={styles.detail}>{props.data.detail}</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.heading}>{findWord(dynamicDictionary,'Subject')?
        findWord(dynamicDictionary,'Subject'):'Subject'  
        }</Text>
          <Text style={styles.detail}>{props.data.subject}</Text>
        </View>
      </View>
      {props.data?.attachment != '' ? (
        <TouchableOpacity
        onPress={openImage}
          style={styles.attachment}>
          <Text style={styles.heading}>{findWord(dynamicDictionary,'Attachment')?
        findWord(dynamicDictionary,'Attachment'):'Attachment'  
        }</Text>
          <View style={styles.container2}>
            <Image
              source={{
                uri: `${BASE_URL}${props.data.attachment}`
              }}
              defaultSource={Images.profilePlaceholder}
              style={styles.profile}
            />
          </View>
        </TouchableOpacity>
      ) : null}

      <Modal visible={modalVisible} onRequestClose={closeModal}>
        <ImageViewer
          imageUrls={[{ url: `${BASE_URL}${props.data.attachment}` }]}
          onCancel={closeModal}
          enableSwipeDown={true}
        />
      </Modal>
    </View>
  );
};

export default ComplaintDetail;
