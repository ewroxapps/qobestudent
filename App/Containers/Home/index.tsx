import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Alert,
  BackHandler,
  Image,
  RefreshControl,
  Text,
  View
} from 'react-native';
import { HeaderRight, Screen, Spinner } from '../../Components';
import { BASE_URL } from '../../Config/Api';
import { useAppDispatch, useAppSelector } from '../../Hooks';
import {
  CourseApiUtil,
  useClassQuizQuery,
  useLanguagesQuery,
  useOtherAlertQuery
} from '../../RTK/Api/CourseApi';
import {
  UserApiUtil,
  useCurrentCoursesQuery,
  useUpNextClassesQuery,
  useUserDetailQuery
} from '../../RTK/Api/UserApi';
import { userInfoSelector } from '../../Selectors/UserSelector';
import { Images } from '../../Themes';
import colors from '../../Themes/Colors';
import { findWord } from '../../Utils/ParsingUtils';
import { useLanguage } from './../../Types/LanguageContext';
import { Alerts, ComingLecture, CoursesList, PendingTasks } from './components';
import HeaderLeft from './components/HeaderLeft';
import styles from './styles';
const Home = () => {
  const { t } = useTranslation('home');
  const userInfo = useAppSelector(userInfoSelector);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { dynamicDictionary, selectedDirection } = useLanguage();

  const {
    data: quizData,
    refetch: quizRefetch,
    isFetching: quizFetch
  } = useClassQuizQuery({});

  const {
    data: alert,
    refetch: alertRefetch,
    isFetching: alertFetch
  } = useOtherAlertQuery({});

  const {
    isError: userInfoError,
    isLoading: userLoading,
    isFetching: userFetching,
    refetch: refetchUser
  } = useUserDetailQuery('p');
  const {
    isLoading: coursesLoading,
    isFetching: coursesFetching,
    isError: isCoursesError,
    data: coursesData,
    error: coursesError,
    refetch: refetchCurrentCourses
  } = useCurrentCoursesQuery('c');

  const {
    isLoading: upNextLoading,
    isFetching: upNextFetching,
    isError: upNextError,
    data: upNextLecture,
    refetch: refetchUpNext
  } = useUpNextClassesQuery('u');

  const isLoading = useMemo(
    () => coursesLoading || userLoading || upNextLoading || langLoad,
    [coursesLoading, userLoading, upNextLoading]
  );

  const {
    data,
    refetch,
    isFetching: langFetch,
    isLoading: langLoad
  } = useLanguagesQuery({});
  
  const isFetching = useMemo(
    () =>
      coursesFetching ||
      userFetching ||
      upNextFetching ||
      quizFetch ||
      alertFetch ||
      langFetch,
    [
      coursesFetching,
      userFetching,
      upNextFetching,
      quizFetch,
      alertFetch,
      langFetch
    ]
  );
  var home = findWord(dynamicDictionary, 'Home');
  var alertHeader =  findWord(dynamicDictionary,'Are you sure you want to exit?')?
  findWord(dynamicDictionary,'Are you sure you want to exit?'):
  'Are you sure you want to exit?'

  useEffect(() => {
   
    if (selectedDirection === 'left') {
  
      navigation?.setOptions({
        headerRight: () => (
          <HeaderRight
            data={data != undefined ? data : []}
            refetch={refetch}
            direction={selectedDirection}
          />
        )
      });
      navigation.setOptions({
        headerLeft: () => (
          <HeaderLeft
            label={home ? home : 'Home'}
            direction={selectedDirection}
          />
        )
      });
    } else {
  
      navigation?.setOptions({
        headerRight: () => (
          <HeaderLeft
            label={home ? home : 'Home'}
            direction={selectedDirection}
          />
        )
      });
      navigation.setOptions({
        headerLeft: () => (
          <HeaderRight
            data={data != undefined ? data : []}
            refetch={refetch}
            direction={selectedDirection}
          />
        )
      });
    }

    navigation.setOptions({
      headerTitle: () => ''
    });
  }, [selectedDirection,home,data,alertHeader]);

  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        Alert.alert(
          alertHeader ?? 'Are you sure you want to exit?',
          undefined,
          [
            {
              text: findWord(dynamicDictionary, 'Cancel')?findWord(dynamicDictionary, 'Cancel'):'Cancel',
              style: 'cancel'
            },
            {
              text: findWord(dynamicDictionary, 'Yes')?findWord(dynamicDictionary, 'Yes'):'Yes',
              onPress: () => BackHandler.exitApp()
            }
          ],
          {
            cancelable: true
          }
        );
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction
      );

      return () => backHandler.remove();
    }, [])
  );

 useEffect(() => {
    return () => {
      dispatch(UserApiUtil.resetApiState());
      dispatch(CourseApiUtil.resetApiState());
    };
  }, []); 

  const onRefresh = () => {
    refetchUser();
    refetchCurrentCourses();
    refetchUpNext();
    quizRefetch();
    alertRefetch();
    refetch();
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Screen>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
        }>
        {selectedDirection === 'left' ? (
          <View style={styles.topContainer}>
            <View style={styles.topLeft}>
              <Text style={styles.body}>{findWord(dynamicDictionary, 'Welcome')
                  ? findWord(dynamicDictionary, 'Welcome')
                  : 'Welcome'}</Text>
              <Text style={styles.heading}>{userInfo?.name}</Text>
            </View>
            <Image source={Images.welcomeImg} style={styles.welcomeImage} />
          </View>
        ) : (
          <View style={[styles.topContainer, { marginBottom: 10 }]}>
            <Image
              source={Images.welcomeImg}
              style={[
                styles.welcomeImage,
                {
                  marginLeft: -10
                }
              ]}
            />
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.body}>
                {findWord(dynamicDictionary, 'Welcome')
                  ? findWord(dynamicDictionary, 'Welcome')
                  : 'Welcome'}
              </Text>
              <Text style={styles.heading}>{userInfo?.name}</Text>
            </View>
          </View>
        )}

        <View style={styles.bottomContainer}>
          <PendingTasks />
          <View style={[styles.upNextContainer]}>
              <Text style={styles.sectionHeading}>
                {' '}
                {findWord(dynamicDictionary, 'Up Next')
                  ? findWord(dynamicDictionary, 'Up Next')
                  : 'Up Next'}
              </Text>
            

            {!upNextLecture ? (
              <View>
                
                  <Text>
                    {' '}
                    {findWord(dynamicDictionary, 'No upcoming event today!')
                      ? findWord(dynamicDictionary, 'No upcoming event today!')
                      : 'No upcoming event today!'}
                  </Text>
  
              </View>
            ) : (
              <ComingLecture
                label={upNextLecture?.class_name}
                instructorName={upNextLecture?.class_name}
                instructorProfile={`${BASE_URL}${upNextLecture?.teacher_dp}`}
                startTime={upNextLecture?.from_time}
                endTime={upNextLecture?.to_time}
                roomNo={upNextLecture?.room}
              />
            )}
          </View>
          <View>
            
              <Text style={styles.sectionHeading}>
                {' '}
                {findWord(dynamicDictionary, 'Important Updates')
                  ? findWord(dynamicDictionary, 'Important Updates')
                  : 'Important Updates'}
              </Text>
        

            {quizData != null || alert != null ? (
              <View>
                {alert?.courseRegister === true ? (
                  <Alerts
                    label={'Course Registeration'}
                    backgroundColor={'#8B5CF6'}
                    alertCount={0}
                    alertData={alert}
                    refetch={alertRefetch}
                    isFetching={alertFetch}
                  />
                ) : null}

                {alert?.surveys.length > 0 ? (
                  <Alerts
                    label={'Survey'}
                    backgroundColor={'#14B8A6'}
                    alertCount={alert?.surveys.length}
                    alertData={alert.surveys}
                    refetch={alertRefetch}
                    isFetching={alertFetch}
                  />
                ) : null}

                {alert?.activities.length > 0 ? (
                  <Alerts
                    label={'Assignment'}
                    backgroundColor={colors.purplesss}
                    alertCount={alert?.activities.length}
                    alertData={alert.activities}
                    refetch={alertRefetch}
                    isFetching={alertFetch}
                  />
                ) : null}

                {quizData?.length > 0 ? (
                  <Alerts
                    label={'Quiz'}
                    backgroundColor={colors.quizBlue}
                    alertCount={quizData?.length}
                    alertData={quizData}
                    refetch={quizRefetch}
                    isFetching={quizFetch}
                  />
                ) : null}
              </View>
            ) : (
              <View>
                
                  <Text>
                    {' '}
                    {findWord(dynamicDictionary, 'No important updates today!')
                      ? findWord(
                          dynamicDictionary,
                          'No important updates today!'
                        )
                      : 'No important updates today!'}
                  </Text>
                
              </View>
            )}
          </View>
          <View style={styles.currentCoursesContainer}>
            {selectedDirection === 'left' ? (
              <Text style={styles.sectionHeading}>{t('currentCourses')}</Text>
            ) : (
              <Text style={styles.sectionHeading}>
                {' '}
                {findWord(dynamicDictionary, 'Current Courses')
                  ? findWord(dynamicDictionary, 'Current Courses')
                  : 'Current Courses'}
              </Text>
            )}

            <CoursesList />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Screen>
  );
};

export default memo(Home);
