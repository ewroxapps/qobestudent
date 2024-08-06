import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useLanguage } from '../../Types/LanguageContext';
import { findWord } from '../../Utils/ParsingUtils';
import styles from './styles';
import { headerTitle } from './types';
const HeaderTitle = (props: headerTitle) => {
  const { selectedDirection, dynamicDictionary } = useLanguage();
  useEffect(() => {}, [selectedDirection, dynamicDictionary,props.title]);
  return (
    <View style={styles.topContainer}>
      {selectedDirection === 'left' ? (
        <View style={styles.innerContainer}>
          {props.icon()}
          <Text style={styles.text}>
            {findWord(dynamicDictionary, props.title)
              ? findWord(dynamicDictionary, props.title)
              : props.title}
          </Text>
        </View>
      ) : (
        <View style={styles.innerContainer}>
          <Text style={[styles.text,{marginRight:9}]}>
            {findWord(dynamicDictionary, props.title)
              ? findWord(dynamicDictionary, props.title)
              : props.title}
          </Text>
          {props.icon()}
        </View>
      )}
    </View>
  );
};

export default HeaderTitle;
