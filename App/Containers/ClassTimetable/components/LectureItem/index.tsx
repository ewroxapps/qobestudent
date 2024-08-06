import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { Surface } from 'react-native-paper';
import {
  Bookmark,
  Clock,
  Monitor,
  Room,
  Teacher
} from '../../../../Assets/SVGs';
import { useLanguage } from '../../../../Types/LanguageContext';
import {
  convertDateToArabic,
  findWord,
  getDaysfrom
} from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { LectureItemProps } from './types';

const LectureItem = (props: LectureItemProps) => {
  const { lecture } = props;
  const { t } = useTranslation('timetable');
  const { selectedDirection, dynamicDictionary } = useLanguage();
  return (
    <View style={styles.container}>
      {selectedDirection === 'left' ? (
        <View style={styles.leftContainer}>
          <Text style={styles.dayText}>
            {getDaysfrom(
              lecture?.date.split(',')[0].substring(0, 3),
              dynamicDictionary
            )
              ? getDaysfrom(
                  lecture?.date.split(',')[0].substring(0, 3),
                  dynamicDictionary
                )
              : lecture?.date.split(',')[0].substring(0, 3)}
          </Text>

          <Text style={styles.date}>
            {convertDateToArabic(lecture?.date, dynamicDictionary)
              ? convertDateToArabic(lecture?.date, dynamicDictionary)
              : lecture?.date.split(',')[1]}
          </Text>

          <View style={styles.dottedLine} />
        </View>
      ) : null}

      {/* @ts-ignore */}
      <Surface style={[styles.rightContainer]} elevation={3}>
        <View style={[styles.infoLeftContainer]}>
          {selectedDirection === 'left' ? (
            <View style={[styles.infoEntryContainer,]}>
              <View style={styles.infoEntryLabel}>
                <Clock width={20} height={20} />
                <Text style={styles.key}>
                  {findWord(dynamicDictionary, 'Time')
                    ? findWord(dynamicDictionary, 'Time')
                    : 'Time'}
                  :
                </Text>
              </View>
              <Text style={[styles.value, {}]}>
                {lecture?.from_time}-{lecture?.to_time}
              </Text>
            </View>
          ) : (
            <View style={[styles.infoEntryContainer,]}>
              <Text style={[styles.value, { textAlign: 'right', right:-40}]}>
                {lecture?.to_time}-{lecture?.from_time}
              </Text>
              <View style={[styles.infoEntryLabel,{paddingRight:0}]}>
                <Text style={[styles.key, {left:0}]}>
                  {findWord(dynamicDictionary, 'Time')
                    ? findWord(dynamicDictionary, 'Time')
                    : 'Time'}
                  :
                </Text>
                <Clock width={20} height={20} />
              </View>
            </View>
          )}

          {selectedDirection === 'left' ? (
            <View style={styles.infoEntryContainer}>
              <View style={styles.infoEntryLabel}>
                <Room width={20} height={20} />
                <Text style={styles.key}>
                  {' '}
                  {findWord(dynamicDictionary, 'Room No.')
                    ? findWord(dynamicDictionary, 'Room No.')
                    : 'Room No.'}
                  :
                </Text>
              </View>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>{lecture?.room ?? '-'}</Text>
              </View>
            </View>
          ) : (
            <View style={[styles.infoEntryContainer,]}>
              <View style={[styles.valueContainer, { alignItems: 'flex-end' }]}>
                <Text style={[styles.value, { textAlign: 'right',right:-80 }]}>
                  {lecture?.room ?? '-'}
                </Text>
              </View>
              <View style={[styles.infoEntryLabel,{paddingRight:0}]}>
                <Text style={[styles.key,{marginRight:10}]}>
                  {' '}
                  {findWord(dynamicDictionary, 'Room No.')
                    ? findWord(dynamicDictionary, 'Room No.')
                    : 'Room No.'}
                  :
                </Text>
                <Room width={20} height={20} />
              </View>
            </View>
          )}

          {selectedDirection === 'left' ? (
            <View style={styles.infoEntryContainer}>
              <View style={styles.infoEntryLabel}>
                <Monitor width={20} height={20} />
                <Text style={styles.key}>
                  {findWord(dynamicDictionary, 'Is Online?')
                    ? findWord(dynamicDictionary, 'Is Online?')
                    : 'Is Online?'}
                  :
                </Text>
              </View>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>{lecture?.online ?? '-'}</Text>
              </View>
            </View>
          ) : (
            <View style={[styles.infoEntryContainer,]}>
              <View style={[styles.valueContainer, { alignItems: 'flex-end' }]}>
                <Text style={[styles.value, { textAlign: 'right',right:-60 }]}>
                  {lecture?.online != undefined
                    ? lecture.online
                    : findWord(dynamicDictionary, 'N/A')
                    ? findWord(dynamicDictionary, 'N/A')
                    : 'N/A'}
                </Text>
              </View>
              <View style={[styles.infoEntryLabel,{paddingRight:0}]}>
                <Text style={[styles.key,{marginRight:12}]}>
                  {findWord(dynamicDictionary, 'Is Online?')
                    ? findWord(dynamicDictionary, 'Is Online?')
                    : 'Is Online?'}
                  :
                </Text>
                <Monitor width={20} height={20} />
              </View>
            </View>
          )}

          {selectedDirection === 'left' ? (
            <View style={styles.infoEntryContainer}>
              <View style={styles.infoEntryLabel}>
                <Bookmark width={20} height={20} />
                <Text style={styles.key}>
                  {findWord(dynamicDictionary, 'Topic')
                    ? findWord(dynamicDictionary, 'Topic')
                    : 'Topic'}
                  :
                </Text>
              </View>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>
                  {lecture?.topic != undefined
                    ? lecture.topic
                    : findWord(dynamicDictionary, 'N/A')
                    ? findWord(dynamicDictionary, 'N/A')
                    : 'N/A'}
                </Text>
              </View>
            </View>
          ) : (
            <View style={[styles.infoEntryContainer, ]}>
              <View style={[styles.valueContainer, { alignItems: 'flex-end' }]}>
                <Text style={[styles.value, { textAlign: 'right',right:-60 }]}>
                  {lecture?.topic != undefined
                    ? lecture.topic
                    : findWord(dynamicDictionary, 'N/A')
                    ? findWord(dynamicDictionary, 'N/A')
                    : 'N/A'}
                </Text>
              </View>
              <View style={[styles.infoEntryLabel,,{paddingRight:0}]}>
                <Text style={[styles.key,{marginRight:10}]}>
                  {findWord(dynamicDictionary, 'Topic')
                    ? findWord(dynamicDictionary, 'Topic')
                    : 'Topic'}
                  :
                </Text>
                <Bookmark width={20} height={20} />
              </View>
            </View>
          )}

          {selectedDirection === 'left' ? (
            <View style={styles.infoEntryContainer}>
              <View style={styles.infoEntryLabel}>
                <Teacher width={20} height={20} />
                <Text style={styles.key}>
                  {findWord(dynamicDictionary, 'Teacher')
                    ? findWord(dynamicDictionary, 'Teacher')
                    : 'Teacher'}
                  :
                </Text>
              </View>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>
                  {lecture?.teacher != undefined
                    ? lecture.teacher
                    : findWord(dynamicDictionary, 'N/A')
                    ? findWord(dynamicDictionary, 'N/A')
                    : 'N/A'}
                </Text>
              </View>
            </View>
          ) : (
            <View style={[styles.infoEntryContainer, ]}>
              <View style={styles.valueContainer}>
                <Text style={[styles.value,{ alignSelf:'flex-end',right:-70}]}>
                  {lecture?.teacher != undefined
                    ? lecture.teacher
                    : findWord(dynamicDictionary, 'N/A')
                    ? findWord(dynamicDictionary, 'N/A')
                    : 'N/A'}
                </Text>
              </View>
              <View style={[styles.infoEntryLabel,{paddingRight:0}]}>
                <Text style={[styles.key,{marginRight:10}]}>
                  {findWord(dynamicDictionary, 'Teacher')
                    ? findWord(dynamicDictionary, 'Teacher')
                    : 'Teacher'}
                  :
                </Text>
                <Teacher width={20} height={20} />
              </View>
            </View>
          )}
        </View>
      </Surface>

      {selectedDirection != 'left' ? (
        <View style={styles.leftContainer}>
          <Text style={styles.dayText}>
            {getDaysfrom(
              lecture?.date.split(',')[0].substring(0, 3),
              dynamicDictionary
            )
              ? getDaysfrom(
                  lecture?.date.split(',')[0].substring(0, 3),
                  dynamicDictionary
                )
              : lecture?.date.split(',')[0].substring(0, 3)}
          </Text>

          <Text style={styles.date}>
            {convertDateToArabic(lecture?.date, dynamicDictionary)
              ? convertDateToArabic(lecture?.date, dynamicDictionary)
              : lecture?.date.split(',')[1]}
          </Text>

          <View style={styles.dottedLine} />
        </View>
      ) : null}
    </View>
  );
};
export default LectureItem;
