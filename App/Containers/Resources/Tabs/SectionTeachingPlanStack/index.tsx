import { useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { PlanDetailsPage, SectionPlansListPage } from './Screens';

const SectionTeachingPlanStack =
  createStackNavigator<SectionTeachingPlanStackParamsList>();

const SectionTeachingPlanStackNavigator = () => {
  const { params } = useRoute();
  return (
    <SectionTeachingPlanStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <SectionTeachingPlanStack.Screen
        name="PlansListPage"
        component={SectionPlansListPage}
        initialParams={params}
      />
      <SectionTeachingPlanStack.Screen
        name="PlanDetailsPage"
        component={PlanDetailsPage}
      />
    </SectionTeachingPlanStack.Navigator>
  );
};

export default SectionTeachingPlanStackNavigator;
