import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import Alerts from '../../Assets/SVGs/Alerts';
import AppInfo from '../../Assets/SVGs/AppInfo';
import Contactus from '../../Assets/SVGs/Contactus';
import Transcript from '../../Assets/SVGs/Transcript';
import { useLanguage } from '../../Types/LanguageContext';
import { findWord } from '../../Utils/ParsingUtils';
import styles from './styles';
const MoreModal = () => {
  const navigation = useNavigation();
  const navigation1 = useNavigation<IHomeNavigationProp>();
  const { selectedDirection, dynamicDictionary } = useLanguage();
  return (
    <Modal
      isVisible={true}
      hasBackdrop={true}
      backdropColor="#CBD5E1"
      backdropOpacity={0.7}
      onBackButtonPress={() => {
        navigation.goBack();
      }}>
      <TouchableOpacity
        style={styles.moretopContainer}
        onPress={() => {
          navigation1.navigate('complaint', {});
        }}>
        <View>
          <View style={styles.innerContainer}>
            {selectedDirection === 'left' ? <Alerts width={20} /> : null}
            <Text style={styles.textStyle}>
              {findWord(dynamicDictionary, 'Complaints')
                ? findWord(dynamicDictionary, 'Complaints')
                : 'Complaint'}
            </Text>
            {selectedDirection != 'left' ? <Alerts width={20} style={{left:5}} /> : null}
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.topContainer}
        onPress={() => {
          navigation1.navigate('OBETranscript', {});
        }}>
        <View>
          <View style={styles.innerContainer}>
            {selectedDirection === 'left' ? <Transcript width={20} /> : null}
            <Text style={[styles.textStyle, selectedDirection==='left'?{}:{
                left:18
            }]}>
              {findWord(dynamicDictionary, 'Transcript')
                ? findWord(dynamicDictionary, 'Transcript')
                : 'Transcript'}
            </Text>
            {selectedDirection != 'left' ? <Transcript width={20} style={{left:20}} /> : null}
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.middleContainer}
        onPress={() => {
          navigation1.navigate('ContactUS', {});
        }}>
        <View>
          <View style={styles.innerContainer}>
            {selectedDirection === 'left' ? <Contactus width={20} /> : null}
            <Text style={[styles.textStyle, selectedDirection==='left'?{}:{

            }]}> {findWord(dynamicDictionary, 'Contact Us')
                ? findWord(dynamicDictionary, 'Contact Us')
                : 'Contact Us'}</Text>
            {selectedDirection != 'left' ? <Contactus width={20} /> : null}
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomContainer}
        onPress={() => {
          navigation1.navigate('AppInfo', {});
        }}>
        <View>
          <View style={styles.innerContainer}>
          {selectedDirection === 'left' ? <AppInfo width={20} /> : null}
            <Text style={styles.textStyle}>{findWord(dynamicDictionary, 'App Info')
                ? findWord(dynamicDictionary, 'App Info')
                : 'App Info'}</Text>
            {selectedDirection != 'left' ? <AppInfo width={20} /> : null}
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
export default MoreModal;
