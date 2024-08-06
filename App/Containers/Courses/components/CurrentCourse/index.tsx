import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { BASE_URL } from '../../../../Config/Api';
import { Images } from '../../../../Themes';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { CurrentCourseProps } from './types';

const CurrentCourse = (props: CurrentCourseProps) => {
  const { t } = useTranslation('myCourses');
  const { course, setModalVisible, setSelectedCourse } = props;

  const { dynamicDictionary, selectedDirection } = useLanguage();
  useEffect(() => {}, [selectedDirection, dynamicDictionary]);

  const leftTopContainer = () => {
    return (
      <View style={styles.topContainer}>
        {course?.teacherdp ? (
          <Image
            source={{
              uri: `${BASE_URL}${course?.teacherdp}`
            }}
            defaultSource={Images.profilePlaceholder}
            style={styles.profile}
          />
        ) : (
          <Image source={Images.profilePlaceholder} style={styles.profile} />
        )}
        <View style={styles.topTextContainer}>
          <View style={styles.topRow}>
            <Text style={styles.lectureNumber}>{course?.name}</Text>
          </View>
          <Text style={styles.classLabel}>{course?.course}</Text>
          <Text style={styles.instructorName}>{course?.teacher}</Text>
        </View>
      </View>
    );
  };

  const rightTopContainer = () => {
    return (
      <View style={[styles.topContainer]}>
        <View style={styles.topTextContainer}>
          <View style={styles.topRow}>
            <Text style={styles.lectureNumber}>{course?.name}</Text>
          </View>
          <Text style={styles.classLabel}>{course?.course}</Text>
          <Text style={styles.instructorName}>{course?.teacher}</Text>
        </View>
        {course?.teacherdp ? (
          <Image
            source={{
              uri: `${BASE_URL}${course?.teacherdp}`
            }}
            defaultSource={Images.profilePlaceholder}
            style={styles.profile}
          />
        ) : (
          <Image source={Images.profilePlaceholder} style={styles.profile} />
        )}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {selectedDirection === 'left' ? (
        <View>{leftTopContainer()}</View>
      ) : (
        <View>{rightTopContainer()}</View>
      )}

      <TouchableOpacity
        style={styles.viewDetailsButton}
        onPress={() => {
          setSelectedCourse(course);
          setModalVisible(true);
        }}>
        <Text style={styles.viewDetailsText}>
          {findWord(dynamicDictionary, 'View Details')
            ? findWord(dynamicDictionary, 'View Details')
            : 'View Details'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CurrentCourse;
