import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { findWord } from '../../Utils/ParsingUtils';
import { useLanguage } from './../../Types/LanguageContext';
import styles from './styles';
import { RoundedButtonProps } from './types';
const RoundedButton = (props: RoundedButtonProps) => {
  const { label, onPress, textStyle, style } = props;
  const { dynamicDictionary } = useLanguage();
  var showWord = findWord(dynamicDictionary,label)
  return (
    <TouchableOpacity style={[styles.container, style ?? {}]} onPress={onPress}>
      <Text style={[styles.text, textStyle ?? {}]}>{showWord?showWord:label}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;
