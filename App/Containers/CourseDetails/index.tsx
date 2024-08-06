import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { Surface } from 'react-native-paper';
import { GenericMessage, NoResults, Screen, Spinner } from '../../Components';
import { useCourseDetailsQuery } from '../../RTK/Api/CourseApi';
import { useLanguage } from '../../Types/LanguageContext';
import { findWord } from '../../Utils/ParsingUtils';
import { ActivityItem, CourseInfo, StudentCourseRecord } from './components';
import styles from './styles';

const CourseDetails = () => {
  const { t } = useTranslation('courseDetails');
  const { t: errorsTranslations } = useTranslation('errors');
  const navigation = useNavigation();
  const { params } = useRoute();
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const { dynamicDictionary, selectedDirection } = useLanguage();
  // @ts-ignore
  const id = params?.course?.id;
   // @ts-ignore
const course = params?.course;
  const { refetch, isLoading, isFetching, isError, data } = useCourseDetailsQuery({
    id: id || 0
  });

  useFocusEffect(React.useCallback(() => {
    refetch();
  }, [refetch]));

  const hasResults = (data:any) => {
    const len = data?.activities.length;
    return len > 0;
  };

  useEffect(() => {
    if (shouldRefetch) {
      refetch();
    }
    setShouldRefetch(false);
  });

  const renderActivityList = () => {
    const activityTypes = [...new Set(data?.activities.map((activity:any) => activity.type))];
  
    const { dynamicDictionary, selectedDirection } = useLanguage();
    return (
      <View>
        {activityTypes.map((type,index) => (
          <View key={index}>
            <FlatList
              data={data?.activities.filter((activity:any) => activity.type === type)}
              style={styles.list}
              listKey={moment().valueOf().toString()}
              refreshControl={
                <RefreshControl onRefresh={onRefresh} refreshing={false} />
              }
              ListHeaderComponent={
                <>
                  <Text style={styles.listHeading2}>{findWord(dynamicDictionary,type as string)?
                findWord(dynamicDictionary,type as string):type as string  
                }</Text>
                </>
              }
              renderItem={({ item }) => (
                <View style={styles.listItemContainer} key={item.idd}>
                  <ActivityItem
                    activity={item}
                    course={course}
                    refetch={refetch}
                  />
                </View>
              )}
              keyExtractor={(item) => item.idd}
            />
          </View>
        ))}
      </View>
    );
  };
  
  const onRefresh = () => {
    // Add refresh logic here
  };

  if (isLoading || isFetching) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <GenericMessage
        title={'Something went wrong'}
        onClosePress={() => {
          navigation.goBack();
        }}
      />
    );
  }

  
  return (
<Screen>
    <FlatList
      data={[]}
      renderItem={() => null}
      contentContainerStyle={{ flexGrow: 1 }}
      listKey={moment().valueOf().toString()}
      refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={false} />}
      ListHeaderComponent={
        <>
          <CourseInfo course={course} id={id} plo_base={data.plo_base} />
          <Surface style={styles.studentCourseContainer} >
            <StudentCourseRecord courseDetails={data} id={id} />
          </Surface>
          <View style={styles.container}>
            {hasResults(data) ? (
              <View>
                <Text style={styles.listHeading}>{findWord(dynamicDictionary,"Student Activities")?
              findWord(dynamicDictionary,"Student Activities"):  "Student Activities"
              }</Text>
                { renderActivityList()}
              </View>
            ) : (
              <View>
                <View style={styles.noResults}>
                  <NoResults message={"No activities"} />
                </View>
              </View>
            )}
          </View>
        </>
      }
      ListFooterComponent={<View style={{ marginBottom: 50 }} />} 
      
    />
  </Screen>
  
  );
};

export default CourseDetails;
