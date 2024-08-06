import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { CloseCircle } from '../../../../Assets/SVGs';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { CourseDetailsModalProps } from './types';

const CourseDetailsModal = (props: CourseDetailsModalProps) => {
  const { modalVisible = false, setModalVisible, course } = props;
  const { t } = useTranslation('myCourses');
  const navigation = useNavigation<ICoursesNavigationProp>();

  const { dynamicDictionary, selectedDirection } = useLanguage();
  useEffect(() => {}, [selectedDirection, dynamicDictionary]);
  return (
    <Modal
      isVisible={modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.7}
      onBackButtonPress={() => setModalVisible(false)}>
      <View style={styles.container}>
        {course ? (
          <>
            <View style={styles.topRowContainer}>
              <View style={styles.headingContainer}>
                <Text style={styles.heading}>
                  {findWord(dynamicDictionary, 'Course Details')
                    ? findWord(dynamicDictionary, 'Course Details')
                    : 'Course Details'}
                </Text>
              </View>
              <View style={styles.closeButtonContainer}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <CloseCircle />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.courseInfoContainer}>
              <View style={styles.infoItemContainer}>
                <Text style={styles.label}>
                  {findWord(dynamicDictionary, 'Course')
                    ? findWord(dynamicDictionary, 'Course')
                    : 'Course'}
                </Text>
                <Text
                  style={
                    selectedDirection === 'left'
                      ? styles.highlightedValue
                      : styles.highlightedValue2
                  }>
                  {course?.course}
                </Text>
              </View>
              <View style={styles.infoSectionContainer}>
                <View style={styles.infoItemContainer}>
                  <Text style={styles.label}>
                    {findWord(dynamicDictionary, 'Name')
                      ? findWord(dynamicDictionary, 'Name')
                      : 'Name'}
                  </Text>
                  <Text
                    style={
                      selectedDirection === 'left'
                        ? styles.value
                        : styles.value1
                    }>
                    {course?.name}
                  </Text>
                </View>
                <View style={styles.infoItemContainer}>
                  <Text style={styles.label}>
                    {findWord(dynamicDictionary, 'Semester')
                      ? findWord(dynamicDictionary, 'Semester')
                      : 'Semester'}
                  </Text>
                  <Text
                    style={
                      selectedDirection === 'left'
                        ? styles.value
                        : styles.value1
                    }>
                    {course?.semester ?? '-'}
                  </Text>
                </View>
              </View>
              <View style={styles.infoSectionContainer}>
                <View style={styles.infoItemContainer}>
                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>
                      {findWord(dynamicDictionary, 'Teacher')
                        ? findWord(dynamicDictionary, 'Teacher')
                        : 'Teacher'}
                    </Text>
                  </View>
                  <View style={styles.valueContainer}>
                    <Text
                      style={
                        selectedDirection === 'left'
                          ? styles.value
                          : styles.value1
                      }>
                      {course?.teacher ?? '-'}
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={styles.viewDetailsButton}
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('CourseDetails', { course });
                }}>
                <Text style={styles.buttonText}>
                  {' '}
                  {findWord(dynamicDictionary, 'View Details')
                    ? findWord(dynamicDictionary, 'View Details')
                    : 'View Details'}
                </Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text>{t('noCourseInfo')}</Text>
        )}
      </View>
    </Modal>
  );
};

export default CourseDetailsModal;
