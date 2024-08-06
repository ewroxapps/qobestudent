export interface CourseDetailsModalProps {
  modalVisible?: boolean;
  setModalVisible: (visible: boolean) => void;
  title: string;
  note?: string;
  activity: IClassActivity;
  setName: React.Dispatch<React.SetStateAction<string | null>>;
  refetch:() => void;

  setResult: (visible: boolean) => void;
}
