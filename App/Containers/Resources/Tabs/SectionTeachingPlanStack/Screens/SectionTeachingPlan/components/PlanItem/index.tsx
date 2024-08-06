import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  Attachment,
  CLOs,
  Comments
} from '../../../../../../../../Assets/SVGs';
import Board from '../../../../../../../../Assets/SVGs/Board';
import { VectorIcons } from '../../../../../../../../Components';
import { ICON_TYPES } from '../../../../../../../../Components/VectorIcons/VectorIcons';
import { Colors } from '../../../../../../../../Themes';
import { useLanguage } from '../../../../../../../../Types/LanguageContext';
import { convertNumberToArabic, findWord } from '../../../../../../../../Utils/ParsingUtils';
import styles from './styles';
import { PlanItemProps } from './types';

const PlanItem = (props: PlanItemProps) => {
  // Todo: Replace static data with API data
  const { t } = useTranslation('resources');
  const { planItem, onPress } = props;

  const { dynamicDictionary, selectedDirection } = useLanguage();

  const topForLeft = () => {
    return (
      <View style={styles.topRowContainer}>
        <Text style={styles.labelHeading}>
          {planItem?.name != undefined
            ? planItem.name
            : findWord(dynamicDictionary, 'N/A')
            ? findWord(dynamicDictionary, 'N/A')
            : 'N/A'}
        </Text>
        <Text style={styles.dateText}>
          {' '}
          {planItem?.from_date ?? '-'}{' '}
          {findWord(dynamicDictionary, 'To')
            ? findWord(dynamicDictionary, 'To')
            : 'to'}{' '}
          {planItem?.to_date ?? '-'}{' '}
        </Text>
        <VectorIcons
          name="right"
          size={18}
          color={Colors.textBlack}
          iconType={ICON_TYPES.AntDesign}
        />
      </View>
    );
  };

  const topForRight = () => {
    return (
      <View style={styles.topRowContainer}>
        <VectorIcons
          name="left"
          size={18}
          color={Colors.textBlack}
          iconType={ICON_TYPES.AntDesign}
        />
        <Text style={styles.dateText}>
          {' '}
          {planItem?.to_date ?? '-'}{' '}
          {findWord(dynamicDictionary, 'To')
            ? findWord(dynamicDictionary, 'To')
            : 'to'}{' '}
          {planItem?.from_date ?? '-'}{' '}
        </Text>

        <Text style={styles.labelHeading}>
          {planItem?.name != undefined
            ? planItem.name
            : findWord(dynamicDictionary, 'N/A')
            ? findWord(dynamicDictionary, 'N/A')
            : 'N/A'}
        </Text>
      </View>
    );
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container} needsOffscreenAlphaCompositing={true}>
        {selectedDirection === 'left' ? (
          <View>{topForLeft()}</View>
        ) : (
          <View>{topForRight()}</View>
        )}

        <View style={styles.subjectContainer}>
          <Text style={styles.subject} numberOfLines={1}>
            {findWord(dynamicDictionary, 'Subject')
              ? findWord(dynamicDictionary, 'Subject')
              : 'Subject'}
            :{' '}
            {planItem?.subject != undefined
              ? planItem.subject
              : findWord(dynamicDictionary, 'N/A')
              ? findWord(dynamicDictionary, 'N/A')
              : 'N/A'}
          </Text>
          <Text style={styles.topic} numberOfLines={1}>
            {findWord(dynamicDictionary, 'Topic')
              ? findWord(dynamicDictionary, 'Topic')
              : 'Topic'}
            :{' '}
            {planItem?.topics != undefined
              ? planItem.topics
              : findWord(dynamicDictionary, 'N/A')
              ? findWord(dynamicDictionary, 'N/A')
              : 'N/A'}
          </Text>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.cloContainer}>
            <View
              style={[
                styles.textWithIconContainer,
                selectedDirection === 'left'
                  ? {}
                  : { justifyContent: 'flex-end' }
              ]}>
              {selectedDirection === 'left' ? <CLOs /> : null}

              <Text style={[styles.detailLabel, styles.textWithIcon]}>
                {t('clos')}
              </Text>
              {selectedDirection != 'left' ? <CLOs /> : null}
            </View>
            {planItem?.clos?.length > 0 ? (
              planItem?.clos?.map((clo: string, index: number) => {
                return (
                  <Text
                    key={index}
                    style={[styles.detailValue, { marginTop: 10 }]}>
                    {clo}
                  </Text>
                );
              })
            ) : (
              <Text style={styles.detailValue}>
                {findWord(dynamicDictionary, 'No clos announced yet.')
                  ? findWord(dynamicDictionary, 'No clos announced yet.')
                  : 'No clos announced yet.'}
              </Text>
            )}
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
                {findWord(dynamicDictionary, 'Class Activities')
                  ? findWord(dynamicDictionary, 'Class Activities')
                  : 'Class Activities'}
              </Text>
              {selectedDirection != 'left' ? <Board /> : null}
            </View>
            {planItem?.activities?.length > 0 ? (
              planItem?.activities?.map((activity: string, index: number) => {
                return (
                  <Text key={index} style={styles.detailValue}>
                    {activity}
                  </Text>
                );
              })
            ) : (
              <Text style={styles.detailValue}>
                {findWord(dynamicDictionary, 'No activities announced yet.')
                  ? findWord(dynamicDictionary, 'No activities announced yet.')
                  : 'No activities announced yet.'}
              </Text>
            )}
          </View>
        </View>
        <View style={styles.bottomRowContainer}>
          <View style={styles.textWithIconContainer}>
          {selectedDirection === 'left' ? <Attachment /> : null}
            
            <Text style={[styles.detailValue, styles.textWithIcon,{marginRight:5}]}>
              {convertNumberToArabic(dynamicDictionary,planItem?.attachment_count)?
            convertNumberToArabic(dynamicDictionary,planItem?.attachment_count): planItem?.attachment_count
            }  {findWord(dynamicDictionary, 'Attachments')
            ? findWord(dynamicDictionary, 'Attachments')
            : 'Attachments'}
            </Text>
            {selectedDirection != 'left' ? <Attachment />: null}
          </View>
          {planItem?.comments.length === 0 ? (
            <View style={styles.textWithIconContainer}>
              {selectedDirection === 'left' ? <Comments /> : null}

              <Text
                style={[
                  styles.detailValue,
                  styles.textWithIcon,
                  { marginRight: 5 }
                ]}>
                {findWord(dynamicDictionary, 'Comments')
                  ? findWord(dynamicDictionary, 'Comments')
                  : 'Comments'}
              </Text>
              {selectedDirection != 'left' ? <Comments /> : null}
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlanItem;
