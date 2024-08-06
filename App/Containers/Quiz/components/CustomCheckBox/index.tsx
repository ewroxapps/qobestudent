import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useLanguage } from '../../../../Types/LanguageContext';
import styles from './styles';
import { customcheckboxProps } from './types';
const CustomCheckBox = (props: customcheckboxProps) => {
  const { dynamicDictionary, selectedDirection } = useLanguage();
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        selectedDirection != 'left'
          ? { flex: 1, alignItems: 'flex-end', marginRight: 20 }
          : {}
      ]}>
      <View style={styles.checkboxContainer}>
        {selectedDirection === 'left' ? (
          <View
            style={
              props.checked ? styles.checkboxChecked : styles.checkboxUnchecked
            }
          />
        ) : null}

        <Text style={styles.label}>{props.label}</Text>

        {selectedDirection != 'left' ? (
          <View
            style={
              props.checked ? styles.checkboxChecked : styles.checkboxUnchecked
            }
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default CustomCheckBox;
