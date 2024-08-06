import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-paper';
import { useLanguage } from '../../../../Types/LanguageContext';
import {
  convertNumberToArabic,
  findWord
} from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { StudentCourseRecordProps } from './types';
const StudentCourseRecord = (props: StudentCourseRecordProps) => {
  const { t } = useTranslation('courseDetails');
  const { courseDetails } = props;
  const { id } = props;
  let show = true;
  const { dynamicDictionary, selectedDirection } = useLanguage();
  const navigation = useNavigation<ICoursesNavigationProp>();
  return (
    <View style={styles.container}>
      <View style={styles.recordContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemValue}>
            {courseDetails?.grade != undefined
              ? courseDetails?.grade
              : findWord(dynamicDictionary, 'N/A')
              ? findWord(dynamicDictionary, 'N/A')
              : 'N/A'}{' '}
          </Text>
          <Text style={styles.itemLabel}>{findWord(dynamicDictionary, 'Grade')
              ? findWord(dynamicDictionary, 'Grade')
              : 'Grade'}</Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.itemContainer}>
          <Text style={styles.itemValue}>
            {`${courseDetails?.present_percentage}` != undefined
              ? convertNumberToArabic(
                  dynamicDictionary,
                  courseDetails.present_percentage
                )
                ? convertNumberToArabic(
                    dynamicDictionary,
                    courseDetails.present_percentage
                  )+"%"
                : courseDetails.present_percentage+"%"
              : findWord(dynamicDictionary, 'N/A')
              ? findWord(dynamicDictionary, 'N/A')
              : 'N/A'}
          </Text>
          
          <Text style={styles.itemLabel}>
            {findWord(dynamicDictionary, 'Attendance')
              ? findWord(dynamicDictionary, 'Attendance')
              : 'Attendance'}
          </Text>
          <TouchableOpacity
            hitSlop={styles.hitSlop}
            onPress={() => {
              navigation.navigate('AttendanceDetail', { id: id });
            }}>
            <Text style={styles.viewDetailsText}>{findWord(dynamicDictionary, 'View Details')
              ? findWord(dynamicDictionary, 'View Details')
              : 'View Details'}</Text>
          </TouchableOpacity>
        </View>
        <Divider style={styles.divider} />
        {show ? (
          <View style={styles.itemContainer}>
            
            <Text style={styles.itemValue}>
              {courseDetails?.gpa != undefined
                ? courseDetails.gpa
                : findWord(dynamicDictionary, 'N/A')
                ? findWord(dynamicDictionary, 'N/A')
                : 'N/A'}{' '}
            </Text>
            <Text style={styles.itemLabel}>
              {findWord(dynamicDictionary, 'GPA')
                ? findWord(dynamicDictionary, 'GPA')
                : 'GPA'}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default StudentCourseRecord;
