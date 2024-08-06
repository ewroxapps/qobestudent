import { configureStore } from '@reduxjs/toolkit';
import { Middleware, StoreEnhancer } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist/es/constants';
import Config from '../../Config/DebugConfig';
import { AuthApi, CourseApi, UserApi } from '../Api';
import REDUX_PERSIST from './ReduxPersist';
import RootReducers from './RootReducer';

function CreateStore() {
  const middlewares: Middleware[] = [
    AuthApi.middleware,
    UserApi.middleware,
    CourseApi.middleware
  ];
  const enhancers: StoreEnhancer[] = [];

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  if (Config.useReactotron) {
    const tronEnhancer = console.tron?.createEnhancer?.();
    if (tronEnhancer) {
      enhancers.push(tronEnhancer);
    }
  }

  const persistedReducer = REDUX_PERSIST.active
    ? persistReducer(REDUX_PERSIST.storeConfig, RootReducers)
    : RootReducers;

  /* ------------- Redux Store ------------- */
  const reduxStore = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      }).concat(middlewares),
    devTools: __DEV__,
    preloadedState: {},
    enhancers
  });

  let persistor;
  if (REDUX_PERSIST.active) {
    persistor = persistStore(reduxStore);
  }
  return { reduxStore, persistor };
}

export default CreateStore;
export type IStore = ReturnType<typeof CreateStore>;
export type IAppDispatch = IStore['reduxStore']['dispatch'];
