import { createApi } from '@reduxjs/toolkit/query/react';
import { API_METHODS, CACHE_TAGS, END_POINTS } from '../../Config/Api';
import { baseQuery } from './BaseApi';

const UserApi = createApi({
  baseQuery,
  reducerPath: 'UserApi',
  tagTypes: [CACHE_TAGS.USER],
  endpoints: builder => ({
    userDetail: builder.query({
      query: () => {
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.PROFILE}`,
          method: API_METHODS.GET
        };
      },
      providesTags: [CACHE_TAGS.USER]
    }),
    currentCourses: builder.query({
      query: () => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CURRENT_CLASSES}`,
        method: API_METHODS.GET
      })
    }),
    allCourses: builder.query({
      query: () => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_LIST}`,
        method: API_METHODS.GET
      })
    }),
    upNextClasses: builder.query({
      query: () => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.UP_NEXT_CLASSES}`,
        method: API_METHODS.GET
      })
    }),
    stats: builder.query({
      query: () => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.STATS}`,
        method: API_METHODS.GET
      })
    })
  })
});

export default UserApi;

export const {
  util: UserApiUtil,
  useCurrentCoursesQuery,
  useUserDetailQuery,
  useStatsQuery,
  useUpNextClassesQuery,
  useLazyUserDetailQuery,
  useLazyCurrentCoursesQuery,
  useLazyUpNextClassesQuery,
  useLazyStatsQuery,
  useAllCoursesQuery,
  endpoints: { userDetail, currentCourses }
} = UserApi;
