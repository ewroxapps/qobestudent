import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Surface } from 'react-native-paper';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { ActionButtonProps } from './types';

const ActionButton = (props: ActionButtonProps) => {
  const { color, textColor, label, icon, onPress } = props;
  const { dynamicDictionary, selectedDirection } = useLanguage();
  return (
    <Surface
      // @ts-ignore
      elevation={3}
      style={[styles.container, { backgroundColor: color }]}>
      <TouchableOpacity onPress={onPress} style={styles.innerContainer}>
        {icon()}
        <Text style={[styles.label, { color: textColor }]}>
          {findWord(dynamicDictionary, label)
            ? findWord(dynamicDictionary, label)
            : label}
        </Text>
      </TouchableOpacity>
    </Surface>
  );
};
export default ActionButton;
