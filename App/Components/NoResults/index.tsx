import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useLanguage } from '../../Types/LanguageContext';
import { findWord } from '../../Utils/ParsingUtils';
import styles from './styles';
import { NoResultsProps } from './types';

const NoResults = (props: NoResultsProps) => {
  const { message, icon } = props;

  console.debug(message)
  const { dynamicDictionary, selectedDirection } = useLanguage();
  useEffect(() => {}, [selectedDirection, dynamicDictionary]);
  return (
    <View>
      {selectedDirection === 'left' ? (
        <View style={styles.container}>
          {icon != undefined && icon()}
          <Text style={styles.message}>{findWord(dynamicDictionary,message)?
        findWord(dynamicDictionary,message):message  }</Text>
        </View>
      ) : (
        <View style={{ alignItems:'center', marginTop:300}}>
          <Text style={styles.message}>{findWord(dynamicDictionary,message)?
        findWord(dynamicDictionary,message):message}</Text>
          {icon != undefined && icon()}
        </View>
      )}
    </View>
  );
};

export default NoResults;
