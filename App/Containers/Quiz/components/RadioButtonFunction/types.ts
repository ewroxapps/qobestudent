export interface radioProps{
    data:IQuizDetailsResponse
    pageCount:number
    
    value:string
    setValue: (value: string) => void;

    setErrorMessageHeader: (visible: string) => void;
    setErrorMessage: (visible: string) => void;

    myErrorModal:boolean
    setMyErrorModal: (visible: boolean) => void;
}