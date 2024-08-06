type IClassActivity = {
  id: number;
  date: string;
  allowSolveAssignment:boolean
  name: string;
  type: string;
  obtained: string;
  total: string;
  soleveAssignment: boolean;
  tUpload?: string;
  uUpload?: {
    path: string;
    name: string;
    description: string;
  } | undefined;
  uQuestion?: string[];
  tRemarks?: string;
  uRemarks?: string;
  aUpload?: boolean;
  toDate:string;
  sremarks?: string;
  remarksId?: string;
  subActivities?: ISubActivities[];
  plo_base:Boolean
};
type Answers = {
  [key: string]: string | string[];
}
  type ISubActivities={
    name:string;
    question:string;
    weight:string;
    maxmarks:string;
    obtained:string;
    clos:string[]
  };

  type IClassCqi={
    doc_no:string,
    doc_date:string,
    status:string,
    originator:string,
    car_ref:string,
    problem:string,
    clos:string
  };

  type ICLOs={
    name:string,
    classroom_name:string,
    semester_name:string,
    course_id:string,
    classroom_id:string,
    clo_code:string,
    id:string,
    clo_desc:string,
    per:string,
    plo:string,
    clo_id:string,
    clo_val:number
  }


  type ICLOsAttainment={
    avg:number
    code:string
    desc:string
    id:string
    max:number
    min:number
    myvalue:number
  };

  type IAlert={
    activities:IActivities[],
    surveys:String[],
    courseRegister:Boolean
  }

  type IActivities={
    class_room_id: number,
    name: string,
    upload_fr_date: string,
    upload_to_date: string
  }

  type PlosDetails={
    id: string;
    semester: string;
    course: string;
    course_id: string;
    name: string;
    classroom_id: string;
    credithr: string;
    kpi: string;
    per350: number | string;
    per351: number | string;
    per352: number | string;
    per353: number | string;
    per354: number | string;
    per355: number | string;
    per356: number | string;
    per357: number | string;
    per358: number | string;
    per359: number | string;
    semestershow: string;
  }


  type PLOData = {
    [key: string]: PlosDetails[];
  }

type ICourse = {
  id: number;
  name: string;
  url?: string;
  url1?: string;
  url2?: string;
  url3?: string;
  teacher_id?: number;
  teacher: string;
  teacherdp?: string;
  course?: string;
  isOnline?: number;
  onlineStatus?: number;
  vroom_id?: string;
  clocount?: number;
  semester?: string;

};

type ICourseDetailsResponse = {
  total_lecture: number;
  total_present: number;
  present_percentage: number;
  activities: IClassActivity[];
  remarks?: string;
  grade?: string;
  gpa?: string;
};

type PLOGraph={
  plo_i:string;
  plo_code: string,
  value: number
}
type IUpdateNotesRequest = {
  id: number | string;
  notes: string;
};

type IUploadFileRequest = {
  id: number | string;
  file: FormData;
};

type IVideoMaterial = {
  video: string;
  thumbnail: string;
  description: string;
};

type IClassMediaResponse = IVideoMaterial[];

type IClassPlan = {
  id: string | number;
  name: string;
  subject: string;
  from_date: string;
  to_date: string;
  topics: string;
  comments: string;
  activities: string[];
  clos: string[];
  attachment_count: number | string;
};

type IClassPlansResponse = IClassPlan[];

type IResource = {
  filename: string;
  description: string;
  path: string;
  type: string;
  cdate: string;
};

type Suverys={
  survey_id: number, 
  uid: string
}
type SurveyData ={
  success: boolean;
  data: {
    survey_name: string;
    notes: string;
    teacher: string;
    course: string;
    sections: string;
    questions: {
      [section: string]: Question[];
    };
  };
}

type Question = {
  id: number;
  head: string;
  question: string;
  required: string;
  type: string;
  choices: { [key: string]: string };
}

type PlosDetails={
  plo:string,
 learning_type:string,
 level:string,
 emphasis:string
};

type Transcript={
  name:string,
  semster_id:number
}

type IClassPlanDetail = {
  id: string | number;
  name: string;
  subject: string;
  from_date: string;
  to_date: string;
  topics: string;
  comments: string;
  activities: string[];
  clos: string[];
  resources: IResource[];
};

type IClassPlanDetailResponse = IClassPlanDetail[];

type IResourcesResponse = IResource[];


type Course = {
  course_id: number;
  label: string;
  disabled: boolean;
  course_selected: string;
  classroom_selected: number | null;
  classrooms: Classroom[];
  [key: string]: any; // Add index signature
};

type Classroom = {
  id: number;
  name: string;
  teacher: string;
  section: string;
  timing: string;
}

type Registration = {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  courses: Course[][];
}

type RegistrationData ={
  classroom_base_reg: string;
  regMst: Registration[];
  regCourseDtl: Record<string, Record<string, Course[]>>;
}

type Comments={
  allow_update: boolean;
  comment: string;
  comment_by: string;
  comment_when: string;
  dp: string;
  id: number;
  img: string | null;
}


type MyCourseRegistration= {
  courseRegisteration: number; 
  courseID: number;
}

type MyClassroom= {
  courseId: number;
  classroom: Classroom; 
}

type University={
  uuid:string
  name:string
  logo:string
}