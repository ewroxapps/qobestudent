import { createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../../Config/Api';
import { AuthApi, UserApi } from '../Api';

const INITIAL_STATE: IUserState = {
  user: undefined,
  currentCourses: undefined
};

const UserSlice = createSlice({
  name: 'UserSlice',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      UserApi.endpoints.userDetail.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
    builder.addMatcher(
      UserApi.endpoints.currentCourses.matchFulfilled,
      (state, { payload }) => {
        state.currentCourses = payload?.my;
      }
    );
    builder.addMatcher(
      AuthApi.endpoints.logout.matchFulfilled,
      (state, { payload }) => {
        state.user = undefined;
        state.currentCourses = undefined;
      }
    );
  }
});

export default UserSlice.actions;

export const { reducer } = UserSlice;
