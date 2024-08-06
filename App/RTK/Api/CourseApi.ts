import { createApi } from '@reduxjs/toolkit/query/react';
import { API_METHODS, CACHE_TAGS, END_POINTS } from '../../Config/Api';
import { baseQuery } from './BaseApi';

const CourseApi = createApi({
  baseQuery,
  reducerPath: 'CourseApi',
  tagTypes: [CACHE_TAGS.COURSE],
  endpoints: builder => ({
    courseDetails: builder.query({
      query: ({ id }: { id: number }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_VIEW}?id=${id}`,
        method: API_METHODS.GET
      })
    }),

    classClos: builder.query({
      query: ({ id }: { id: number }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_CLO}?id=${id}`,
        method: API_METHODS.GET
      })
    }),

    classCloAttainment: builder.query({
      query: ({ id }: { id: number }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_CLO_ATTAINMENT}?id=${id}`,
        method: API_METHODS.GET
      })
    }),


    classCqi: builder.query({
      query: ({ id }: { id: number }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_CQI}?id=${id}`,
        method: API_METHODS.GET
      })
    }),

    classPloAttainment: builder.query({
      query: ({ id }: { id: number }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_PLO_ATTAINMENT}?id=${id}`,
        method: API_METHODS.GET
      })
    }),

    cloAttainment: builder.query({
      query: () => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLO_ATTAINMENT}`,
        method: API_METHODS.GET
      })
    }),

    ploAttainment: builder.query({
      query: () => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.PLO_ATTAINMENT}`,
        method: API_METHODS.GET
      })
    }),

    ploAttainmentGraph: builder.query({
      query: () => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.PLO_ATTAINMENT_GRAPH}`,
        method: API_METHODS.GET
      })
    }),

    obeTranscriptList: builder.query({
      query: () => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.OBE_TRANSCRIPT_LIST}`,
        method: API_METHODS.GET
      })
    }),

    survey: builder.query({
      query: ({ id }: { id: String }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.SURVEY}?code=${id}`,
        method: API_METHODS.GET,
      }),

    }),

    courseRegisteration: builder.query({
      query: () => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.ALL_COURSE}`,
        method: API_METHODS.GET
      })
    }),

    submitSurvey: builder.mutation<any, any>({
      query: ({ code, answerForEveryItemFromArry,arraySize,questionId }) => {
        const data = new FormData();
        for (let i = 0; i < arraySize; i++) {
          const answer = answerForEveryItemFromArry[i];
          const qid = questionId[i]
          data.append('answer['+qid+']', answer);
        }
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.SUBMIT_SURVER}?code=${code}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),


 
    fetchTranscript: builder.query<Blob, { id: number }>({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.TRANSCRIPT}?id=${id}`,
        method: API_METHODS.GET,
        responseHandler: async (response) => {
          const blob = await response.blob();
          return blob;
        },
      }),
      transformResponse: (response: Blob) => response, // Ensure response is handled as a Blob
    }),
    

    classForum: builder.query({
      query: ({ id }: { id: number }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_FORUMS}?id=${id}`,
        method: API_METHODS.GET
      })
    }),

    classForums: builder.query({
      query: ({ id }: { id: number }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_FORUM}?id=${id}`,
        method: API_METHODS.GET
      })
    }),


    createClassForum: builder.mutation<any, any>({
      query: ({ id, title, detail }) => {
        const data = new FormData();
        data.append('title', title);
        data.append('detail', detail);
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CREATE_CLASS_FORUM}?id=${id}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),

    updateClassForum: builder.mutation<any, any>({
      query: ({ id, title, detail }) => {
        const data = new FormData();
        data.append('title', title);
        data.append('detail', detail);
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.UPDATE_CLASS_FORUM}?id=${id}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),

    deleteClassForum: builder.mutation<any, any>({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.DELETE_CLASS_FORUM}?id=${id}`,
        method: API_METHODS.POST
      })
    }),



    addComments: builder.mutation<any, any>({
      query: ({ id, comment }) => {
        const data = new FormData();
        data.append('comment', comment);
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.COMMENT_CLASS_FORUM}?id=${id}`,
          method: API_METHODS.POST,
          body: data

        };

      },

    }),


    updateCommentForum: builder.mutation<any, any>({
      query: ({ id, comment }) => {
        const data = new FormData();
        data.append('comment', comment);
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.UPDATE_COMMENT_FORUM}?id=${id}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),

    deleteCommentForum: builder.mutation<any, any>({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.DELETE_COMMENT_FORUM}?id=${id}`,
        method: API_METHODS.POST
      })
    }),


    quizQuestion: builder.query<
      IQuizDetailsResponse,
      { id: number | string }
    >({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.QUIZ_QUESTION}?id=${id}`,
        method: API_METHODS.GET
      })
    }),

    classQuiz: builder.query({
      query: () => {
        return ({
          url: `${END_POINTS.STUDENT}/${END_POINTS.QUIZ_ALERT}`,
          method: API_METHODS.GET
        })
      }
    }),


    otherAlert: builder.query({
      query: () => {
        return ({
          url: `${END_POINTS.STUDENT}/${END_POINTS.ALERT}`,
          method: API_METHODS.GET
        })
      }
    }),



    quizAnswer: builder.mutation<any, IQuizAnswer>({
      query: ({ id, qid, answer, ans_img }) => {
        const body = new FormData();
        body.append('answer', answer);
          body.append('ans_img', {
            uri: ans_img[0].uri,
            name: ans_img[0].name,
            type: ans_img[0].type
          });
       
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.QUIZ_ANSWER}?id=${id}&qid=${qid}`,
          method: API_METHODS.POST,
          body: body

        }
      },

    }),

    quizSubmit: builder.mutation<any, any>({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.QUIZ_SUBMIT}?id=${id}`,
        method: API_METHODS.POST
      })
    }),

    classTimetable: builder.query<
      IClassTimetableResponse,
      { id: number | string }
    >({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_TIMETABLE}?id=${id}`,
        method: API_METHODS.GET
      })
    }),


    classAttendance: builder.query<any, any>({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_ATTENDANCE}?id=${id}`,
        method: API_METHODS.GET
      })
    }),



    updateNotes: builder.mutation<any, IUpdateNotesRequest>({
      query: ({ id, notes }) => {
        const data = new FormData();
        data.append('notes', notes);
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_ACTIVITY_NOTES}?id=${id}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),
    uploadFile: builder.mutation<any, any>({
      query: ({ id, file }) => {
        const data = new FormData();
        data.append('file', {
          uri: file[0].uri,
          name: file[0].name,
          type: file[0].type
        });
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_ACTIVITY_UPLOAD}?id=${id}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),
    videoMaterial: builder.query<IClassMediaResponse, { id: number | string }>({
      query: ({ id }) => {
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_MEDIA}?id=${id}`,
          method: API_METHODS.GET
        };
      }
    }),
    classPlans: builder.query<IClassPlansResponse, { id: number | string }>({
      query: ({ id }) => {
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_PLANS}?id=${id}`,
          method: API_METHODS.GET
        };
      }
    }),
    planDetails: builder.query<
      IClassPlanDetailResponse,
      { id: number | string }
    >({
      query: ({ id }) => {
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_PLAN}?id=${id}`,
          method: API_METHODS.GET
        };
      }
    }),

    submitRegisteration: builder.mutation<any, any>({
      query: ({  SelectedarraySize,
                 selectedClassroom,
                 selectedReg, 
                 ifClassRoom,

                 Unselectedarraysize,
                 UnselectedClassroom,
                 UnselectedReg,
                }) => {
        const data = new FormData();
        for (let i = 0; i < SelectedarraySize; i++) {
          const classroomids = selectedClassroom[i]
          const courseId = selectedReg[i].courseID
          const regs = selectedReg[i].courseRegisteration
          data.append('Courseregdtl['+regs+']['+courseId+'][course_id]', '1');
          if(ifClassRoom === '1')
          data.append('Courseregdtl['+regs+']['+courseId+'][class_room_id]', classroomids);
        }

        for (let i = 0; i < Unselectedarraysize; i++) {
          const classroomids = UnselectedClassroom[i]
          const courseId = UnselectedReg[i].courseID
          const regs = UnselectedReg[i].courseRegisteration
          data.append('Courseregdtl['+regs+']['+courseId+'][course_id]', '0');
          if(ifClassRoom === '1')
          data.append('Courseregdtl['+regs+']['+courseId+'][class_room_id]', classroomids);
        }
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.SAVE_COURSE_REGISTERATION}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),

    classResources: builder.query<IResourcesResponse, { id: number | string }>({
      query: ({ id }) => {
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_RESOURCES}?id=${id}`,
          method: API_METHODS.GET
        };
      }
    }),

    useComplaint: builder.query({
      query: (page) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.USER_COMPLAINTS}?page=${page}`,
        method: API_METHODS.GET
      })
    }),
    chatComplaint: builder.query({
      query: (id) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.COMPLAINT_CHATS}?id=${id}`,
        method: API_METHODS.GET
      })
    }),

    commentComplaint:  builder.mutation<any, any>({
      query: ({ id,filename,uri,message,types }) => {
        const data = new FormData();
      
        data.append('message', message);
        if(filename.length>0){
          data.append('file', {
            uri: uri,
            name: filename,
            type: types
          });   
        }
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.COMMENT_COMPLAINT}?id=${id}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),

    getComplaint: builder.query({
      query: (id) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.GET_COMPLAINTS}`,
        method: API_METHODS.GET
      })
    }),

    deleteComplaint:  builder.mutation<any, any>({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.DELETE_COMPLAINT}?id=${id}`,
        method: API_METHODS.POST
      })
    }),

    createComplaint:  builder.mutation<any, any>({
      query: ({ category_id,subject,detail,filename,uri,types }) => {
        const data = new FormData();
        console.debug(category_id)
        data.append('category_id', category_id);
        data.append('subject', subject);
        data.append('detail', detail);
        if(filename.length>0){
          data.append('file', {
            uri: uri,
            name: filename,
            type: types
          });   
        }
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CREATE_COMPLAINT}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),

    
    languages: builder.query({
      query: () => {
        return ({
          url: `${END_POINTS.STUDENT}/${END_POINTS.GET_LANGUAGES}`,
          method: API_METHODS.GET
        })
      }
    }),

    translation:  builder.query<any, { id: string }>({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.GET_TRANSLATION}?id=${id}`,
        method: API_METHODS.GET
      })
    }),


    universitylist: builder.query({
      query: () => {
        return ({
          url: `${END_POINTS.STUDENT}/${END_POINTS.GET_UNI_LIST}`,
          method: API_METHODS.GET
        })
      }
    }),

    uniInfo:  builder.query<any, { uuid: string|undefined }>({
      query: ({ uuid }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.UNI_INFO}?uuid=${uuid}`,
        method: API_METHODS.GET
      })
    }),


  }),
});

export default CourseApi;

export const {
  util: CourseApiUtil,
  useCourseDetailsQuery,
  useClassClosQuery,
  useCloAttainmentQuery,
  useClassCloAttainmentQuery,
  useClassCqiQuery,
  usePloAttainmentQuery,
  usePloAttainmentGraphQuery,
  useClassPloAttainmentQuery,
  useObeTranscriptListQuery,
  useFetchTranscriptQuery,
  useSurveyQuery,
  useSubmitSurveyMutation,
  useCourseRegisterationQuery,
  useClassForumQuery,
  useClassForumsQuery,
  useCreateClassForumMutation,
  useSubmitRegisterationMutation,
  useUpdateClassForumMutation,
  useDeleteClassForumMutation,
  useAddCommentsMutation,
  useUpdateCommentForumMutation,
  useDeleteCommentForumMutation,
  useLazyCourseDetailsQuery,
  useClassTimetableQuery,
  useClassAttendanceQuery,
  useClassQuizQuery,
  useOtherAlertQuery,
  useQuizAnswerMutation,
  useQuizSubmitMutation,
  useQuizQuestionQuery,
  useUpdateNotesMutation,
  useUploadFileMutation,
  useVideoMaterialQuery,
  useClassPlansQuery,
  usePlanDetailsQuery,
  useClassResourcesQuery,

  //Complaint
  useUseComplaintQuery,
  useChatComplaintQuery,
  useCommentComplaintMutation,
  useGetComplaintQuery,
  useCreateComplaintMutation,
  useDeleteComplaintMutation,

  //languages
  useLanguagesQuery,
  useTranslationQuery,

  //university
  useUniversitylistQuery,
  useUniInfoQuery

} = CourseApi;
