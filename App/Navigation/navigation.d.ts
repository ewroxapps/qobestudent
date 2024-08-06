type CompositeScreenProps<T, R> =
  import('@react-navigation/native').CompositeScreenProps<T, R>;
type NavigatorScreenParams<T> =
  import('@react-navigation/native').NavigatorScreenParams<T>;
type RouteProp<T, R> = import('@react-navigation/native').RouteProp<T, R>;
type ParamListBase =
  import('@react-navigation/routers/src/types').ParamListBase;
type StackNavigationProp<T, R> =
  import('@react-navigation/stack').StackNavigationProp<T, R>;
type StackScreenProps<T, R> =
  import('@react-navigation/stack').StackScreenProps<T, R>;
type BottomTabScreenProps<T, R> =
  import('@react-navigation/bottom-tabs').BottomTabScreenProps<T, R>;
type urlStringProp = {
  url: string;
}
type HomeTabParamList = {
  HomeStack: undefined;
  CoursesStack: undefined;
  Timetable: undefined;
  'OBE-Stat': undefined;
  More: undefined;
};

type PrimaryStackParamList = {
  Home: undefined;
  Dashboard: NavigatorScreenParams<HomeTabParamList>;
  Login: undefined;
};
type ShowImageParamList = {
  Url: undefined;
};
type QOBEStackParamList={
  QOBE:undefined
}
type HomeStackParamList = {
  Home: undefined;
  ChangePasswordPage: undefined;
  QuizList:{
    quizAlert:IQuizAlert
   }
  AssignmentList:{
    assignmentAlert:any
 }  
  Quiz:{
    alert: IQuizAlert;
  }
  ShowImage:{
    url:String
    type:String
   }
   CourseDetails: {
    course: ICourse; 
  };
  
  ActivityDetails: {
    activity: IClassActivity;
    teacher?: string
    refetch:() => void;
    course:string|undefined
    dp:string
  };
  AttendanceDetails:{
    id:number
  };
  Survey:{
    surveys:Suverys[]
    refetch:boolean
  };
  SurveyDetail:{
    data:SurveyData
    code:String
  };
  CourseRegisteration:{

  };
  CourseRegisterationList:{
    data:Course[]
    classroom:Classroom[]
    ifClassRoom:string
  };

  AppInfo:{

  };
  ContactUS:{

  };
  ReportContact:{
    
  };
  SloAttainments:{

  },
  PLOAttainment:{

  },
  PLOGraph:{

  },
  OBETranscript:{

  },
  AlertActivity:{
    from:string
    data:any[]
    refetch:() => void;
    isFetch:Boolean
    
  },
  ActivityDetails: {
    activity: IClassActivity;
    teacher?: string
    refetch:() => void;
    course:string|undefined
    dp:string
  };
  quiz:{
    alert: IQuizAlert;
    quizName:string;
    teachername:string ;
    submissionDate:string;
    course:string
    dp:string
    from:string
  },
  survey:{
    id:string
    data:SurveyData
    refetch:() => void;
  }

  courseRegisteration:{
    
  }

  confirmRegisteration:{
    selectedRadioButtons:MyClassroom[],
    check:Course[],
    unCheck:Course[],
    isClassRooms:string,
    courseReg:MyCourseRegistration[]
    courseUnReg:MyCourseRegistration[],
    refetch:() => void;
    
  },

  complaint:{
    
  },
  ComplaintChat:{
    id:number
  };
  ComplaintUserDetail:{
    data:IComplaintResponse,
    dp:String
    name:String
  }
};


type CoursesStackParamList = {
  Courses: {
    initialRoute?: string;
  };
  CourseDetails: {
    course: ICourse;
  };
  Resources: {
    courseId: string | number;
    course: ICourse;
  };
  ClassTimetable: {
    classId: number;
  };
  ActivityDetails: {
    activity: IClassActivity;
    teacher?: string
    refetch:() => void;
    course:string|undefined
    dp:string
  };
  VideoPlayer: {
    videoItem: IVideoMaterial;
  };
  VideoDetailsPage: {
    videoItem: IVideoMaterial;
  };
  Quiz:{
    alert: IQuizAlert;
  };
  ShowImage:{
   url:String
   type:String
  };
  AttendanceDetails:{
    id:number
  };
  DisussionForum:{
    course:string | undefined
    id:number
  };
  CommentForum:{
    id:number,
    courseName:String
  },
  CourseCLO:{
    id:number,
    name:string | undefined
  }
  CourseCLOAttainment:{
    id:number,
    name:string | undefined
  }
  CourseCQI:{
    id:number,
    name:string | undefined
  }
  CoursePLO:{
    id:number,
    name:string | undefined
  },
  PLOAttainment:{

  },
  PLOGraph:{

  },
  OBETranscript:{

  },
  AttendanceDetail:{
    id:number
  },
  Forums:{
    id:number,
    name:string
  },
  CommentForum:{
    id:number,
    courseName:String
  },
  quiz:{
    alert: IQuizAlert;
    quizName:string;
    teachername:string ;
    submissionDate:string;
    course:string
    dp:string
    from:string
  }
  
};

type ResourcesTabParamList = {
  VideoMaterial: undefined;
  SectionTeachingPlan: undefined;
  OtherResources: undefined;
};

type VideoMaterialsStackParamsList = {
  VideosPage: undefined;
  VideoDetailsPage: {
    videoItem: IVideoMaterial;
  };
};

type SectionTeachingPlanStackParamsList = {
  PlansListPage: undefined;
  PlanDetailsPage: {
    plan: IClassPlan;
  };
};

type HomeTabScreenProp = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, 'Home'>,
  { navigation: StackNavigationProp<PrimaryStackParamList, 'Home'> }
>;

type HomeScreenProp = StackScreenProps<PrimaryStackParamList, 'Home'>;

interface RootStackParamList extends ParamListBase {
  primaryStack: PrimaryStackParamList;

}

type IHomeNavigationProp = StackNavigationProp<HomeStackParamList, 'HomePage'>;

type ICoursesNavigationProp = StackNavigationProp<
  CoursesStackParamList,
  'CoursesPage'
>;

type IVideoMaterialNavigationProp = StackNavigationProp<
  VideoMaterialsStackParamsList,
  'VideoMaterialPage'
>;

type ISectionTeachingPlanNavigationProp = StackNavigationProp<
  SectionTeachingPlanStackParamsList,
  'SectionTeachingPlanPage'
>;

type IDetailsNavigationProp = StackNavigationProp<
  'ActivityDetails'
>;
