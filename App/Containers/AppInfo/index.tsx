import React from 'react';
import { Text, View } from 'react-native';
import AWS from '../../Assets/SVGs/AWS';
import Alfoze from '../../Assets/SVGs/Alfoze';
import Product from '../../Assets/SVGs/Product';
import Qobe from '../../Assets/SVGs/Qobe';
import { Screen } from '../../Components';
import { useLanguage } from '../../Types/LanguageContext';
import { findWord } from '../../Utils/ParsingUtils';
import styles from './styles';
const AppInfo = () => {
  const { selectedDirection, dynamicDictionary } = useLanguage();
  return (
    <Screen>
      <View style={styles.recordContainer}>
        <View style={styles.itemContainer}>
          <View></View>
          <View style={{ marginTop: 20 }}>
            <Qobe />
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.QobeText}>
            {findWord(dynamicDictionary, 'About QOBE')
              ? findWord(dynamicDictionary, 'About QOBE')
              : 'About QOBE'}
          </Text>
          <Text
            style={{
              textAlign: 'justify',
              paddingLeft: 40,
              paddingRight: 45,
              paddingTop: 10,
              color: '#64748B',
              fontWeight: '500'
            }}>
            {findWord(
              dynamicDictionary,
              'QOBE is most widely used Outcome Based LMS in region. QOBE offers you the framework and necessary tools to ensure attainment of learning outcomes and it is compliant with multiple global program accreditations'
            )
              ? findWord(
                  dynamicDictionary,
                  'QOBE is most widely used Outcome Based LMS in region. QOBE offers you the framework and necessary tools to ensure attainment of learning outcomes and it is compliant with multiple global program accreditations'
                )
              : '  QOBE is most widely used Outcome Based LMS in region. QOBE offers you the framework and necessary tools to ensure attainment of learning outcomes and it is compliant with multiple global program accreditations'}
          </Text>
          <Text style={{ color: '#475569', fontSize: 14 }}>
            {findWord(dynamicDictionary, 'QOBE Version: 1.3')
              ? findWord(dynamicDictionary, 'QOBE Version: 1.3')
              : 'QOBE Version: 1.3'}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.secondContainer}>
            <View style={{ paddingTop: 9, paddingRight: 5 }}>
              <Product />
            </View>
            <Alfoze />
            <View style={{ paddingLeft: 50 }}>
              <AWS />
            </View>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Text>
            {findWord(dynamicDictionary, '2015-2023 © All Rights Reserved.')
              ? findWord(dynamicDictionary, '2015-2023 © All Rights Reserved.')
              : '2015-2023 © All Rights Reserved.'}
          </Text>
          <Text>{findWord(dynamicDictionary, 'Alfoze Technologies (Pvt) Ltd.')
              ? findWord(dynamicDictionary, 'Alfoze Technologies (Pvt) Ltd.')
              : 'Alfoze Technologies (Pvt) Ltd.'}</Text>
        </View>
      </View>
    </Screen>
  );
};

export default AppInfo;
