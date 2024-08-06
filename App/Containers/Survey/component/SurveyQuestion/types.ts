export interface SurveyQuestionProps {
    question:Question
    section:string
    previousSections:string
    index:number 
    totalQuestion:number

    singleChoice?: string|null;
    setSingleChoice: React.Dispatch<React.SetStateAction<string | null>>;


    multipleChoices: Array<Array<string>>;
    setMultipleChoices: React.Dispatch<React.SetStateAction<Array<Array<string>>>>;

    text:string;
    setText: React.Dispatch<React.SetStateAction<string>>;

    para:string;
    setPara: React.Dispatch<React.SetStateAction<string>>;

    listChoice?: string|null;
    setListChoice: React.Dispatch<React.SetStateAction<string | null>>;
 
    focus?: boolean;
    setFocus: (visible: boolean) => void;

    numberChoice:string
    setNumberChoice: React.Dispatch<React.SetStateAction<string>>;
 
    answers: Array<any>;
    setAnswers: React.Dispatch<React.SetStateAction<Array<any>>>;

    isClicked?: boolean;
    setisClicked: (visible: boolean) => void;

   myindex:number
   error:boolean

   questionId: Array<any>;
   setQuestionId: React.Dispatch<React.SetStateAction<Array<any>>>;

   selectedChoices: { [key: string]: string | null }; // Add this line for selected choices
   setSelectedChoices: React.Dispatch<
     React.SetStateAction<{ [key: string]: string | null }>
   >;
   }
   