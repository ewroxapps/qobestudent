import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { EmptyCalendar } from '../../Assets/SVGs';
import { HeaderRight, Screen } from '../../Components';
import { useAppSelector } from '../../Hooks';
import { useLanguagesQuery } from '../../RTK/Api/CourseApi';
import {
  useLazySingleDayTimetableQuery,
  useLazyTimetableQuery
} from '../../RTK/Endpoints';
import { userInfoSelector } from '../../Selectors/UserSelector';
import { Colors } from '../../Themes';
import { useLanguage } from '../../Types/LanguageContext';
import { convertNumberToArabic, findWord } from '../../Utils/ParsingUtils';
import HeaderLeft from '../Home/components/HeaderLeft';
import { EventItem } from './components';
import WeeklyCalendar from './components/WeeklyCalendar';
import styles from './styles';
const Timetable = () => {
  const { t } = useTranslation('timetable');
  const userInfo = useAppSelector(userInfoSelector);
  const navigation = useNavigation();
  const { dynamicDictionary, selectedDirection } = useLanguage();
  const [getTimetable, { isError, isLoading, isFetching, data }] =
    useLazyTimetableQuery();

  const [clearDate, setClearDate] = useState(false);

  const [
    getSingleDayTimetable,
    {
      isLoading: singleDayLoading,
      isFetching: singleDayFetching,
      isError: singleDayIsError,
      data: singleDayData
    }
  ] = useLazySingleDayTimetableQuery();
  const [isDateSelected, setIsDateSelected] = useState(undefined);

  const dataLoading = useMemo(() => {
    return isLoading || singleDayLoading || isFetching || singleDayFetching;
  }, [isLoading, singleDayLoading, isFetching, singleDayFetching]);

  const dataFetching = useMemo(() => {
    return isFetching || singleDayFetching;
  }, [isFetching, singleDayFetching]);

  const [selectedDate, setSelectedDate] = useState('');

  const timetableData = useMemo(() => {
    return isDateSelected ? singleDayData : data;
  }, [isDateSelected, selectedDate, singleDayData, data]);

  const {
    data: langData,
    refetch,
    isFetching: langFetch,
    isLoading: langLoad
  } = useLanguagesQuery({});

  useEffect(() => {
    getTimetable({});
  }, []);

  var timetable = findWord(dynamicDictionary, 'Timetable');
  useEffect(() => {
    if (selectedDirection === 'left') {
      navigation?.setOptions({
        headerRight: () => (
          <HeaderRight
            data={langData != undefined ? langData : []}
            refetch={refetch}
            direction={selectedDirection}
          />
        )
      });

      navigation.setOptions({
        headerLeft: () => (
          <HeaderLeft
            label={timetable ? timetable : 'Timetable'}
            direction={selectedDirection}
          />
        )
      });
    } else {
      navigation?.setOptions({
        headerRight: () => (
          <HeaderLeft
            label={timetable ? timetable : 'Timetable'}
            direction={selectedDirection}
          />
        )
      });
      navigation.setOptions({
        headerLeft: () => (
          <HeaderRight
            data={langData != undefined ? langData : []}
            refetch={refetch}
            direction={selectedDirection}
          />
        )
      });
    }

    navigation.setOptions({
      headerTitle: () => ''
    });
  }, [dynamicDictionary, selectedDirection, timetable]);

  const onDaySelected = (date: string) => {
    if (date) {
      setSelectedDate(date);
      const formattedDate = moment(date).format('YYYY-MM-DD');
      getSingleDayTimetable({ date: formattedDate });
    }
  };

  const onWeekChanged = (date: string) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    getTimetable({ date: formattedDate });
  };

  const getDateStrings = (
    date: string,
    arabicDictionary: DynamicDictionary
  ) => {
    const dayOfWeek = findWord(arabicDictionary, moment(date).format('ddd'))
    ? findWord(dynamicDictionary, moment(date).format('ddd'))
    : moment(date).format('ddd');
  

    const dayOfMonth = convertNumberToArabic(
      arabicDictionary,
      moment(date).get('D')
    )
      ? convertNumberToArabic(arabicDictionary, moment(date).get('D'))
      : moment(date).get('D');

    const month = findWord(dynamicDictionary, moment(date).format('MMMM'))
      ? findWord(dynamicDictionary, moment(date).format('MMMM'))
      : moment(date).format('MMMM');

    const year = convertNumberToArabic(arabicDictionary, moment(date).year())
      ? convertNumberToArabic(arabicDictionary, moment(date).year())
      : moment(date).year();

    if (selectedDirection === 'right') {
      return `  ${year},${month} ${dayOfMonth} ${dayOfWeek} `;
    } else {
      return ` ${dayOfMonth} ${dayOfWeek} ${month} ,${year} `;
    }
  };

  const renderEventItem = useCallback(
    (item: ILecture, index: number) => {
      return (
        <View key={`lecture ${index}`} style={styles.sectionListItem}>
          <EventItem
            label={item?.course}
            instructorName={item?.teacher}
            courseCode={item?.name}
            status={item?.status}
            time={item?.time}
            index={index}
            isOnline={item?.isonline}
            instructorProfile={item?.teacherDp}
            topic={item?.topic}
          />
        </View>
      );
    },
    [data]
  );

  const renderLecturesList = () => {
    return timetableData && Object.keys(timetableData).length > 0 ? (
      Object.keys(timetableData).map(date => {
        let dayString = getDateStrings(date, dynamicDictionary);
        return (
          <View key={date} style={styles.sectionListContainer}>
            <Text
              style={
                selectedDirection === 'left'
                  ? {}
                  : {
                      alignSelf: 'flex-end'
                    }
              }>
              {dayString}
            </Text>
            {timetableData[date].map((item: ILecture, index: number) => {
              return renderEventItem(item, index);
            })}
          </View>
        );
      })
    ) : (
      <View style={styles.noEventsContainer}>
        <EmptyCalendar width={60} height={60} />
        <Text style={styles.noEventText}>
          {findWord(dynamicDictionary, 'There is no event this day!')
            ? findWord(dynamicDictionary, 'There is no event this day!')
            : 'There is no event this day!'}
        </Text>
      </View>
    );
  };

  const onRefresh = () => {
    setClearDate(true);
    setIsDateSelected(undefined);
    getTimetable({});
    setClearDate(false);
  };

  return (
    <Screen>
      <View style={styles.topContainer} />
      <View style={styles.calendarContainer}>
        <WeeklyCalendar
          clearDate={clearDate}
          onDaySelected={onDaySelected}
          setDateSelection={setIsDateSelected}
          onWeekChanged={onWeekChanged}
        />
      </View>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onRefresh} />
        }>
        {dataLoading || dataFetching ? (
          <View style={styles.noEventsContainer}>
            <ActivityIndicator color={Colors.primary} size="large" />
          </View>
        ) : (
          <View style={styles.eventsContainer}>
            <Text style={styles.sectionHeading}>
              {isDateSelected
                ? `${
                    findWord(dynamicDictionary, 'Events On')
                      ? findWord(dynamicDictionary, 'Events On')
                      : 'Events On'
                  } ${getDateStrings(selectedDate,dynamicDictionary)}`
                : findWord(dynamicDictionary, 'Events this week')
                ? findWord(dynamicDictionary, 'Events this week')
                : 'Events this week'}
            </Text>
            {renderLecturesList()}
          </View>
        )}
      </ScrollView>
    </Screen>
  );
};

export default Timetable;
