import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { CloseCircle } from '../../../../Assets/SVGs';
import Blackinfo from '../../../../Assets/SVGs/Blackinfo';
import { BASE_URL } from '../../../../Config/Api';
import { Images } from '../../../../Themes';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { CourseDetailsModalProps } from './types';

const QuizDetailsModal = (props: CourseDetailsModalProps) => {
  const {
    modalVisible = false,
    setModalVisible,
    storeDP,
    to_time,
    course,
    teacherName,
    activity
  } = props;
  const { dynamicDictionary, selectedDirection } = useLanguage();

  const [date, time] = to_time.split(' ');
  return (
    <Modal
      isVisible={modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.7}
      onBackButtonPress={() => setModalVisible(false)}>
      <View style={styles.container}>
        <View style={styles.topRowContainer}>
          <View style={styles.headingContainer}>
            {selectedDirection === 'left' ? <Blackinfo /> : null}

            <Text style={styles.heading}>
              {findWord(dynamicDictionary, 'Quick Info') ?? 'Quick Info'}
            </Text>
            {selectedDirection != 'left' ? <Blackinfo /> : null}
          </View>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <CloseCircle />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.courseHeadingContainer}>
          <Text style={styles.courseTest}>{activity}</Text>
          <View
            style={{
              flexDirection: 'row',
              paddingRight: 20,
              paddingTop: 30,
              paddingBottom: 5
            }}>
            <View
              style={{
                backgroundColor: '#E0F2FE',
                height: 1,
                flex: 1,
                alignSelf: 'flex-end'
              }}
            />
            <View
              style={{
                backgroundColor: '#E0F2FE',
                height: 1,
                flex: 1,
                alignSelf: 'flex-end'
              }}
            />
            <View
              style={{
                backgroundColor: '#E0F2FE',
                height: 1,
                flex: 2,
                alignSelf: 'flex-end'
              }}
            />
          </View>
        </View>

        <View style={styles.justifyView}>
          <View style={styles.leftContainer}>
            {selectedDirection != 'left' ? (
              <View style={styles.topTextContainer}>
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    marginRight: 6
                  }}>
                  <Text style={[styles.classLabel, { textAlign: 'right' }]}>
                    {course}
                  </Text>
                  <Text style={[styles.instructorName, { textAlign: 'right' }]}>
                    {teacherName}
                  </Text>
                </View>
              </View>
            ) : null}
            {storeDP ? (
              <Image
                source={{
                  uri: `${BASE_URL}${storeDP}`
                }}
                defaultSource={Images.profilePlaceholder}
                style={styles.profile}
              />
            ) : (
              <Image
                source={Images.profilePlaceholder}
                style={styles.profile}
              />
            )}

            {selectedDirection === 'left' ? (
              <View style={styles.topTextContainer}>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={styles.classLabel}>{course}</Text>
                  <Text style={styles.instructorName}>{teacherName}</Text>
                </View>
              </View>
            ) : null}
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
            <Text style={styles.submissionDate} numberOfLines={1}>
              {' '}
              {findWord(dynamicDictionary, 'Submission Date') ??
                'Submission Date'}
            </Text>
            <Text style={styles.instructorName} numberOfLines={1}>
              {' '}
              {date}
            </Text>
            <Text style={styles.instructorName} numberOfLines={1}>
              {' '}
              {time}
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default QuizDetailsModal;
