import AsyncStorage from '@react-native-async-storage/async-storage';
// import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import { createBlacklistFilter } from 'redux-persist-transform-filter';

const configReduxBlacklist = createBlacklistFilter('config', ['fetching', 'error']);

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    // stateReconciler: hardSet,
    transforms: [configReduxBlacklist],
    whitelist: ['config'],
  },
};

export default REDUX_PERSIST;
