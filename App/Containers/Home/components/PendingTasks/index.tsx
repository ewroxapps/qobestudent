import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator, Divider } from 'react-native-paper';
import { Book, Document } from '../../../../Assets/SVGs';
import { useLazyStatsQuery } from '../../../../RTK/Api/UserApi';
import { Colors } from '../../../../Themes';
import { useLanguage } from '../../../../Types/LanguageContext';
import {
  convertNumberToArabic,
  findWord
} from '../../../../Utils/ParsingUtils';
import styles from './styles';

const PendingTasks = () => {
  const { t } = useTranslation('home');
  const [getTodaysTasks, { isLoading, data }] = useLazyStatsQuery();
  const { dynamicDictionary, selectedDirection } = useLanguage();

  useEffect(() => {
    if (!isLoading && !data) {
      getTodaysTasks({});
    }
  }, [dynamicDictionary]);

  return (
    <LinearGradient
      colors={[Colors.gradientEndBlue, Colors.gradientStartBlue]}
      style={styles.floatingContainer}>
      <View style={styles.floatingContainerSection}>
        {isLoading ? (
          <ActivityIndicator size="small" color={Colors.backgroundWhite} />
        ) : (
          <View>
            {selectedDirection === 'left' ? (
              <Text style={styles.importantCount}>
                {data?.class_count ?? 0}
              </Text>
            ) : (
              <Text style={styles.importantCount}>
                {convertNumberToArabic(
                  dynamicDictionary,
                  data?.class_count ?? 0
                )
                  ? convertNumberToArabic(
                      dynamicDictionary,
                      data?.class_count ?? 0
                    )
                  : data?.class_count ?? 0}
              </Text>
            )}
          </View>
        )}

        {selectedDirection === 'left' ? (
          <View style={styles.labelContainer}>
            <Book width={20} />
            <Text style={styles.label}> {' '}
              {findWord(dynamicDictionary, 'Lectures Today')
                ? findWord(dynamicDictionary, 'Lectures Today')
                : 'Lectures Today'}</Text>
          </View>
        ) : (
          <View style={styles.labelContainer}>
            <Text style={styles.label}>
              {' '}
              {findWord(dynamicDictionary, 'Lectures Today')
                ? findWord(dynamicDictionary, 'Lectures Today')
                : 'Lectures Today'}
            </Text>
            <Book width={20} />
          </View>
        )}
      </View>
      <Divider style={styles.divider} />
      <View style={styles.floatingContainerSection}>
        {isLoading ? (
          <ActivityIndicator size="small" color={Colors.backgroundWhite} />
        ) : (

          <View>
          {selectedDirection === 'left' ? (
            <Text style={styles.importantCount}>{data?.activity_due ?? 0}</Text>
          ) : (
            <Text style={styles.importantCount}>
              {convertNumberToArabic(
                dynamicDictionary,
                data?.activity_due ?? 0
              )
                ? convertNumberToArabic(
                    dynamicDictionary,
                    data?.activity_due ?? 0
                  )
                : data?.activity_due ?? 0}
            </Text>
          )}
        </View>
          
         
        )}

        {selectedDirection === 'left' ? (
          <View style={styles.labelContainer}>
            <Document width={20} />
            <Text style={styles.label}> {' '}
              {findWord(dynamicDictionary, 'Activities Due')
                ? findWord(dynamicDictionary, 'Activities Due')
                : 'Activities Due'}</Text>
          </View>
        ) : (
          <View style={styles.labelContainer}>
            <Text style={styles.label}>
              {' '}
              {findWord(dynamicDictionary, 'Activities Due')
                ? findWord(dynamicDictionary, 'Activities Due')
                : 'Activities Due'}
            </Text>
            <Document width={20} />
          </View>
        )}
      </View>
    </LinearGradient>
  );
};

export default PendingTasks;
