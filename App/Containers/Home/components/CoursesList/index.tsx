import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { NoCourses } from '../../../../Assets/SVGs';
import { useAppSelector } from '../../../../Hooks';
import { userCoursesSelector } from '../../../../Selectors/UserSelector';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import CurrentCourse from '../CurrentCourse';
import styles from './styles';
const CoursesList = () => {
  const userCourses = useAppSelector(userCoursesSelector);
  const { t } = useTranslation('home');
  const navigation = useNavigation<any>();
  const { dynamicDictionary, selectedDirection } = useLanguage();

  const renderNoCurrentCourses = () => {
    return (
      <View>
        {selectedDirection === 'left' ? (
          <View style={styles.noCoursesContainer}>
            <NoCourses width={24} />
            <Text style={styles.body}>{t('noCoursesFound')}</Text>
          </View>
        ) : (
          <View style={styles.noCoursesContainer}>
          
            <Text style={styles.body}>
              {findWord(dynamicDictionary, 'No course found!')
                ? findWord(dynamicDictionary, 'No course found!')
                : 'No course found!'}
            </Text>
            <NoCourses width={24} />
          </View>
        )}
      </View>
    );
  };

  return (
    <>
      {userCourses && userCourses?.length > 0
        ? userCourses?.map(course => (
            <TouchableOpacity
              key={course?.id}
              style={styles.container}
              onPress={() => {
                navigation.navigate('CoursesStack', {
                  screen: 'CourseDetails',
                  initial: false,
                  params: { course }
                });
              }}>
              <CurrentCourse
                instructorName={course?.teacher}
                label={course?.course}
                instructorProfile={course?.teacherdp}
              />
            </TouchableOpacity>
          ))
        : renderNoCurrentCourses()}
    </>
  );
};

export default CoursesList;
