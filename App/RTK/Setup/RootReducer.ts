import { combineReducers } from 'redux';
import { AuthApi, CourseApi, UserApi } from '../Api';
import { AuthSliceReducer, UserSliceReducer } from '../Slices';

const RootReducers = combineReducers({
  authSlice: AuthSliceReducer,
  [AuthApi.reducerPath]: AuthApi.reducer,
  userSlice: UserSliceReducer,
  [UserApi.reducerPath]: UserApi.reducer,
  [CourseApi.reducerPath]: CourseApi.reducer,
});

export default RootReducers;
export type IRootReducer = typeof RootReducers;
export type IRootState = ReturnType<typeof RootReducers>;
