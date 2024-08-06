export interface editProps{
    saveButton?: boolean;
    setSaveButton: (visible: boolean) => void;

    editButton?: boolean;
    setEditButton: (visible: boolean) => void;

    data:IQuizDetailsResponse
    id:number
    qid:number

    textValue:string [] | string
    setTextValue: (string: string) => void;

    refetch:() => void;
    pageCount:number

    setValue: (visible: string) => void;

    selectedCheckboxes: { [label: string]: boolean }
    SetSelectedCheckboxes: {(updater: (prevState: { [label: string]: boolean }) => { [label: string]: boolean }): void;}
  
    isSuccess:Boolean
    
    submission: boolean;
    setSubmission: (submission: boolean) => void;
}