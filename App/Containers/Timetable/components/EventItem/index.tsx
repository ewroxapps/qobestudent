import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Bookmark, Clock, Monitor, Room } from '../../../../Assets/SVGs';
import { BASE_URL } from '../../../../Config/Api';
import { Colors, Images } from '../../../../Themes';
import { useLanguage } from '../../../../Types/LanguageContext';
import {
  convertNumberToArabic,
  findWord
} from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { EventItemProps } from './types';

const CurrentCourse = (props: EventItemProps) => {
  const { t } = useTranslation('timetable');
  const [expanded, setExpanded] = useState(false);
  const {
    label,
    instructorName,
    instructorProfile,
    courseCode,
    time,
    status,
    index,
    isOnline,
    topic,
    room
  } = props;

  const { dynamicDictionary, selectedDirection } = useLanguage();
  const image = () => {
    return (
      <View>
        {instructorProfile ? (
          <Image
            source={{
              uri: `${BASE_URL}${instructorProfile}`
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

  const detail = () => {
    return (
      <View style={styles.topTextContainer}>
        <View style={styles.topRow}>
          <Text style={styles.lectureNumber}>
            {findWord(dynamicDictionary, 'Lecture')
              ? findWord(dynamicDictionary, 'Lecture')
              : 'Lecture'}{' '}
            {convertNumberToArabic(dynamicDictionary, index + 1)
              ? convertNumberToArabic(dynamicDictionary, index + 1)
              : index + 1}
          </Text>
          <Text style={styles.lectureNumber}>{time}</Text>
        </View>
        <Text style={styles.classLabel}>{label}</Text>
        <Text style={styles.instructorName}>{instructorName}</Text>
      </View>
    );
  };

  const detailRight = () => {
    return (
      <View style={styles.topTextContainer}>
        <View style={styles.topRow}>
          <Text style={styles.lectureNumber}>{time}</Text>
          <Text style={[styles.lectureNumber, { marginRight: 10 }]}>
            {findWord(dynamicDictionary, 'Lecture')
              ? findWord(dynamicDictionary, 'Lecture')
              : 'Lecture'}{' '}
            {convertNumberToArabic(dynamicDictionary, index + 1)
              ? convertNumberToArabic(dynamicDictionary, index + 1)
              : index + 1}
          </Text>
        </View>
        <Text style={styles.classLabel}>{label}</Text>
        <Text style={styles.instructorName}>{instructorName}</Text>
      </View>
    );
  };

  const statusShow = () => {
    return (
      <View style={styles.planned}>
        <Text style={styles.plannedText}>{status}</Text>
      </View>
    );
  };

  const courseCodeShow = () => {
    return (
      <View style={styles.bottomInfo}>
        <Text>{courseCode}</Text>
      </View>
    );
  };

  const leftTime = () => {
    return (
      <View style={styles.expandedViewItem}>
        <View style={styles.expandedKey}>
          <Clock width={18} height={18} />
          <Text style={styles.key}>
            {findWord(dynamicDictionary, 'Time')
              ? findWord(dynamicDictionary, 'Time')
              : 'Time'}
          </Text>
        </View>
        <View style={styles.expandedValue}>
          <Text style={styles.value}>{time}</Text>
        </View>
      </View>
    );
  };

  const rightTime = () => {
    return (
      <View style={styles.expandedViewItem}>
        <View style={[styles.expandedValue, { justifyContent: 'flex-end' }]}>
          <Text style={styles.value}>{time}</Text>
        </View>
        <View style={[styles.expandedKey, { justifyContent: 'flex-end' }]}>
          <Text style={[styles.key, { marginRight: 5 }]}>
            {findWord(dynamicDictionary, 'Time')
              ? findWord(dynamicDictionary, 'Time')
              : 'Time'}
          </Text>
          <Clock width={18} height={18} />
        </View>
      </View>
    );
  };

  const leftOnline = () => {
    return (
      <View style={styles.expandedViewItem}>
        <View style={styles.expandedKey}>
          <Monitor width={18} height={18} />
          <Text style={styles.key}>
            {findWord(dynamicDictionary, 'Is Online?')
              ? findWord(dynamicDictionary, 'Is Online?')
              : 'Is Online?'}
          </Text>
        </View>
        <View style={styles.expandedValue}>
          <Text style={styles.value}>{isOnline}</Text>
        </View>
      </View>
    );
  };

  const rightOnline = () => {
    return (
      <View style={styles.expandedViewItem}>
        <View style={[styles.expandedValue, { justifyContent: 'flex-end' }]}>
          <Text style={styles.value}>{isOnline}</Text>
        </View>
        <View style={[styles.expandedKey, { justifyContent: 'flex-end' }]}>
          <Text style={[styles.key, { marginRight: 5 }]}>
            {findWord(dynamicDictionary, 'Is Online?')
              ? findWord(dynamicDictionary, 'Is Online?')
              : 'Is Online?'}
          </Text>
          <Monitor width={18} height={18} />
        </View>
      </View>
    );
  };

  const leftRoom = () => {
    return (
      <View style={styles.expandedViewItem}>
        <View style={styles.expandedKey}>
          <Room width={18} height={18} />
          <Text style={styles.key}>
            {' '}
            {findWord(dynamicDictionary, 'Room No.')
              ? findWord(dynamicDictionary, 'Room No.?')
              : 'Room No.'}
            .
          </Text>
        </View>
        <View style={styles.expandedValue}>
          <Text style={styles.value}>{room}</Text>
        </View>
      </View>
    );
  };

  const rightRoom = () => {
    return (
      <View style={styles.expandedViewItem}>
        <View style={[styles.expandedValue, { justifyContent: 'flex-end' }]}>
          <Text style={styles.value}>{room}</Text>
        </View>
        <View style={[styles.expandedKey, { justifyContent: 'flex-end' }]}>
          <Text style={styles.key}>
            {' '}
            {findWord(dynamicDictionary, 'Room No.')
              ? findWord(dynamicDictionary, 'Room No.')
              : 'Room No.'}
          </Text>
          <Room width={18} height={18} />
        </View>
      </View>
    );
  };

  const leftTopic = () => {
    return (
      <View style={styles.expandedViewItem}>
        <View style={styles.expandedKey}>
          <Bookmark width={18} height={18} />
          <Text style={styles.key}>
            {' '}
            {findWord(dynamicDictionary, 'Topic')
              ? findWord(dynamicDictionary, 'Topic')
              : 'Topic'}
          </Text>
        </View>
        <View style={styles.expandedValue}>
          <Text style={styles.value}>{topic}</Text>
        </View>
      </View>
    );
  };
  const rightTopic = () => {
    return (
      <View style={styles.expandedViewItem}>
        <View style={[styles.expandedValue, { justifyContent: 'flex-end' }]}>
          <Text style={styles.value}>{topic}</Text>
        </View>
        <View style={[styles.expandedKey, { justifyContent: 'flex-end' }]}>
          <Text style={styles.key}>
            {' '}
            {findWord(dynamicDictionary, 'Topic')
              ? findWord(dynamicDictionary, 'Topic')
              : 'Topic'}
          </Text>
          <Bookmark width={18} height={18} />
        </View>
      </View>
    );
  };
  return (
    <View style={expanded ? { backgroundColor: Colors.lightBlue } : {}}>
      <View
        style={[
          styles.container,
          expanded ? { backgroundColor: Colors.lightBlue } : {}
        ]}>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          {selectedDirection === 'left' ? (
            <View style={styles.rightContainer}>
              {image()}
              {detail()}
            </View>
          ) : (
            <View
              style={[styles.rightContainer, { justifyContent: 'flex-end' }]}>
              {detailRight()}
              {image()}
            </View>
          )}
          {selectedDirection === 'left' ? (
            <View style={styles.bottomContainer}>
              {status ? (
                <View>{statusShow()}</View>
              ) : (
                <View style={{ marginLeft: 60 }} />
              )}

              {courseCodeShow()}
            </View>
          ) : (
            <View
              style={[styles.bottomContainer, { justifyContent: 'flex-end' }]}>
              {courseCodeShow()}
              {status ? (
                <View style={{ marginLeft: 10, marginRight: 10 }}>
                  {statusShow()}
                </View>
              ) : (
                <View style={{ marginLeft: 60 }} />
              )}
            </View>
          )}
        </TouchableOpacity>
      </View>

      {expanded && (
        <View>
          {selectedDirection === 'left' ? (
            <View style={styles.expandedView}>
              {leftTime()}
              {leftRoom()}
              {leftOnline()}
              {leftTopic()}
            </View>
          ) : (
            <View style={styles.expandedView}>
              {rightTime()}
              {rightRoom()}
              {rightOnline()}
              {rightTopic()}
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default CurrentCourse;
