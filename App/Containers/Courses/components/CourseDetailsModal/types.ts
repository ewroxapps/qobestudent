export interface CourseDetailsModalProps {
  modalVisible?: boolean;
  setModalVisible: (visible: boolean) => void;
  course?: ICourse;
}
