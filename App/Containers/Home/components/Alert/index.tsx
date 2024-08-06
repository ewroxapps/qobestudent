import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MessageEdit } from '../../../../Assets/SVGs';
import Arrow from '../../../../Assets/SVGs/Arrow';
import Desa from '../../../../Assets/SVGs/Desa';
import Register from '../../../../Assets/SVGs/Register';
import Survey from '../../../../Assets/SVGs/Survey';
import {
  convertNumberToArabic,
  findWord
} from '../../../../Utils/ParsingUtils';
import { useLanguage } from './../../../../Types/LanguageContext';
import styles from './styles';
import { AlertProps } from './types';
const Alert = (props: AlertProps) => {
  const navigation = useNavigation<IHomeNavigationProp>();
  const backgroundColorStyle = {
    backgroundColor: props.backgroundColor
  };

  const { dynamicDictionary, selectedDirection } = useLanguage();

  const symbols = () => {
    return (
      <View style={selectedDirection==="left"? styles.symbolLeft: styles.symbolRight}>
        {props.label === 'Assignment' ? (
          <Desa style={{ marginTop: 3 }} />
        ) : (
          <View>
            {props.label === 'Quiz' ? (
              <MessageEdit style={{ marginTop: 3 }} />
            ) : (
              <View>
                {props.label === 'Survey' ? (
                  <Survey style={{ marginTop: 3 }} />
                ) : (
                  <Register style={{ marginTop: 3 }} />
                )}
              </View>
            )}
          </View>
        )}
      </View>
    );
  };

  const text = () => {
    return (
      <View style={selectedDirection==="left"?styles.textLeft:styles.textRight}>
      <Text style={styles.textStyle}>
        {' '}
        {props.alertCount != 0
          ? convertNumberToArabic(dynamicDictionary, props.alertCount)
          : ''}
          {" "}
        {findWord(dynamicDictionary, 'New')
          ? findWord(dynamicDictionary, 'New')
          : 'New'}
          {" "}
          {
            findWord(dynamicDictionary, props.label)
            ? findWord(dynamicDictionary, props.label)
            : props.label}
      
      </Text>
  
      </View>
    );
  };


  const nextClick = () => {
    return (
      <TouchableOpacity
      style={selectedDirection==='left'? styles.nextClickLeft: styles.nextClickRight}
        onPress={() => {
          props.refetch();
          if (
            props.alertData != null &&
            props.label != 'Course Registeration'
          ) {
            navigation.navigate('AlertActivity', {
              from: props.label,
              data: props.alertData,
              refetch: props.refetch,
              isFetch: props.isFetching
            });
          } else {
            navigation.navigate('courseRegisteration', {});
          }
        }}
        hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }}>
        <Arrow />
      </TouchableOpacity>
    );
  };

  useEffect(() => {
   
  }, [dynamicDictionary]);
  return (
    <View>
      {selectedDirection === 'left' ? (
        <View style={[styles.container, backgroundColorStyle]}>
          {symbols()}
          {text()}
          {nextClick()}
        </View>
      ) : (
        <View style={[styles.container, backgroundColorStyle]}>
          {nextClick()}
          {text()}
          {symbols()}
        </View>
      )}
    </View>
  );
};

export default Alert;
