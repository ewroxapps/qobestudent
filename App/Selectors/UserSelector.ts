import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { IRootState } from '../RTK';

const selectSelf = (state: IRootState) => state;

const UserSelector = createDraftSafeSelector(
  selectSelf,
  state => state.userSlice
);

const userInfoSelector = createDraftSafeSelector(
  (state: IRootState) => state.userSlice?.user,
  data => data
);

const userCoursesSelector = createDraftSafeSelector(
  (state: IRootState) => state.userSlice?.currentCourses,
  data => data
);

export { UserSelector, userInfoSelector, userCoursesSelector };
