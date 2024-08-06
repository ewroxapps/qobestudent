import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { BASE_URL } from '../../../../Config/Api';
import { useUniversitylistQuery } from '../../../../RTK/Api/CourseApi';
import { Images } from '../../../../Themes';
import { useLanguage } from '../../../../Types/LanguageContext';
import styles from './styles';
import { uniProps } from './types';

const UniModal = (props: uniProps) => {

  const {
    data,
    refetch,
    isFetching: langFetch,
    isLoading: langLoad
  } = useUniversitylistQuery({});

  const screenHeight = Dimensions.get('window').height;
  const { dynamicDictionary, selectedDirection } = useLanguage();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleUniversitySelection = (selectedUniversity: University) => {
  
    props.setUniversity(selectedUniversity);
    props.setModalVisible(false);
    AsyncStorage.setItem('university', JSON.stringify(selectedUniversity))
      .then(() => console.log('University stored successfully'))
      .catch(error => console.error('Error storing university:', error));
  };

  return (
    <Modal
    isVisible={props.modalVisible}
    hasBackdrop={false}
    backdropOpacity={0.7}
    onBackButtonPress={() => props.setModalVisible(!props.modalVisible)}>
    <View style={styles.container}>
      <TouchableOpacity
        style={!dropdownVisible? styles.dropdown : styles.dropdownclick}
        onPress={() => setDropdownVisible(!dropdownVisible)}>
        <Text style={styles.dropdownText}>
          {props.university?.name ? data?.find((uni: University) => uni.name === props.university?.name) : 'Select your university...'}
        </Text>
      </TouchableOpacity>
      {dropdownVisible && (
        <ScrollView style={[!dropdownVisible?styles.dropdownList:styles.dropdownListOpen,  { maxHeight: screenHeight/1.4,}]}>
          {data?.map((uni: University) => (
            <TouchableOpacity
              key={uni.uuid}
              style={styles.dropdownItem}
              onPress={() => handleUniversitySelection(uni)}>
                {uni?.logo != undefined ?(
                  <Image
                    style={styles.logo}
                 source={{ uri: `${BASE_URL}${uni?.logo}` }}
                />
                ):(
                  <Image
                    style={styles.logo}
                 source={Images.profilePlaceholder}
                />
                )

                }
              <Text style={styles.dropdownItemText}>{uni?.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    
      
     
    </View>
  </Modal>

  );
};

export default UniModal;
