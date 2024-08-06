import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useAppSelector } from '../../../../Hooks';
import { useQuizQuestionQuery } from '../../../../RTK/Api/CourseApi';
import { userCoursesSelector } from '../../../../Selectors/UserSelector';
import QuizDetail from '../QuizDetail';
import styles from './styles';
import { quizAlertProps } from './types';
const QuizAlert = (props: quizAlertProps) => {
  const userCourses = useAppSelector(userCoursesSelector);
  const { data, refetch,isFetching } = useQuizQuestionQuery({ id: props.data.id || 0 });


  var storeDP: String | undefined;
  var teacherName: String | undefined;
  var course: String | undefined;
  var name: String | undefined;
  function FindingTeacherDp() {
    if (userCourses && userCourses?.length > 0) {
      for (let i = 0; i < userCourses.length; i++) {
        if (props.data?.name.includes(userCourses[i]?.teacher)) {
          storeDP = userCourses[i].teacherdp;
          teacherName = userCourses[i].teacher;
        }

        if (props.data.name.includes(userCourses[i].name)) {
          course = userCourses[i].course;
          name = userCourses[i].name;
        }
      }
    }

    if (storeDP != null) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    FindingTeacherDp()
  },[data]);

  return (
    <View style={styles.container}>
      {FindingTeacherDp() ? (
        <QuizDetail
          alert={props.data}
          instructorProfile={storeDP}
          teacherName={teacherName}
          course={course}
          name={name}
          date={data?.activity?.to_time}
          activityname={data?.activity?.activity_name}
          isSuccess={data?.success}
          refetch={refetch}
          isFetch={isFetching}
        />
      ):null}
    </View>
  );
};

export default QuizAlert;
