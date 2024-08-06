import React from 'react';
import { View } from 'react-native';
import CustomCheckBox from '../CustomCheckBox';
import { checkboxProps } from './types';
const CheckBox = (props: checkboxProps) => {
  const choices = props.data?.quizDetail[props.pageCount]?.choices;
  
  return (
    <View>
    {choices &&
      choices.map((choice, index) => (
        <View key={index} style={{ flexDirection: 'row', alignItems: 'center', }}>
          <CustomCheckBox
            label={choice}
            checked={props.selectedCheckboxes[choice]}
            onPress={() => props.handleCheckboxChange(choice)}
          />
        </View>
      ))}
  </View>
  );
};

export default CheckBox;
