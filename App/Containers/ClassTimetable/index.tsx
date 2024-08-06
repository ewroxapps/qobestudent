import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, RefreshControl, View } from 'react-native';
import { GenericMessage, NoResults, Screen, Spinner } from '../../Components';
import { useClassTimetableQuery } from '../../RTK/Api/CourseApi';
import { LectureItem } from './components';
import styles from './styles';

const ClassTimetable = () => {
  const { params } = useRoute();
  const { t: errorsTranslations } = useTranslation('errors');
  const { t } = useTranslation('timetable');
  const navigation = useNavigation();
  const {
    refetch,
    isError,
    isLoading,
    data: timetable
    // @ts-ignore
  } = useClassTimetableQuery({ id: params?.classId });

  const onRefresh = () => {
    refetch();
  };

  if (isError) {
    return (
      <GenericMessage
        title={'Somwthing went wrong'}
        onClosePress={() => {
          navigation.goBack();
        }}
      />
    );
  }
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Screen style={{ flex: 1 }}>
      {timetable?.length == 0 ? (
        <View style={styles.noResultsContainer}>
          <NoResults message={'No class timetable found!'} />
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            style={{ flex: 1 }}
            data={timetable}
            refreshControl={
              <RefreshControl onRefresh={onRefresh} refreshing={false} />
            }
            renderItem={({ item }) => (
              <View style={styles.lectureItemContainer}>
                <LectureItem lecture={item} />
              </View>
            )}
          />
        </View>
      )}
    </Screen>
  );
};

export default ClassTimetable;
