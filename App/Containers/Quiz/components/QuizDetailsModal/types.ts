export interface CourseDetailsModalProps {
    modalVisible?: boolean;
    setModalVisible: (visible: boolean) => void;
    storeDP:any,
    to_time:any,
    course:String | undefined
    teacherName:String | undefined,
    activity:any
  }
  