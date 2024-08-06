import { includes } from 'lodash';
import React, { useCallback, useEffect } from 'react';
import {
  AppState,
  StatusBar,
  useColorScheme
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {
  SafeAreaProvider,
  initialWindowMetrics
} from 'react-native-safe-area-context';
import {
  RootNavigator,
  exitRoutes,
  useBackButtonHandler,
  useNavigationStateChange
} from './Navigation';
import COLORS from './Themes/Colors';

const canExit = (routeName: string) => includes(exitRoutes, routeName);

const hideSplash = () => {
  RNBootSplash.getVisibilityStatus().then(status => {
    if (status === 'visible') {
      RNBootSplash.hide({ fade: true });
    }
  });
};

const RootContainer = () => {
  const handleAppState = useCallback(() => {
    hideSplash();
  }, []);

  useBackButtonHandler(canExit);
  const onNavigationStateChange = useNavigationStateChange();
  const scheme = useColorScheme();

  useEffect(() => {
    const appStateListener = AppState.addEventListener(
      'change',
      handleAppState
    );
    return appStateListener.remove;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar
        translucent
        animated={true}
        backgroundColor={COLORS.backgroundWhite}
        barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <RootNavigator onStateChange={onNavigationStateChange} />
    </SafeAreaProvider>
  );
};

export default RootContainer;
