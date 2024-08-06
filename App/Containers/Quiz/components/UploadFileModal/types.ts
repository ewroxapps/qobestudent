export interface CourseDetailsModalProps {
    modalVisible?: boolean;
    setModalVisible: (visible: boolean) => void;
    title: any;
    id:number
    qid:any,
    upload?: boolean;
    setUpload:(visible: boolean) => void;
    refetch:() => void;
  }
  