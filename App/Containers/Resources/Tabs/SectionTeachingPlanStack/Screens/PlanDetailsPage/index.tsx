import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';
import { Attachment, CLOs } from '../../../../../../Assets/SVGs';
import Board from '../../../../../../Assets/SVGs/Board';
import Timetable from '../../../../../../Assets/SVGs/Timetable';
import { GenericMessage, Screen, Spinner } from '../../../../../../Components';
import { usePlanDetailsQuery } from '../../../../../../RTK/Api/CourseApi';
import { useLanguage } from '../../../../../../Types/LanguageContext';
import {
  convertNumberToArabic,
  findWord
} from '../../../../../../Utils/ParsingUtils';
import { AttachmentItem } from './components';
import styles from './styles';

const PlanDetailsPage = () => {
  const { params } = useRoute();
  const { t } = useTranslation('resources');
  const navigation = useNavigation();
  const { t: errorsTranslations } = useTranslation('resources');
  const { isLoading, isFetching, isError, data } = usePlanDetailsQuery({
    id: params?.plan?.id ?? 0
  });

  const [planDetails, setPlanDetails] = useState<IClassPlanDetail | undefined>(
    undefined
  );

  useEffect(() => {
    if (data) {
      setPlanDetails(data[0]);
    }
  }, [data]);

  if (isLoading || isFetching) {
    return <Spinner />;
  }
  if (isError) {
    return (
      <GenericMessage
        title={errorsTranslations('somethingWentWrong')}
        onClosePress={() => {
          navigation.goBack();
        }}
      />
    );
  }

  const { dynamicDictionary, selectedDirection } = useLanguage();

  const topDateLeft = () => {
    return (
      <View style={styles.topRowContainer}>
        <Timetable width={18} height={18} />
        <Text style={styles.dateText}>
          {' '}
          {planDetails?.from_date ?? '-'}{' '}
          {findWord(dynamicDictionary, 'To')
            ? findWord(dynamicDictionary, 'To')
            : 'to'}{' '}
          {planDetails?.to_date ?? '-'}{' '}
        </Text>
      </View>
    );
  };

  const topDateRight = () => {
    return (
      <View style={[styles.topRowContainer, { justifyContent: 'flex-end' }]}>
        <Text style={styles.dateText}>
          {' '}
          {planDetails?.to_date ?? '-'}{' '}
          {findWord(dynamicDictionary, 'To')
            ? findWord(dynamicDictionary, 'To')
            : 'to'}{' '}
          {planDetails?.from_date ?? '-'}{' '}
        </Text>
        <Timetable width={18} height={18} />
      </View>
    );
  };

  const subjectTopicLeft = () => {
    return (
      <View style={styles.subjectContainer}>
        <Text style={styles.subject}>
          {findWord(dynamicDictionary, 'Subject')
            ? findWord(dynamicDictionary, 'Subject')
            : 'Subject'}
          :{' '}
          {planDetails?.subject != undefined
            ? planDetails?.subject
            : findWord(dynamicDictionary, 'N/A')
            ? findWord(dynamicDictionary, 'N/A')
            : 'N/A'}
        </Text>
        <Text style={styles.topic}>
          {findWord(dynamicDictionary, 'Topic')
            ? findWord(dynamicDictionary, 'Topic')
            : 'Topic'}
          :{' '}
          {planDetails?.topics != undefined
            ? planDetails?.topics
            : findWord(dynamicDictionary, 'N/A')
            ? findWord(dynamicDictionary, 'N/A')
            : 'N/A'}
        </Text>
      </View>
    );
  };

  return (
    <Screen>
      <ScrollView style={styles.primaryContainer}>
        <View style={styles.container} needsOffscreenAlphaCompositing={true}>
          {selectedDirection === 'left' ? (
            <View>
              {topDateLeft()}
              {subjectTopicLeft()}
            </View>
          ) : (
            <View>
              {topDateRight()}
              {subjectTopicLeft()}
            </View>
          )}

          <View style={styles.detailContainer}>
            <View
              style={[
                styles.cloContainer,
                selectedDirection === 'left' ? {} : { alignItems: 'flex-end' }
              ]}>
              <View style={styles.textWithIconContainer}>
                {selectedDirection === 'left' ? <CLOs /> : null}

                <Text style={[styles.detailLabel, styles.textWithIcon]}>
                  {t('clos')}
                </Text>
                {selectedDirection != 'left' ? <CLOs /> : null}
              </View>
              {planDetails?.clos?.map((clo: string, index) => {
                return (
                  <Text
                    key={index}
                    style={[styles.detailValue, { marginTop: 10 }]}>
                    {clo}
                  </Text>
                );
              })}
            </View>
            <View>
              <View
                style={[
                  styles.textWithIconContainer,
                  selectedDirection === 'left'
                    ? {}
                    : { justifyContent: 'flex-end' }
                ]}>
                {selectedDirection === 'left' ? <Board /> : null}

                <Text style={[styles.detailLabel, styles.textWithIcon]}>
                  {findWord(dynamicDictionary, 'Class Activity')
                    ? findWord(dynamicDictionary, 'Class Activity')
                    : 'Class Activities'}
                </Text>

                {selectedDirection != 'left' ? <Board /> : null}
              </View>
              {planDetails?.activities?.map((activity: string) => {
                return <Text style={styles.detailValue}>{activity}</Text>;
              })}
            </View>
          </View>
          <View
            style={[
              styles.attachmentsHeadingContainer,
              selectedDirection === 'left' ? {} : { justifyContent: 'flex-end' }
            ]}>
            {selectedDirection === 'left' ? <Attachment /> : null}

            <Text style={[styles.detailValue, styles.textWithIcon,{marginRight:5}]}>
              {convertNumberToArabic(
                dynamicDictionary,
                planDetails?.resources?.length
              )
                ? convertNumberToArabic(
                    dynamicDictionary,
                    planDetails?.resources?.length
                  )
                : planDetails?.resources?.length}{' '}
              {findWord(dynamicDictionary, 'Attachments')
                ? findWord(dynamicDictionary, 'Attachments')
                : 'Attachments'}
            </Text>
            {selectedDirection != 'left' ? <Attachment /> : null}
          </View>
          <View style={{ flex: 1 }}>
            {planDetails?.resources?.map((resource, index, arr) => {
              return (
                <View key={index}>
                  <AttachmentItem resource={resource} />
                  {index !== arr.length - 1 && (
                    <Divider style={styles.divider} />
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default PlanDetailsPage;
