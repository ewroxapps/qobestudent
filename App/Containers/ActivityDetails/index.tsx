import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FlatList,
  Linking,
  RefreshControl,
  ScrollView,
  StatusBar,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';
import { Divider, Surface } from 'react-native-paper';
import { DocumentUpload, Note, Solve } from '../../Assets/SVGs';
import BlueEdit from '../../Assets/SVGs/BlueEdit';
import BlueView from '../../Assets/SVGs/BlueView';
import { Screen } from '../../Components';
import { BASE_URL } from '../../Config/Api';
import { useAppSelector } from '../../Hooks';
import { useClassQuizQuery } from '../../RTK/Api/CourseApi';
import { userInfoSelector } from '../../Selectors/UserSelector';
import { Colors } from '../../Themes';
import { useLanguage } from '../../Types/LanguageContext';
import { convertNumberToArabic, findWord } from '../../Utils/ParsingUtils';
import {
  ActivityActionButton,
  EntityInfoContainer,
  UpdateNoteModal,
  UploadFileModal
} from './components';
import AttactmentActivity from './components/AttachmentActivity';
import ImageActionActivity from './components/ImageActionActivity';
import styles from './styles';
const ActivityDetails = (props: any) => {
  const { params } = useRoute();

  const userInfo = useAppSelector(userInfoSelector);
  const { data, refetch: Refe } = useClassQuizQuery({});
  const [refreshing, setRefreshing] = useState(false);
  // @ts-ignore
  const {
    activity,
    teacher,
    refetch,
    course,
    dp
  }: {
    activity: IClassActivity;
    subActivities: ISubActivities;
    teacher?: string;
    course?: string;
    dp?: string;
    refetch: (visible: boolean) => void;
  } = params;

  const { t } = useTranslation('courseDetails');
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState<string | null>(
    activity.uUpload?.name ?? null
  );
  const [result, setResult] = useState(false);
  const [uri, setUri] = useState<string>(activity.uUpload?.path ?? '');
  const [uploadModalVisible, setUploadModalVisible] = useState(false);
  const navigation = useNavigation<ICoursesNavigationProp>();
  var count = 0;
  const { dynamicDictionary, selectedDirection } = useLanguage();
  const changeHeader = () => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: Colors.backgroundWhite
      }
    });
  };

  useEffect(() => {
    if (activity != null) {
      if (activity.type === 'Online Quiz') changeHeader();
    }
  }, [data, props.route.params.refetch, uri]);

  const editFile = () => {
    setUploadModalVisible(true);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    props.route.params.refetch();
    setRefreshing(false);
  };

  const openDoc = () => {
    const documentUrl = `${BASE_URL}${uri}`;
    Linking.openURL(documentUrl);
  };

  console.debug(activity)

  return (
    <Screen>
      {activity.type != 'Online Quiz' && (
        <StatusBar backgroundColor="#A855F7" barStyle="light-content" />
      )}

      {activity.type === 'Online Quiz' && (
        <StatusBar backgroundColor="#0EA5E9" barStyle="light-content" />
      )}

      <View style={styles.blueBackground} />
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }>
        <View style={styles.topContainer}>
          <Text
            style={[
              styles.heading,
              selectedDirection != 'left' ? { alignSelf: 'flex-end' } : {}
            ]}>
            {activity?.name}
          </Text>
          {selectedDirection === 'left' ? (
            <View style={styles.subInfoContainer}>
              <Text style={styles.bodyText}>
                {findWord(dynamicDictionary, 'Date')
                  ? findWord(dynamicDictionary, 'Date')
                  : 'Date'}
                : {activity?.date}
              </Text>
              <Text style={styles.bodyText}>
                {findWord(dynamicDictionary, 'Type')
                  ? findWord(dynamicDictionary, 'Type')
                  : 'Type'}
                :{' '}
                {findWord(dynamicDictionary, activity?.type)
                  ? findWord(dynamicDictionary, activity?.type)
                  : activity?.type}
              </Text>
            </View>
          ) : (
            <View style={styles.subInfoContainer}>
              <Text style={styles.bodyText}>
                {findWord(dynamicDictionary, 'Type')
                  ? findWord(dynamicDictionary, 'Type')
                  : 'Type'}
                :
                {findWord(dynamicDictionary, activity?.type)
                  ? findWord(dynamicDictionary, activity?.type)
                  : activity?.type}
              </Text>
              <Text style={styles.bodyText}>
                {findWord(dynamicDictionary, 'Date')
                  ? findWord(dynamicDictionary, 'Date')
                  : 'Date'}
                : {activity?.date}
              </Text>
            </View>
          )}
        </View>
        <View style={styles.marksContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemValue}>
              {activity?.total != undefined
                ? convertNumberToArabic(dynamicDictionary, activity.total)
                  ? convertNumberToArabic(dynamicDictionary, activity.total)
                  : activity.total
                : findWord(dynamicDictionary, 'N/A')
                ? findWord(dynamicDictionary, 'N/A')
                : 'N/A'}
            </Text>
            <Text style={styles.itemLabel}>
              {findWord(dynamicDictionary, 'Total Marks')
                ? findWord(dynamicDictionary, 'Total Marks')
                : 'Total Marks'}
            </Text>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.itemContainer}>
            <Text style={styles.itemValue}>
              {activity?.obtained != undefined
                ? convertNumberToArabic(dynamicDictionary, activity.obtained)
                  ? convertNumberToArabic(dynamicDictionary, activity.obtained)
                  : activity.obtained
                : findWord(dynamicDictionary, 'N/A')
                ? findWord(dynamicDictionary, 'N/A')
                : 'N/A'}
            </Text>
            <Text style={styles.itemLabel}>
              {findWord(dynamicDictionary, 'Obtained Marks')
                ? findWord(dynamicDictionary, 'Obtained Marks')
                : 'Obtained Marks'}
            </Text>
          </View>
        </View>

        {activity?.subActivities!.length > 0 && (
          <Surface style={styles.assignment}>
            <Text
              style={[
                styles.attachmentText,
                selectedDirection != 'left' ? { alignSelf: 'flex-end' } : {}
              ]}>
              {findWord(dynamicDictionary, 'Questions')
                ? findWord(dynamicDictionary, 'Questions')
                : 'Questions'}
            </Text>
            <FlatList
              data={activity.subActivities}
              renderItem={({ item }) => {
                return (
                  <View
                    style={[
                      selectedDirection != 'left'
                        ? styles.rightStyle
                        : styles.leftStyle
                    ]}>
                    {selectedDirection === 'left' ? (
                      <View style={{ flexDirection: 'row' }}>
                        <View>
                          <Text numberOfLines={1} style={styles.questionNum}>
                            {item.name}
                          </Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                          <Text style={styles.questionHeading}>
                            {item.question} 
                          </Text>
                        </View>
                      </View>
                    ) : (
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-end'
                        }}>
                        <Text
                          style={{
                            color: 'black',
                            marginRight: 10,
                            marginLeft: 10,
                            textAlign: 'right'
                          }}>
                          {item.question}
                        </Text>
                        <Text numberOfLines={1} style={styles.questionNum}>
                          {item.name}
                        </Text>
                      </View>
                    )}
                  </View>
                );
              }}
            />
          </Surface>
        )}

        <View style={styles.actionsContainer}>
          {activity?.uQuestion!.length > 0 && activity.type === 'Assignment' && (
            <Surface style={styles.attacchment}>
              <Text style={styles.attachmentText}>
                {findWord(dynamicDictionary, 'Attachment')
                  ? findWord(dynamicDictionary, 'Attachment')
                  : 'Attachment'}
                :
              </Text>
              <FlatList
                data={activity.uQuestion}
                style={{ paddingTop: 5 }}
                renderItem={({ item, index }) => {
                  if (
                    item.includes('PNG') ||
                    item.endsWith('jpg') ||
                    item.endsWith('jpeg') ||
                    item.includes('png') ||
                    item.endsWith('JPEG') ||
                    item.endsWith('JPG')
                  ) {
                    return (
                      <ImageActionActivity 
                        url={item} 
                        type={'Assignment'}
                        index={index}
                        />
                    );
                  } else {
                    return (
                      <View style={{ flex: 1, paddingBottom: 10 }}>
                        <AttactmentActivity url={item} />
                      </View>
                    );
                  }
                }}
              />
            </Surface>
          )}

          {activity.tRemarks! && activity.tRemarks != '-' && (
            <View style={styles.remarksContainer}>
              <EntityInfoContainer
                instructorName={teacher ?? 'N/A'}
                role={t('teacher')}
              />

              <View
                style={[
                  styles.extraTextContainer,
                  selectedDirection != 'left'
                    ? {
                        alignItems: 'flex-end',
                        marginRight: 50,
                        marginLeft: 20
                      }
                    : {}
                ]}>
                <Text style={styles.extraTextHeading}>
                  {findWord(dynamicDictionary, 'Remarks')
                    ? findWord(dynamicDictionary, 'Remarks')
                    : 'Remarks'}
                  :
                </Text>
                <Text style={styles.bodyText}>{activity?.tRemarks}</Text>
              </View>
            </View>
          )}
          {activity?.sremarks && (
            <View style={styles.remarksContainer}>
              {selectedDirection === 'left' ? (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}>
                  <EntityInfoContainer
                    instructorName={userInfo?.name ?? 'N/A'}
                    role={t('student')}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(true);
                    }}>
                    <BlueEdit
                      width={20}
                      height={20}
                      style={styles.butonStyle}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(true);
                    }}>
                    <BlueEdit
                      width={20}
                      height={20}
                      style={styles.butonStyle}
                    />
                  </TouchableOpacity>
                  <EntityInfoContainer
                    instructorName={userInfo?.name ?? 'N/A'}
                    role={t('student')}
                  />
                </View>
              )}

              <View
                style={[
                  styles.extraTextContainer,
                  selectedDirection != 'left'
                    ? {
                        alignItems: 'flex-end',
                        marginRight: 50,
                        marginLeft: 20
                      }
                    : {}
                ]}>
                <Text style={styles.extraTextHeading}>
                  {findWord(dynamicDictionary, 'Notes')
                    ? findWord(dynamicDictionary, 'Notes')
                    : 'Notes'}
                  :
                </Text>
                <Text style={styles.bodyText}>{activity?.sremarks}</Text>
              </View>
            </View>
          )}

          {activity.type === 'Online Quiz' && (
            <ActivityActionButton
              label={'Solve Quiz'}
              color={Colors.quizBlue}
              icon={() => <Solve />}
              onPress={() => {
                Refe();
                setModalVisible(false);
                if (data != null) {
                  if (data.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                      if (data[i].name.includes(activity.name)) {
                        navigation.navigate('quiz', {
                          alert: data[i],
                          quizName: activity.name,
                          teachername: teacher as string,
                          submissionDate: activity.toDate,
                          course: course as string,
                          dp: dp as string,
                          from: 'Course'
                        });
                        count++;
                      }
                    }
                  }
                }

                if (count == 0) {
                  var message = 'Quiz not started yet';
                  var convertMessage = findWord(dynamicDictionary, message)
                    ? findWord(dynamicDictionary, message)
                    : message;
                  ToastAndroid.show(
                    convertMessage ?? message,
                    ToastAndroid.SHORT
                  );
                }
              }}
            />
          )}

          {activity?.remarksId && activity?.aUpload && (
            <View>
              {!activity?.sremarks ? (
                <View style={{ marginTop: 10 }}>
                  <ActivityActionButton
                    label={t('addNote')}
                    color={Colors.darkGreen}
                    icon={() => <Note />}
                    onPress={() =>
                      setModalVisible(true)
                    }
                  />
                </View>
              ) : null}
            </View>
          )}
          {activity?.aUpload  && (
            <View style={{ marginTop: 10 }}>
              {name != undefined ? (
                <View style={styles.justifyView}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.txtS}>{name}</Text>
                  </View>
                  <View style={styles.justifyViewinner}>
                    {!result ? (
                      <TouchableOpacity
                        onPress={() => {
                          handleRefresh();
                          openDoc();
                        }}>
                        <BlueView width={20} height={20} />
                      </TouchableOpacity>
                    ) : null}

                    <TouchableOpacity
                      onPress={() => {
                        editFile();
                      }}>
                      <BlueEdit
                        width={20}
                        height={20}
                        style={styles.butonStyle}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <ActivityActionButton
                  label={t('uploadFile')}
                  color={Colors.secondary}
                  icon={() => <DocumentUpload />}
                  onPress={() => setUploadModalVisible(true)}
                />
              )}
            </View>
          )}
        </View>
      </ScrollView>
      {modalVisible ? (
        <UpdateNoteModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          title={activity?.name}
          note={activity?.sremarks}
          activity={activity}
        />
      ) : null}
      {uploadModalVisible ? (
        <UploadFileModal
          modalVisible={uploadModalVisible}
          setModalVisible={setUploadModalVisible}
          title={activity?.name}
          note={activity?.sremarks}
          activity={activity}
          setName={setName}
          refetch={props.route.params.refetch}
          setResult={setResult}
        />
      ) : null}
    </Screen>
  );
};

export default ActivityDetails;
