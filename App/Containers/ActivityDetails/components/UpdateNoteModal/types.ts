export interface CourseDetailsModalProps {
  modalVisible?: boolean;
  setModalVisible: (visible: boolean) => void;
  title: string;
  note?: string;
  activity: IClassActivity;
}
