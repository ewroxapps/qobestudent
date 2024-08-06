import React, { Suspense } from 'react';
import { ActivityIndicator } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { MenuProvider } from 'react-native-popup-menu';
import { Provider } from 'react-redux';
import './Config';
import DebugConfig from './Config/DebugConfig';
import { InitializeStore } from './RTK/Setup';
import RootContainer from './RootContainer';
import { LanguageProvider } from './Types/LanguageContext';
import i18n from './i18n';
// create our store
export const { reduxStore } = InitializeStore();

i18n.then(() => {});

const App = gestureHandlerRootHOC(() => (
  <LanguageProvider>
    <Suspense fallback={<ActivityIndicator />}>
      <Provider store={reduxStore}>
        <MenuProvider>
          <RootContainer />
        </MenuProvider>
      </Provider>
    </Suspense>
  </LanguageProvider>
));

export default DebugConfig.useReactotron ? console.tron.overlay(App) : App;
