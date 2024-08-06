import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Eye, EyeCrossed } from '../../Assets/SVGs';
import { findWord } from '../../Utils/ParsingUtils';
import { useLanguage } from './../../Types/LanguageContext';
import styles from './styles';
import { InputFieldProps } from './types';
const InputField = (props: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const { dynamicDictionary,selectedDirection } = useLanguage();
  useEffect(() => {
  
  }, [selectedDirection,dynamicDictionary]);

  return (
    <>
      <View style={[styles.container, props.style ?? {}]}>
        {props.selectedDirection === 'right' ? (
          <View>
            {props.secureTextEntry &&
              (!showPassword ? (
                <TouchableOpacity
                  onPress={() => setShowPassword(true)}
                  hitSlop={styles.hitSlop}>
                  <EyeCrossed />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => setShowPassword(false)}
                  hitSlop={styles.hitSlop}>
                  <Eye />
                </TouchableOpacity>
              ))}
          </View>
        ) : null}

        <TextInput
          value={props.value}
          placeholder={findWord(dynamicDictionary,props.label) ? findWord(dynamicDictionary,props.label) : props.label}
          style={
            props.selectedDirection === 'left'
              ? styles.inputField
              : styles.inputFieldRight
          }
          onChangeText={props.onTextChange ? props.onTextChange : () => {}}
          secureTextEntry={props.secureTextEntry && !showPassword}
        />

        {props.selectedDirection != 'right' ? (
          <View>
            {props.secureTextEntry &&
              (!showPassword ? (
                <TouchableOpacity
                  onPress={() => setShowPassword(true)}
                  hitSlop={styles.hitSlop}>
                  <EyeCrossed />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => setShowPassword(false)}
                  hitSlop={styles.hitSlop}>
                  <Eye />
                </TouchableOpacity>
              ))}
          </View>
        ) : null}
      </View>
      {props.isError ? <Text style={styles.error}>{props.error}</Text> : null}
    </>
  );
};

export default InputField;
