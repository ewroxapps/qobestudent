import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../../Themes';
import { useLanguage } from '../../../../Types/LanguageContext';
import styles from './styles';
import { CustomRadioButtonProps } from './types';
const CustomRadioButton = (props: CustomRadioButtonProps) => {
  const { dynamicDictionary, selectedDirection } = useLanguage();
  return (
    <TouchableOpacity
      style={[
        styles.radioButton,
        selectedDirection != 'left' ? { alignSelf: 'flex-end' } : {}
      ]}
      onPress={() => props.onSelect(props.label)}>
      {selectedDirection === 'left' ? (
        <View
          style={[
            styles.radioCircle,
            {
              backgroundColor: props.selected
                ? Colors.quizBlue
                : Colors.backgroundWhite
            }
          ]}>
          {props.selected && <View style={styles.selectedRadioInnerCircle} />}
        </View>
      ) : null}

      <Text style={styles.label}>{props.label}</Text>

      {selectedDirection != 'left' ? (
        <View
          style={[
            styles.radioCircle,
            {
              backgroundColor: props.selected
                ? Colors.quizBlue
                : Colors.backgroundWhite
            }
          ]}>
          {props.selected && <View style={styles.selectedRadioInnerCircle} />}
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default CustomRadioButton;
