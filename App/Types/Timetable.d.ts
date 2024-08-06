type ILecture = {
  time: string;
  course: string;
  teacher: string;
  status: string;
  present?: string;
  class?: string;
  name: string;
  topic?: string;
  isonline?: string;
  slot?: number;
  type?: string;
  teacherDp?: string;
};

type ITimetable = {
  [key: string]: ILecture[];
};

type IClassLecture = {
  date: string;
  from_time: string;
  to_time: string;
  topic: string;
  room: string;
  teacher: string;
  online: string;
};

type IClassTimetableResponse = IClassLecture[];
