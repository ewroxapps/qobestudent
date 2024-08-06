export interface questioncountProps{
    pageCount:number
    setPageCount: (count: number) => void;

    totalCount?:number
    isSuccess:Boolean
    data:IQuizDetailsResponse

    textValue:string [] | string
    setTextValue: (string: string) => void;
    
    refetch:() => void;

    saveButton?: boolean;
    setSaveButton: (saveButton: boolean) => void;

    editButton?: boolean;
    setEditButton: (editButton: boolean) => void;

    radioValue:string
    setRadioValue: (radioValue: string) => void;

    submission: boolean;
    setSubmission: (submission: boolean) => void;

    selectedCheckboxes: { [label: string]: boolean }
    SetSelectedCheckboxes: {(updater: (prevState: { [label: string]: boolean }) => { [label: string]: boolean }): void;}
    
}