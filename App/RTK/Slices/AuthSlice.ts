import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthApi } from '../Api';

const INITIAL_STATE: IAuthState = {
  user: undefined,
  token: '',
  refresh_token: ''
};

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState: INITIAL_STATE,
  reducers: {
    updateToken(
      state,
      { payload }: PayloadAction<{ token: string; refresh_token: string }>
    ) {
      state.refresh_token = payload.refresh_token;
      state.token = payload.token;
    }
  },
  extraReducers: builder => {
    builder.addMatcher(
      AuthApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.refresh_token = payload.refresh_token;
        state.token = payload.token;
        state.user = payload.user;
      }
    );
    builder.addMatcher(
      AuthApi.endpoints.logout.matchFulfilled,
      (state, { payload }) => {
        state.refresh_token = payload.refresh_token;
        state.token = payload.token;
        state.user = payload.user;
      }
    );
  }
});

export default AuthSlice.actions;

export const { reducer } = AuthSlice;
