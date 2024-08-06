import React from 'react';
import { Text, View } from 'react-native';
import { useAppSelector } from '../../../../Hooks';
import { userInfoSelector } from '../../../../Selectors/UserSelector';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { HeaderProps } from './types';
const ComplainerDetail = (props: HeaderProps) => {
  const userInfo: any = useAppSelector(userInfoSelector);
  const { selectedDirection, dynamicDictionary } = useLanguage();
  return (
    <View style={styles.container}>
      <Text style={styles.topHeading}>
        {findWord(dynamicDictionary, 'Complainer Detail')
          ? findWord(dynamicDictionary, 'Complainer Detail')
          : 'Complainer Detail'}
      </Text>
      <View style={styles.justifyView}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.heading}>
            {findWord(dynamicDictionary, 'Email')
              ? findWord(dynamicDictionary, 'Email')
              : 'Email'}
          </Text>
          <Text style={styles.detail}>{userInfo.email}</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.heading}>
            {findWord(dynamicDictionary, 'Program')
              ? findWord(dynamicDictionary, 'Program')
              : 'Program'}
          </Text>
          <Text style={styles.detail}>{userInfo.program}</Text>
        </View>
      </View>

      <View style={styles.justifyView}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.heading}>
            {findWord(dynamicDictionary, 'Registeration Number')
              ? findWord(dynamicDictionary, 'Registeration Number')
              : 'Registeration Number'}
          </Text>
          <Text style={styles.detail}>{userInfo.reg_no}</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.heading}>
            {findWord(dynamicDictionary, 'Roll Number')
              ? findWord(dynamicDictionary, 'Roll Number')
              : 'Roll Number'}
          </Text>
          <Text style={styles.detail}>{userInfo.roll_no}</Text>
        </View>
      </View>
    </View>
  );
};

export default ComplainerDetail;
