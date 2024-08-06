export interface unselectProps{
    modalVisible?: boolean;
    setModalVisible: (visible: boolean) => void;

    selectedRadioButtons:MyClassroom[],
    check:Course[],
    unCheck:Course[],
    isClassRooms:string,
    courseReg:MyCourseRegistration[]
    courseUnReg:MyCourseRegistration[]

    refetch:() => void;
}