import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { ActivityActionButtonProps } from './types';

const ActivityActionButton = (props: ActivityActionButtonProps) => {
  const { label, icon, color, onPress, disabled } = props;
  const { dynamicDictionary, selectedDirection } = useLanguage();
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: color, opacity: disabled ? 0.5 : 1 }
      ]}
      onPress={onPress}
      disabled={disabled}>
      {selectedDirection === 'left' ? (
        <View>{icon !== undefined && icon()}</View>
      ) : null}

      <Text style={styles.label}>
        {findWord(dynamicDictionary, label)
          ? findWord(dynamicDictionary, label)
          : label}
      </Text>

      {selectedDirection != 'left' ? (
        <View>{icon !== undefined && icon()}</View>
      ) : null}
    </TouchableOpacity>
  );
};

export default ActivityActionButton;
