import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import STimer from '../../../../Assets/SVGs/STimer';
import { BASE_URL } from '../../../../Config/Api';
import { Colors, Fonts, Images } from '../../../../Themes';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import style from './styles';
const QuizDetail = (props: any) => {
  const navigation = useNavigation<IHomeNavigationProp>();
  const [isVisible, setIsVisible] = useState(false);
  const { dynamicDictionary, selectedDirection } = useLanguage();
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
            style={[
              style.modalClose,
              selectedDirection != 'left' ? { alignItems: 'flex-start' } : {}
            ]}
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
      <View>
        <Text
          style={{
            ...Fonts.style.medium,
            fontFamily: 'Inter',
            color: Colors.black,
            paddingRight: 10
          }}>
          {props.activityname}
        </Text>
        <View
          style={{ flex: 0, height: 1, backgroundColor: Colors.backgroundGrey }}
        />
      </View>

      <View style={style.leftContainer}>
        {selectedDirection === 'left' ?(
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
        ):null

        }
        
        <View style={[style.topTextContainer,]}>
          <View style={ [selectedDirection==='left'?{ }:{alignItems:'flex-end'}]}>
            <Text style={style.classLabel} numberOfLines={1}>
              {' '}
              {props.course}
            </Text>
            <Text style={style.instructorName} numberOfLines={1}>
              {' '}
              {props.teacherName}
            </Text>
            <Text
              style={[
                style.submissionDate,
                selectedDirection != 'left' ? { marginRight: 10 } : {}
              ]}
              numberOfLines={1}>
              {' '}
              {findWord(dynamicDictionary, 'Submission Date')
                ? findWord(dynamicDictionary, 'Submission Date')
                : 'Submission Date'}
            </Text>
            <Text style={style.instructorName} numberOfLines={1}>
              {' '}
              {props.date}
            </Text>
          </View>
        </View>

        {selectedDirection != 'left' ?(
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
        ):null

        }
      </View>

      <TouchableOpacity
        key={props.alert.id}
        onPress={() => {
          props.refetch();
          console.debug(props.isSuccess)
          if (props.isSuccess) {
            navigation.navigate('quiz', {
              alert: props.alert,
              quizName: props.activityname,
              teachername: props.teacherName,
              submissionDate: props.date,
              course: props.course,
              dp: props.instructorProfile,
              from: 'Home'
            });
          } else {
            setIsVisible(!isVisible);
          }
        }}>
        <View style={style.submit}>
          {selectedDirection === 'left' ? <STimer /> : null}

          <Text style={style.start}>
            {findWord(dynamicDictionary, 'Start')
              ? findWord(dynamicDictionary, 'Start')
              : 'Start'}
          </Text>

          {selectedDirection != 'left' ? <STimer /> : null}
        </View>
      </TouchableOpacity>
      {isVisible ? renderNoCurrentCourses() : null}
    </View>
  );
};

export default QuizDetail;
