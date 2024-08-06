import React from 'react';
import { View } from 'react-native';
import { useAppSelector } from '../../../../Hooks';
import { userCoursesSelector } from '../../../../Selectors/UserSelector';
import AssignmentDetails from '../AssignmentDetail';
import { assignmentAlertProps } from './types';
const AssigmentAlertDetails = (props: assignmentAlertProps) => {
  const userCourses = useAppSelector(userCoursesSelector);

  var storeDP: String | undefined;
  var teacherName: String | undefined;
  var course: String | undefined;
  var name: String | undefined;
  var selectedCourse: ICourse | undefined;

  function FindingTeacherDp() {
    if (userCourses && userCourses?.length > 0) {
      for (let i = 0; i < userCourses.length; i++) {
        if (props.data.class_room_id===userCourses[i].id) {
          selectedCourse = userCourses[i];
          storeDP = userCourses[i].teacherdp;
          teacherName = userCourses[i].teacher;
          course = userCourses[i].course;
          name = userCourses[i].name;
          return true
        }
      }
    }
  }

  return (
    <View style={{ }}>
      {FindingTeacherDp() && (
        <AssignmentDetails
          data={props.data}
          instructorProfile={storeDP}
          teacherName={teacherName}
          course={course}
          name={name}
          date={props.data.upload_to_date}
          activityname={props.data.name}
          selectedCourse={selectedCourse}
          refetch={props.refetch}
        />
      )}
    </View>
  );
};

export default AssigmentAlertDetails;
