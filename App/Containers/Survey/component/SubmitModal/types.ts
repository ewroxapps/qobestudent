
export interface submissionProps{
    modalVisible?: boolean;
    setModalVisible: (visible: boolean) => void;
    answers: Array<any>;
    questionId: Array<any>;
    totalQuestion:number
    code:string
    refetch:() => void;
}