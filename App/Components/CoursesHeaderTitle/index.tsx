import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { CoursesHollow } from '../../Assets/SVGs';
import { useLanguage } from '../../Types/LanguageContext';
import { findWord } from '../../Utils/ParsingUtils';
import styles from './styles';
import { CoursesHeaderProps } from './types';

const CoursesHeaderTitle = (props: CoursesHeaderProps) => {
  const { selectedDirection, dynamicDictionary } = useLanguage();
  useEffect(() => {}, [selectedDirection, dynamicDictionary]);
  return (
    <View>
      {selectedDirection === 'left' ? (
        <View style={styles.container}>
          <CoursesHollow width={24} />
          <Text style={styles.title}>
            {findWord(dynamicDictionary, props.title)
              ? findWord(dynamicDictionary, props.title)
              : props.title}
          </Text>
        </View>
      ) : (
        <View style={styles.container}>
         <Text style={styles.title}>
            {findWord(dynamicDictionary, props.title)
              ? findWord(dynamicDictionary, props.title)
              : props.title}
          </Text>
          <CoursesHollow width={24} />
        </View>
      )}
    </View>
  );
};
export default CoursesHeaderTitle;
