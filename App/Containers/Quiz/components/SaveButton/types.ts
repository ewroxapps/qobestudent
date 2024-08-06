export interface saveButton {
    saveButton?: boolean;
    setSaveButton: (visible: boolean) => void;

    editButton?: boolean;
    setEditButton: (visible: boolean) => void;

    data:IQuizDetailsResponse
    pageCount:number

    radioValue:string
    setRadioValue: (visible: string) => void;

    setErrorMessageHeader: (visible: string) => void;
    setErrorMessage: (visible: string) => void;

    myErrorModal:boolean
    setMyErrorModal: (visible: boolean) => void;

    id:number
    qid:number

    refetch:() => void;

    textValue:string [] | string
    setTextValue: (string: string) => void;

    selectedCheckboxes: { [label: string]: boolean }
    SetSelectedCheckboxes: {(updater: (prevState: { [label: string]: boolean }) => { [label: string]: boolean }): void;}
    
    isSuccess:Boolean
    
    submission: boolean;
    setSubmission: (submission: boolean) => void;

}