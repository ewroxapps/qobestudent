import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';
import { BASE_URL } from '../../../../Config/Api';
import { useAppSelector } from '../../../../Hooks';
import { useSurveyQuery } from '../../../../RTK/Api/CourseApi';
import { userCoursesSelector } from '../../../../Selectors/UserSelector';
import { Images } from '../../../../Themes';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import style from './styles';
import { myAlert } from './types';
const SurveyAlertDetails = (props: myAlert) => {
  const { data, refetch } = useSurveyQuery({ id: props.uid });
  const userCourses: any = useAppSelector(userCoursesSelector);
  const navigation = useNavigation<IHomeNavigationProp>();
  var storeDP: String | undefined;
  const { dynamicDictionary, selectedDirection } = useLanguage();
  function FindingTeacherDp() {
    if (userCourses && userCourses?.length > 0 && data != null) {
      for (let i = 0; i < userCourses.length; i++) {
        if (data?.data?.teacher.includes(userCourses[i]?.teacher)) {
          storeDP = userCourses[i]?.teacherdp;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  return (
    <View>
      {data?.success ? (
        <View style={style.container}>
          {data?.data?.survey_name != null && (
            <View>
              <Text style={style.textStyles}>{data?.data?.survey_name}</Text>
              <View style={style.horizontalLine} />
            </View>
          )}

          <View style={style.leftContainer}>
            {selectedDirection === 'left' ? (
              <View>
                {FindingTeacherDp() ? (
                  <Image
                    source={{
                      uri: `${BASE_URL}${storeDP}`
                    }}
                    defaultSource={Images.profilePlaceholder}
                    style={style.profile}
                  />
                ) : (
                  <Image
                    source={Images.profilePlaceholder}
                    style={style.profile}
                  />
                )}
              </View>
            ) : null}

            <View style={[style.topTextContainer,
            selectedDirection!='left' ?{
              alignItems:'flex-end'
            }:{}
            ]}>
              <View style={{ flexDirection: 'column' }}>
                {data?.data?.course ? (
                  <Text style={[style.classLabel,selectedDirection!='left' ?{
                    textAlign:'right', marginRight:10
                  }:{}]} numberOfLines={1}>
                    {data?.data?.course}
                  </Text>
                ) : null}

                {data?.data?.teacher ? (
                  <Text style={[style.instructorName,
                    selectedDirection!='left' ?{
                      textAlign:'right', marginRight:10
                    }:{}
                  ]}>
                    {data?.data?.teacher}{' '}
                  </Text>
                ) : (
                  <Text style={style.instructorName}>{data?.data?.for} </Text>
                )}
              </View>
            </View>

            {selectedDirection != 'left' ? (
              <View>
                {FindingTeacherDp() ? (
                  <Image
                    source={{
                      uri: `${BASE_URL}${storeDP}`
                    }}
                    defaultSource={Images.profilePlaceholder}
                    style={style.profile}
                  />
                ) : (
                  <Image
                    source={Images.profilePlaceholder}
                    style={style.profile}
                  />
                )}
              </View>
            ) : null}
          </View>

          <TouchableOpacity
            onPress={() => {
              if (data?.success) {
                navigation.navigate('survey', {
                  id: props.uid,
                  data: data,
                  refetch: refetch
                });
              } else {
                var message = 'Survey is already filled';
                var convertMessage = findWord(dynamicDictionary, message)
                  ? findWord(dynamicDictionary, message)
                  : message;
                ToastAndroid.show(
                  convertMessage ?? message,
                  ToastAndroid.SHORT
                );
              }
            }}>
            <View style={style.submit}>
              <Text style={style.start}>
                {findWord(dynamicDictionary, 'Start Survey')
                  ? findWord(dynamicDictionary, 'Start Survey')
                  : 'Start Survey'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default SurveyAlertDetails;
