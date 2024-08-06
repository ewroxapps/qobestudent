import { createApi } from '@reduxjs/toolkit/query/react';
import { API_METHODS, CACHE_TAGS, END_POINTS } from '../../Config/Api';
import { baseQuery } from './BaseApi';

const AuthApi = createApi({
  reducerPath: 'AuthRTK',
  baseQuery,
  tagTypes: [CACHE_TAGS.AUTH, CACHE_TAGS.USER],
  endpoints: builder => ({
    login: builder.mutation({
      query: ({ username, password }) => {
        const body = new FormData();
        body.append('username', username);
        body.append('password', password);
        body.append('lang', 'en');
        return {
          url: END_POINTS.AUTHENTICATE,
          method: API_METHODS.POST,
          body
        };
      }
    }),
    logout: builder.mutation<IAuthState, void>({
      queryFn() {
        return {
          data: {
            token: '',
            refresh_token: '',
            user: undefined
          }
        };
      },
      invalidatesTags: [CACHE_TAGS.AUTH, CACHE_TAGS.USER]
    }),
    changePassword: builder.mutation<
      any,
      {
        oldPassword: string;
        newPassword: string;
        newPasswordConfirmation: string;
      }
    >({
      query: ({ oldPassword, newPassword, newPasswordConfirmation }) => {
        const body = new FormData();
        body.append('pass1', newPassword);
        body.append('pass2', newPasswordConfirmation);
        body.append('old_pass', oldPassword);
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CHANGE_PASSWORD}`,
          method: API_METHODS.POST,
          body
        };
      }
    })
  })
});

export default AuthApi;
export const {
  util: AuthApiUtil,
  useLoginMutation,
  useLogoutMutation,
  useChangePasswordMutation,
  endpoints: { login, logout }
} = AuthApi;
