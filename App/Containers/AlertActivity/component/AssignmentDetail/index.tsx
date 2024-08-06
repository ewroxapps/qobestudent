import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { BASE_URL } from '../../../../Config/Api';
import { useCourseDetailsQuery } from '../../../../RTK/Api/CourseApi';
import { Images } from '../../../../Themes';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import style from './styles';
import { amyprops } from './types';

const AssignmentDetails = (props: amyprops) => {
  const navigation = useNavigation<ICoursesNavigationProp>();
  var select: ICourse | undefined = props.selectedCourse;
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRefetch] = useState(false);
  const { refetch, data } = useCourseDetailsQuery({
    id: select?.id || 0
  });
  const { dynamicDictionary, selectedDirection } = useLanguage();
  useEffect(() => {
    getActivity();
    if (ref) {
      console.debug(ref);
      refetch();
    }
    setRefetch(false);
  });

  var activity: IClassActivity;
  function getActivity() {
    if (data != null) {
      if (data.activities != null) {
        var len = data.activities.length;
        for (let i = 0; i < len; i++) {
          if (data.activities[i].name.includes(props.activityname)) {
            activity = data.activities[i];
          }
        }
      }
    }
  }

  const renderNoCurrentCourses = () => {
    return (
      <Modal isVisible={isVisible} backdropOpacity={0.7}>
        <View style={style.modalContainer}>
          <Text style={style.modalText}>
            {findWord(dynamicDictionary, 'Assignment due date ended')
              ? findWord(dynamicDictionary, 'Assignment due date ended')
              : 'Assignment due date ended'}
          </Text>
          <TouchableOpacity
            style={[style.modalClose,selectedDirection != 'left' ?{
             alignItems:'flex-start'
            }:{}]}
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

  return (
    <View style={style.container}>
      <Text style={style.header}>{props.activityname}</Text>
      <View style={style.horizontalLine} />

      <View style={style.leftContainer}>
        {selectedDirection === 'left' ? (
          <View>
            {props.instructorProfile ? (
              <Image
                source={{
                  uri: `${BASE_URL}${props.instructorProfile}`
                }}
                defaultSource={Images.profilePlaceholder}
                style={style.profile}
              />
            ) : (
              <Image source={Images.profilePlaceholder} style={style.profile} />
            )}
          </View>
        ) : null}

        <View
          style={[
            style.topTextContainer,
            selectedDirection != 'left'
              ? {
                  alignItems: 'flex-end'
                }
              : {}
          ]}>
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={[
                style.classLabel,
                selectedDirection != 'left'
                  ? {
                      textAlign: 'right',
                      marginRight: 10
                    }
                  : {}
              ]}
              numberOfLines={1}>
              {' '}
              {props.course}
            </Text>
            <Text
              style={[
                style.instructorName,
                selectedDirection != 'left'
                  ? {
                      textAlign: 'right',
                      marginRight: 10
                    }
                  : {}
              ]}
              numberOfLines={1}>
              {' '}
              {props.teacherName}
            </Text>
            <Text
              style={[
                style.submissionDate,
                selectedDirection != 'left'
                  ? {
                      textAlign: 'right',
                      marginRight: 10
                    }
                  : {}
              ]}
              numberOfLines={1}>
              {' '}
              {findWord(dynamicDictionary, 'Submission Date')
                ? findWord(dynamicDictionary, 'Submission Date')
                : 'Submission Date'}
            </Text>
            <Text
              style={[
                style.instructorName,
                selectedDirection != 'left'
                  ? {
                      textAlign: 'right',
                      marginRight: 10
                    }
                  : {}
              ]}
              numberOfLines={1}>
              {' '}
              {props.date}
            </Text>
          </View>
        </View>

        {selectedDirection != 'left' ? (
          <View>
            {props.instructorProfile ? (
              <Image
                source={{
                  uri: `${BASE_URL}${props.instructorProfile}`
                }}
                defaultSource={Images.profilePlaceholder}
                style={style.profile}
              />
            ) : (
              <Image source={Images.profilePlaceholder} style={style.profile} />
            )}
          </View>
        ) : null}
      </View>

      <TouchableOpacity
        key={props.data.class_room_id}
        onPress={() => {
          refetch();
          console.debug(activity)
          if (activity != null) {
            navigation.navigate('ActivityDetails', {
              activity: activity,
              teacher: select?.teacher,
              refetch: refetch,
              course: '',
              dp: ''
            });
          } else {
            setIsVisible(!isVisible);
          }
        }}>
        <View style={style.submit}>
          <Text style={style.start}>
            {findWord(dynamicDictionary, 'Attempt')
              ? findWord(dynamicDictionary, 'Attempt')
              : 'Attempt'}
          </Text>
        </View>
      </TouchableOpacity>
      {isVisible ? renderNoCurrentCourses() : null}
    </View>
  );
};

export default AssignmentDetails;
