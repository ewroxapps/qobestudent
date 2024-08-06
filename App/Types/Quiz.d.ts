type IQuizDetailsResponse ={
    success:Boolean;
      activity:{
        class_name:string;
        info:string;
        class_id:number;
        activity_id:number;
        activity_name:string;
        notes:string;
        from_time:string;
        to_time:string;
        quiz_id:number
      };
      quizDetail: IQuizDetails[];
    };
    
    type IQuizDetails ={
        id:number;
        question:string;
        q_img: String;
        type: string;
        choices?: string[];
        answer: string[];
        ans_img?:String | undefined
    
    };
  
  
    type IQuizAlert={
      activity_name:string;
      id:number;
      name:string;
    };
    
    type IQuizAnswer ={
        id:number,
        qid:number,
        answer:string,
        ans_img:File
    };
    
    type IComment={
      id:number,
      comment:string
    }
  
  
  
    type IQuizSubmit ={
        id:boolean
    }
    
  
    type IClassQuizResponse = IQuizAlert[]; 