import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, View } from 'react-native';
import { Divider, Surface } from 'react-native-paper';
import { Clock, Room } from '../../../../Assets/SVGs';
import { Images } from '../../../../Themes';
import { findWord } from '../../../../Utils/ParsingUtils';
import { useLanguage } from './../../../../Types/LanguageContext';
import styles from './styles';
import { ComingLectureProps } from './types';
const ComingLecture = (props: ComingLectureProps) => {
  const { t } = useTranslation('home');
  const {
    label,
    startTime,
    endTime,
    instructorName,
    instructorProfile,
    roomNo
  } = props;

  const { dynamicDictionary, selectedDirection } = useLanguage();

  useEffect(() => {}, [dynamicDictionary]);

  const imageDisplay = () => {
    return (
      <View>
        {instructorProfile ? (
          <Image
            source={{
              uri: instructorProfile
            }}
            defaultSource={Images.profilePlaceholder}
            style={styles.profile}
          />
        ) : (
          <Image source={Images.profilePlaceholder} />
        )}
      </View>
    );
  };

  const textDisplay = () => {
    return (
      <View style={styles.topTextContainer}>
        <Text style={styles.classLabel}>{label}</Text>
        <Text style={styles.instructorName}>{instructorName}</Text>
      </View>
    );
  };

  const divider = () => {
    return <Divider style={styles.divider} />;
  };
  const timeDisplay = () => {
    return (
      <View>
        {selectedDirection === 'left' ? (
          <View style={styles.classInfoSectionContainer}>
            <Clock width={24} />
            <Text style={styles.infoText}>
              {startTime} - {endTime}
            </Text>
          </View>
        ) : (
          <View style={styles.classInfoSectionContainer}>
            <Text style={styles.infoText}>
              {startTime} - {endTime}
            </Text>
            <Clock width={24} />
          </View>
        )}
      </View>
    );
  };

  const roomDisplay = () => {
    return (
      <View>
        {selectedDirection === 'left' ? (
          <View style={styles.classInfoSectionContainer}>
            <Room width={24} />
            <Text style={styles.infoText}>
              {findWord(dynamicDictionary, 'Room No.')
                ? findWord(dynamicDictionary, 'Room No.')
                : 'Room No.'}
              {!roomNo && roomNo !== ''
                ? roomNo
                : findWord(dynamicDictionary, 'N/A')
                ? findWord(dynamicDictionary, 'N/A')
                : 'N/A'}
            </Text>
          </View>
        ) : (
          <View style={styles.classInfoSectionContainer}>
            <Text style={styles.infoText}>
              {findWord(dynamicDictionary, 'Room No.')
                ? findWord(dynamicDictionary, 'Room No.')
                : 'Room No.'}
              {!roomNo && roomNo !== ''
                ? roomNo
                : findWord(dynamicDictionary, 'N/A')
                ? findWord(dynamicDictionary, 'N/A')
                : 'N/A'}
            </Text>
            <Room width={24} />
          </View>
        )}
      </View>
    );
  };
  return (
    <Surface style={styles.container} elevation={1}>
      {selectedDirection === 'left' ? (
        <View style={styles.topContainer}>
          {imageDisplay()}
          {textDisplay()}
        </View>
      ) : (
        <View style={[styles.topContainer, { justifyContent: 'flex-end' }]}>
          {textDisplay()}
          {imageDisplay()}
        </View>
      )}

      {selectedDirection === 'left' ? (
        <View style={styles.classInfoContainer}>
          {timeDisplay()}
          {divider()}
          {roomDisplay()}
        </View>
      ) : (
        <View style={styles.classInfoContainer}>
          {roomDisplay()}
          {divider()}
          {timeDisplay()}
        </View>
      )}
    </Surface>
  );
};

export default ComingLecture;
