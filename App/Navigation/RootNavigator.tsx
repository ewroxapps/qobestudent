import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { useColorScheme } from 'react-native';
import { MoreModal, OBEModal } from '../Components';
import { Theme } from '../Themes';
import { navigationRef } from './NavigationService';
import { PrimaryNavigator } from './PrimaryNavigator';

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerMode: 'screen',
        presentation: 'modal',
        gestureEnabled: true
      }}>
      <Stack.Screen
        name="primaryStack"
        component={PrimaryNavigator}
        options={{
          headerShown: false,
          gestureEnabled: true
        }}
      />

      <Stack.Screen
        name="CustomModal"
        component={MoreModal}
        options={{ animationEnabled: true, presentation: 'transparentModal' }}
      />

      <Stack.Screen
        name="CustomModals"
        component={OBEModal}
        options={{ animationEnabled: true, presentation: 'transparentModal' }}
      />
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const RootNavigator = (props: NavigationProps) => {
  const scheme = useColorScheme();
  return (
    // @ts-ignore
    <NavigationContainer
      ref={navigationRef}
      theme={scheme === 'dark' ? Theme.Dark : Theme.Light}
      {...props}>
      <RootStack />
    </NavigationContainer>
  );
};

RootNavigator.displayName = 'RootNavigator';
