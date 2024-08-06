import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Timer from '../../../../Assets/SVGs/Timer';
import { useLanguage } from '../../../../Types/LanguageContext';
import { convertTimeToArabic, findWord } from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { HeaderQuizProps } from './types';

const QuizHeader = (props: HeaderQuizProps) => {
  const { data, checkTime, from } = props;
  const { dynamicDictionary, selectedDirection } = useLanguage();
  var timer = data();
  var convertToArabic = convertTimeToArabic(timer, dynamicDictionary) ?? timer;
  useEffect(() => {}, [data, checkTime, from, timer, convertToArabic]);

  return (
    <View>
      {from != 'Home' ? (
        <View style={styles.innerContainer}>
          {selectedDirection === 'left' && checkTime ? (
            <Timer width={18} height={18} />
          ) : null}

          {selectedDirection === 'left' ? (
            <Text style={styles.dateTxt}>
              {checkTime
                ? timer
                : findWord(dynamicDictionary, '') ?? ''}
            </Text>
          ) : (
            <Text style={styles.dateTxt}>
              {checkTime
                ? convertToArabic
                : findWord(dynamicDictionary, '') ?? ''}
            </Text>
          )}
        
          {selectedDirection === 'left' && checkTime ? (
            <Timer width={18} height={18} />
          ) : null}
        </View>
      ) : null}

      {from === 'Home' ? (
        <View style={[styles.innerContainer, { marginStart: 100 }]}>
          {selectedDirection === 'left' && checkTime ? (
            <Timer width={18} height={18} />
          ) : null}
         {selectedDirection === 'left' ? (
            <Text style={styles.dateTxt}>
              {checkTime
                ? timer
                : findWord(dynamicDictionary, '') ?? ''}
            </Text>
          ) : (
            <Text style={styles.dateTxt}>
              {checkTime
                ? convertToArabic
                : findWord(dynamicDictionary, '') ?? ''}
            </Text>
          )}
          {selectedDirection != 'left' && checkTime ? (
            <Timer width={18} height={18} />
          ) : null}
        </View>
      ) : null}
    </View>
  );
};

export default QuizHeader;
