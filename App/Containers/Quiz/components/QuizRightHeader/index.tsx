import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import InfoCircle from '../../../../Assets/SVGs/InfoCircle';
import QuizDetailsModal from '../QuizDetailsModal';
import { HeaderQuizProps } from './types';
const QuizRightHeader = (props: HeaderQuizProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      {props.success ? (
        <TouchableOpacity
          style={{ flexDirection: 'row', paddingLeft: 5, paddingRight: 5, right:15 }}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <InfoCircle/>
        </TouchableOpacity>
      ) : null}

      {modalVisible ? (
        <QuizDetailsModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          storeDP={props.dp}
          to_time={props.submissionDate}
          course={props.course}
          teacherName={props.teachername}
          activity={props.quizName}
        />
      ) : null}
    </View>
  );
};

export default QuizRightHeader;
