import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  RefreshControl,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Modal from 'react-native-modal';
import { Spinner } from '../../Components';
import { useOtherAlertQuery } from '../../RTK/Api/CourseApi';
import { useLanguage } from '../../Types/LanguageContext';
import { findWord } from '../../Utils/ParsingUtils';
import { AssignmentAlertDetail, SurveyAlertDetails } from './component';
import QuizAlert from './component/QuizAlert';
import style from './styles';
const AlertActivity = (props: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigation = useNavigation();
  const refetch = props.route.params.refetch;
  const isFetch = props.route.params.isFetch;
  const from = props.route.params.from;
  let data: any = null;
  const { dynamicDictionary, selectedDirection } = useLanguage();
  const {
    data: alert,
    refetch: alertRefetch,
    isFetching: alertFetch
  } = useOtherAlertQuery({});
  if (from === 'Quiz') {
    data = props.route.params.data as IQuizAlert;
  } else if (from === 'Survey') {
    data = props.route.params.data as Suverys;
  } else if (from === 'Assignment') {
    data = props.route.params.data as IActivities;
  }
  useEffect(() => {
    alertRefetch();
    refetch();
    if (props.route.params.data === null) {
      setIsVisible(true);
    }
  }, [isVisible]);

  if (isFetch) {
    return <Spinner />;
  }

  const renderNoCurrentCourses = () => {
    return (
      <Modal isVisible={isVisible} backdropOpacity={0.7}>
        <View style={style.modalContainer}>
          <Text style={style.modalText}>
            {findWord(dynamicDictionary, 'Quiz has ended!')
              ? findWord(dynamicDictionary, 'Quiz has ended!')
              : 'Quiz has ended!'}
          </Text>
          <TouchableOpacity
            style={[style.modalClose,selectedDirection!='left'?{alignItems:'flex-start'}:{}]}
            onPress={() => {
              setIsVisible(!isVisible);
              navigation.goBack();
            }}>
            <Text style={style.buttonClik}>
              {findWord(dynamicDictionary, 'Okay')
                ? findWord(dynamicDictionary, 'Okay')
                : 'Okay'}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  const onRefresh = () => {
    refetch();
    alertRefetch();
  };

  return (
    <View style={style.overallStyle}>
      <StatusBar backgroundColor="#FFFFFF" />
      {props.route.params.data != null ? (
        <FlatList
          refreshing={isFetch}
          refreshControl={
            <RefreshControl onRefresh={onRefresh} refreshing={false} />
          }
          data={props.route.params.data}
          style={{ marginTop: 20 }}
          renderItem={({ item }) => {
            {
              return (
                <View style={style.listItemContainer}>
                  {from === 'Survey' ? (
                    <SurveyAlertDetails
                      survey_id={item.survey_id}
                      uid={item.uid}
                    />
                  ) : null}

                  {from === 'Assignment' ? (
                    <AssignmentAlertDetail data={item} refetch={refetch} />
                  ) : null}

                  {from === 'Quiz' ? (
                    <QuizAlert
                      data={item}
                      refetch={refetch}
                      isFetch={isFetch}
                    />
                  ) : null}
                </View>
              );
            }
          }}
        />
      ) : (
        renderNoCurrentCourses()
      )}
    </View>
  );
};

export default AlertActivity;
