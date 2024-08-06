import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError
} from '@reduxjs/toolkit/query/react';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { getI18n } from 'react-i18next';
import { Alert } from 'react-native';
import { BASE_URL } from '../../Config/Api';
import { IAppDispatch, IRootState } from '../Setup';

export const fetchBase = fetchBaseQuery({
  baseUrl: BASE_URL,
  // @ts-ignore
  prepareHeaders: (headers, { getState, endpoint }) => {
    const { token, refresh_token } = (getState() as IRootState).authSlice || {};
    console.log(token);
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('cache-control', 'no-cache');
    headers.set('accept', 'application/json');
    return headers;
  }
});

export const clearAPICache = (dispatch: IAppDispatch) => {
  setTimeout(() => {}, 1000);
};

export const logoutUser = async (dispatch: IAppDispatch) => {
  Alert.alert(getI18n().t('errors:sessionExpired'));
  dispatch(require('./AuthApi').logout.initiate());
  clearAPICache(dispatch);
};

let refreshTokenPromise: ReturnType<typeof fetchBase> | null = null;

export const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  try {
    const { token: prevToken, refresh_token } =
      (api.getState() as IRootState).authSlice || {};
    const expired =
      prevToken &&
      (jwtDecode<JwtPayload>(prevToken)?.exp || 0) * 1000 <
        Date.now() - 60 * 1000;
    if (expired) {
      const body = new FormData();
      body.append('refresh_token', refresh_token);
      refreshTokenPromise =
        refreshTokenPromise ||
        (await fetchBase(
          { url: 'student/gettoken', method: 'POST', body },
          api,
          extraOptions
        ));
      const refreshTokenRes = await refreshTokenPromise;
      refreshTokenPromise = null;
      if (refreshTokenRes.error) {
        logoutUser(api.dispatch);
        return refreshTokenRes;
      }
      api.dispatch(
        require('../Slices/AuthSlice').default.updateToken(
          refreshTokenRes.data as any
        )
      );
    }
  } catch (err) {
    console.log('Error = ', err);
    logoutUser(api.dispatch);
    throw err;
  }
  let result = await fetchBase(args, api, extraOptions);
  console.log(api.endpoint);
  if (
    result.error &&
    result.error.status === 401 &&
    api.endpoint !== 'changePassword' &&
    result.error.name !== 'Forbidden'
  ) {
    logoutUser(api.dispatch);
  }
  return result;
};
