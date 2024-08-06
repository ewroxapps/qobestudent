
//Live
//const BASE_URL = `https://sapi.qualityobe.com/`;
//Stagging
const BASE_URL = `https://ssapi.qualityobe.com/`;
const TABLE_ROWS = 10;
const DEVICE_PLATFORM = 'mobile';
let  answerArray: any[] = []
let surveyArray: any[] = []


function setSuvey(ans:any[]) {
  answerArray = ans;
}

function getSurvey() {
  return answerArray;
}

function setUrl(ans:any[]) {
  answerArray = ans;
}

function getUrl() {
  return answerArray;
}

const END_POINTS = {
  STUDENT: 'student',
  AUTHENTICATE: `student/authenticate`,
  PROFILE: 'profile',
  CURRENT_CLASSES: 'currentclasses',
  UP_NEXT_CLASSES: 'upnextclasses',
  STATS: 'stats',
  TIMETABLE: 'timetable',
  TIMETABLE_SINGLE: 'timetablesingle',
  CLASS_VIEW: 'classview',
  CLASS_TIMETABLE: 'classtimetable',
  CLASS_ACTIVITY_NOTES: 'classactivitynotes',
  CLASS_ACTIVITY_UPLOAD: 'classactivityupload',
  CLASS_LIST: 'classlist',
  CLASS_MEDIA: 'classmedia',
  CLASS_PLANS: 'classplans',
  CLASS_PLAN: 'classplan',
  CLASS_RESOURCES: 'classresources',
  CHANGE_PASSWORD: 'changepassword',
  QUIZ_ALERT:'quizalert',
  QUIZ_QUESTION:'quizquestions',
  QUIZ_ANSWER:'quizanswer',
  QUIZ_SUBMIT:'quizsubmit',
  ALERT:'alerts',
  CLASS_ATTENDANCE:'classattendance',
  CLASS_FORUMS:'classforums',
  CLASS_FORUM:'classforum',
  CREATE_CLASS_FORUM:'createclassforum',
  UPDATE_CLASS_FORUM:'updateclassforum',
  DELETE_CLASS_FORUM:'deleteclassforum',
  COMMENT_CLASS_FORUM:'commentclassforum',
  UPDATE_COMMENT_FORUM:'updatecommentclassforum',
  DELETE_COMMENT_FORUM:'deletecommentclassforum',
  CLASS_CLO:'classclos',
  CLASS_CLO_ATTAINMENT:'classcloattainment',
  CLASS_CQI:'classcqi',
  CLASS_PLO_ATTAINMENT:'classploattainment',
  CLO_ATTAINMENT:'cloattainment',
  PLO_ATTAINMENT:'ploattainment',
  PLO_ATTAINMENT_GRAPH:'ploattainmentgraph',
  OBE_TRANSCRIPT_LIST:'obetranscriptlist',
  TRANSCRIPT:'getobetranscript',
  SURVEY:'getsurvey',
  SUBMIT_SURVER:'surveysubmit',
  ALL_COURSE:'getcourseregistration',
  SAVE_COURSE_REGISTERATION:'savecourseregistration',

    //complaint
    USER_COMPLAINTS:'complaints',
    COMPLAINT_CHATS:'complaint',
    COMMENT_COMPLAINT:'commentcomplaint',
    GET_COMPLAINTS: 'getcomplaintcats',
    CREATE_COMPLAINT :'createcomplaint',
    DELETE_COMPLAINT:'deletecomplaint',

    //language
    GET_LANGUAGES:'getlangs',
    GET_TRANSLATION:'gettranslation',

    //university
     GET_UNI_LIST:'get-university-list',
     UNI_INFO:'get-university-info'

};

const CACHE_TAGS = {
  AUTH: 'auth',
  USER: 'user',
  COURSE: 'course'
};

const API_METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST'
};

export {
  API_METHODS, BASE_URL, CACHE_TAGS,
  DEVICE_PLATFORM, END_POINTS, TABLE_ROWS, getSurvey, getUrl,
  setSuvey, setUrl, surveyArray
};

