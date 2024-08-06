export interface EditModalProps {
    setClicked: (visible: boolean) => void;
    modalVisible?: boolean;
    setModalVisible: (visible: boolean) => void;
    titles: any,
    details: any,
    classID:number,
    classForumID:number
    allow_update:Boolean
    allow_comment:string
    published:string
  }
  