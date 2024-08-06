import jwt_decode from 'jwt-decode';
import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { IRootState } from '../RTK';

const selectSelf = (state: IRootState) => state;

const AuthSelector = createDraftSafeSelector(
  selectSelf,
  state => state.authSlice
);

const IsAuthenticatedSelector = createDraftSafeSelector(
  (state: IRootState) => state.authSlice.token,
  token => {
    if (token) {
      const decodedToken = jwt_decode(token);
      // @ts-ignore
      return decodedToken?.exp * 1000 > Date.now();
    }
    return false;
  }
);

export { AuthSelector, IsAuthenticatedSelector };
