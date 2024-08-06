import React from 'react';
import { Text, View } from 'react-native';
import Survey1 from '../../../../Assets/SVGs/Survey1';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import styles from './styles';

const HeaderTitle = () => {
  const { dynamicDictionary, selectedDirection } = useLanguage();
  return (
    <View>
      {selectedDirection === 'left' ? (
        <View style={styles.innerContainer}>
          <Survey1 width={26} height={26} />
          <Text style={styles.dateTxt}>
            {findWord(dynamicDictionary, 'Survey')
              ? findWord(dynamicDictionary, 'Survey')
              : 'Survey'}
          </Text>
        </View>
      ) : (
        <View style={styles.innerContainer}>
          <Text style={[styles.dateTxt,{marginRight:5}]}>
            {findWord(dynamicDictionary, 'Survey')
              ? findWord(dynamicDictionary, 'Survey')
              : 'Survey'}
          </Text>
          <Survey1 width={26} height={26} />
        </View>
      )}
    </View>
  );
};

export default HeaderTitle;
