import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import { Divider, Surface } from 'react-native-paper';
import { useLanguage } from '../../../../Types/LanguageContext';
import {
  convertNumberToArabic,
  findWord
} from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { ActivityItemProps } from './types';

const ActivityItem = (props: ActivityItemProps) => {
  // Todo: Replace with API data
  const { activity, course } = props;
  const navigation = useNavigation<ICoursesNavigationProp>();
  const { t } = useTranslation('courseDetails');
  const { dynamicDictionary, selectedDirection } = useLanguage();

  function submittedOrNot() {
    if (activity.uUpload?.path) {
      return findWord(dynamicDictionary, 'Submitted')
        ? findWord(dynamicDictionary, 'Submitted')
        : 'Submitted';
    } else {
      return;
    }
  }

  return (
    // @ts-ignore
    <Surface elevation={2} style={styles.container}>
      {selectedDirection === 'left' ? (
        <View style={{ flexDirection: 'row',justifyContent: 'space-between' }}>
          <Text style={styles.heading}>
            {activity?.name != undefined
              ? activity.name
              : findWord(dynamicDictionary, "'N/A'")
              ? findWord(dynamicDictionary, 'N/A')
              : 'N/A'}
          </Text>
          <Text style={{ marginTop: 5, color: '#F4BC1C' }}>
            {submittedOrNot()}
          </Text>
        </View>
      ) : (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.submit}>{submittedOrNot()}</Text>
          <Text style={[styles.heading, { flex: 1, textAlign: 'right' }]}>
            {activity?.name != undefined
              ? activity.name
              : findWord(dynamicDictionary, "'N/A'")
              ? findWord(dynamicDictionary, 'N/A')
              : 'N/A'}
          </Text>
        </View>
      )}

      {selectedDirection === 'left' ? (
        <View style={styles.row}>
          <Text style={styles.label}>
            {findWord(dynamicDictionary, 'Date')
              ? findWord(dynamicDictionary, 'Date')
              : 'Date'}
            :{' '}
            {activity?.date != undefined
              ? activity.date
              : findWord(dynamicDictionary, "'N/A'")
              ? findWord(dynamicDictionary, 'N/A')
              : 'N/A'}
          </Text>
        </View>
      ) : (
        <View style={[styles.row, { justifyContent: 'flex-end' }]}>
          <Text style={styles.label}>
            {findWord(dynamicDictionary, 'Date')
              ? findWord(dynamicDictionary, 'Date')
              : 'Date'}
            :{' '}
            {activity?.date != undefined
              ? activity.date
              : findWord(dynamicDictionary, "'N/A'")
              ? findWord(dynamicDictionary, 'N/A')
              : 'N/A'}
          </Text>
        </View>
      )}

      {selectedDirection === 'left' ? (
        <View style={styles.row}>
          <Text style={styles.label}>
            {findWord(dynamicDictionary, 'Type')
              ? findWord(dynamicDictionary, 'Type')
              : 'Type'}
            :{' '}
            {activity?.type != undefined
              ? activity.type
              : findWord(dynamicDictionary, "'N/A'")
              ? findWord(dynamicDictionary, 'N/A')
              : 'N/A'}
          </Text>
          <TouchableOpacity
            hitSlop={styles.hitSlop}
            onPress={() => {
              props.refetch();
              navigation.navigate('ActivityDetails', {
                activity: activity,
                teacher: course?.teacher,
                refetch: props.refetch,
                course: course.course,
                dp: course.teacherdp as string
              });
            }}>
            <Text style={styles.viewDetailsText}>
              {findWord(dynamicDictionary, 'View Details')
                ? findWord(dynamicDictionary, 'View Details')
                : 'View Detail'}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.row}>
          <TouchableOpacity
            hitSlop={styles.hitSlop}
            onPress={() => {
              props.refetch();
              navigation.navigate('ActivityDetails', {
                activity: activity,
                teacher: course?.teacher,
                refetch: props.refetch,
                course: course.course,
                dp: course.teacherdp as string
              });
            }}>
            <Text style={styles.viewDetailsText}>
              {findWord(dynamicDictionary, 'View Details')
                ? findWord(dynamicDictionary, 'View Details')
                : 'View Detail'}
            </Text>
          </TouchableOpacity>
          <Text style={styles.label}>
            {findWord(dynamicDictionary, 'Type')
              ? findWord(dynamicDictionary, 'Type')
              : 'Type'}
            :{' '}
            {activity?.type != undefined
              ? activity.type
              : findWord(dynamicDictionary, "'N/A'")
              ? findWord(dynamicDictionary, 'N/A')
              : 'N/A'}
          </Text>
        </View>
      )}

      <View style={styles.marksContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemValue}>
            {activity?.total != undefined
              ? convertNumberToArabic(dynamicDictionary, activity.total)
                ? convertNumberToArabic(dynamicDictionary, activity.total)
                : activity.total
              : findWord(dynamicDictionary, "'N/A'")
              ? findWord(dynamicDictionary, 'N/A')
              : 'N/A'}
          </Text>
          <Text style={styles.itemLabel}>
            {findWord(dynamicDictionary, 'Total Marks')
              ? findWord(dynamicDictionary, 'Total Marks')
              : 'Total Marks'}
          </Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.itemContainer}>
          <Text style={styles.itemValue}>
            {activity?.obtained != undefined
              ? convertNumberToArabic(dynamicDictionary, activity.obtained)
                ? convertNumberToArabic(dynamicDictionary, activity.obtained)
                : activity.obtained
              : findWord(dynamicDictionary, "'N/A'")
              ? findWord(dynamicDictionary, 'N/A')
              : 'N/A'}
          </Text>
          <Text style={styles.itemLabel}>
            {findWord(dynamicDictionary, 'Obtained Marks')
              ? findWord(dynamicDictionary, 'Obtained Marks')
              : 'Obtained Marks'}
          </Text>
        </View>
      </View>

      {selectedDirection === 'left' ? (
        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.key}>
              {findWord(dynamicDictionary, 'Teacher')
                ? findWord(dynamicDictionary, 'Teacher')
                : 'Teacher'}
              :
            </Text>
            <Text style={styles.key}>
              {findWord(dynamicDictionary, 'Remarks')
                ? findWord(dynamicDictionary, 'Remarks')
                : 'Remarks'}
              :
            </Text>
            {activity?.uUpload && (
              <Text style={styles.key}>
                {findWord(dynamicDictionary, 'Learner')
                  ? findWord(dynamicDictionary, 'Learner')
                  : 'Learner'}
                :
              </Text>
            )}
          </View>
          <View style={styles.valuesContainer}>
            <Text style={styles.value}>
              {course?.teacher?.trim() != undefined
                ? course.teacher.trim()
                : findWord(dynamicDictionary, "'N/A'")
                ? findWord(dynamicDictionary, 'N/A')
                : 'N/A'}
            </Text>
            <Text style={styles.value}>
              {activity?.tRemarks != undefined
                ? activity.tRemarks
                : findWord(dynamicDictionary, "'N/A'")
                ? findWord(dynamicDictionary, 'N/A')
                : 'N/A'}
            </Text>
            {activity?.uUpload && (
              <Text style={styles.value}>{activity?.uUpload?.name ?? '-'}</Text>
            )}
          </View>
        </View>
      ) : (
        <View style={[styles.bottomContainer,{flexDirection:'column', justifyContent:'flex-end',alignItems:'flex-end'}]}>
         
            <View style={{flexDirection:'row'}}>

            <Text style={[styles.value,{marginRight:3}]}>
              {course?.teacher?.trim() != undefined
                ? course.teacher.trim()
                : findWord(dynamicDictionary, "'N/A'")
                ? findWord(dynamicDictionary, 'N/A')
                : 'N/A'}
            </Text>
            <Text style={styles.key}>
              {findWord(dynamicDictionary, 'Teacher')
                ? findWord(dynamicDictionary, 'Teacher')
                : 'Teacher'}
              :
            </Text>
            </View>
            <View style={{flexDirection:'row'}}>

            <Text style={[styles.value,{marginRight:3}]}>
              {activity?.tRemarks != undefined
                ? activity.tRemarks
                : findWord(dynamicDictionary, "'N/A'")
                ? findWord(dynamicDictionary, 'N/A')
                : 'N/A'}
            </Text>
            <Text style={styles.key}>
              {findWord(dynamicDictionary, 'Remarks')
                ? findWord(dynamicDictionary, 'Remarks')
                : 'Remarks'}
              :
            </Text>

            </View>

            <View style={{flexDirection:'row'}}>
            {activity?.uUpload && (
              <Text style={[styles.value,{marginRight:3}]}>{activity?.uUpload?.name ?? '-'}</Text>
            )}
            {activity?.uUpload && (
              <Text style={styles.key}>
                {findWord(dynamicDictionary, 'Learner')
                  ? findWord(dynamicDictionary, 'Learner')
                  : 'Learner'}
                :
              </Text>
            )}
          
            </View>
        </View>
      )}
    </Surface>
  );
};

export default ActivityItem;
