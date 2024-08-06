export interface errorModalProps{
    modalVisible?: boolean;
    setModalVisible: (visible: boolean) => void;
    errorHeader:string
    errorText:string
}