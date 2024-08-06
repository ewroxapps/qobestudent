export interface CurrentCourseProps {
  course: ICourse;
  setModalVisible: (visible: boolean) => void;
  setSelectedCourse: (index: ICourse) => void;
}
