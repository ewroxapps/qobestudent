import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import AttainmentG from '../../Assets/SVGs/AttainmentG';
import Graph from '../../Assets/SVGs/Graph';
import ObeStats from '../../Assets/SVGs/ObeStats';
import Transcript from '../../Assets/SVGs/Transcript';
import { useLanguage } from '../../Types/LanguageContext';
import { findWord } from '../../Utils/ParsingUtils';
import styles from './styles';
const MenuModal = () => {
  const navigation = useNavigation();
  const navigation1 = useNavigation<IHomeNavigationProp>();
  const { dynamicDictionary, selectedDirection } = useLanguage();

  return (
    <Modal
      isVisible={true}
      hasBackdrop={true}
      backdropColor="#CBD5E1"
      backdropOpacity={0.7}
      onBackButtonPress={() => {
        navigation.goBack();
      }}>
      <View style={styles.container}>
        <View style={styles.recordContainer}>
          <TouchableOpacity style={styles.itemContainer}
           onPress={()=>{
            navigation1.navigate('SloAttainments',{})
           }}
          >
            <Graph width={20} height={20}/>
            <Text style={styles.itemValue}>SLOs {findWord(dynamicDictionary,"Attainment")?
                    findWord(dynamicDictionary,"Attainment"):" Attainment"
          }</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemContainer}
           onPress={()=>{
            navigation1.navigate('PLOAttainment',{})
           }}
          >
            <ObeStats width={20} height={20}/>
            <Text style={styles.itemValue}>PLOs {findWord(dynamicDictionary,"Attainment")?
                    findWord(dynamicDictionary,"Attainment"):" Attainment"}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.recordContainer}>
          <TouchableOpacity style={styles.itemContainer} onPress={()=>{
            navigation1.navigate('PLOGraph',{})
           }}
          >
            <AttainmentG width={20} height={20} />
            <Text style={styles.itemValue}>PLOs {findWord(dynamicDictionary,"Graph")?
                    findWord(dynamicDictionary,"Graph"):" Graph"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemContainer} onPress={()=>{
            navigation1.navigate('OBETranscript',{})
           }}
          >
            <Transcript width={20} height={20}/>
            <Text style={styles.itemValue}>{findWord(dynamicDictionary,"OBE Transcript")?
                    findWord(dynamicDictionary,"OBE Transcript"):" OBE Transcript"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default MenuModal;
