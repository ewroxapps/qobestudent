import { API_METHODS, END_POINTS } from '../../../Config/Api';
import { UserApi } from '../../Api';

const UserQuery = UserApi.injectEndpoints({
  endpoints: builder => ({
    timetable: builder.query<any, { date?: string }>({
      query: ({ date }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.TIMETABLE}?date=${date}`,
        method: API_METHODS.GET
      })
    }),
    singleDayTimetable: builder.query({
      query: args => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.TIMETABLE_SINGLE}`,
        method: API_METHODS.GET,
        params: { ...args }
      })
    })
  })
});

export const {
  useTimetableQuery,
  useLazyTimetableQuery,
  useLazySingleDayTimetableQuery
} = UserQuery;
