import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BookSaved, FolderTab, VideoVertical } from '../../Assets/SVGs';
import { Colors } from '../../Themes';
import { useLanguage } from '../../Types/LanguageContext';
import { findWord } from '../../Utils/ParsingUtils';
import { OtherResourcesTab, SectionTeachingPlanStack, VideosTab } from './Tabs';
const Tab = createMaterialTopTabNavigator<ResourcesTabParamList>();

const ResourcesTabsNavigator = () => {
  const { params } = useRoute<any>();
  const { t } = useTranslation('resources'); 
  const navigation = useNavigation();
  const { dynamicDictionary, selectedDirection } = useLanguage();
  useEffect(() => {}, [selectedDirection, dynamicDictionary]);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: 'capitalize'
        },
        tabBarStyle: { backgroundColor: Colors.background, elevation: 0 },
        tabBarPressColor: Colors.transparent,
        tabBarActiveTintColor: Colors.secondary,
        tabBarInactiveTintColor: Colors.iconGrey
      }}>
      <Tab.Screen
        name="VideoMaterial"
        component={VideosTab}
        initialParams={params}
        options={{
          title:findWord(dynamicDictionary,'Video Material')?
          findWord(dynamicDictionary,'Video Material'):"Video Material",
          tabBarIcon: ({ focused }) => (
            <VideoVertical width={24} height={24} active={focused} />
          )
        }}
      />
      <Tab.Screen
        name="SectionTeachingPlan"
        component={SectionTeachingPlanStack}
        options={{
          title: findWord(dynamicDictionary,'Section Teaching Plan')?
          findWord(dynamicDictionary,'Section Teaching Plan'):"Section Teaching Plan",
          tabBarIcon: ({ focused }) => (
            <BookSaved width={24} height={24} active={focused} />
          )
        }}
        initialParams={params}
      />
      <Tab.Screen
        name="OtherResources"
        component={OtherResourcesTab}
        options={{
          title: findWord(dynamicDictionary,'Other Resources')?
          findWord(dynamicDictionary,'Other Resources'):"Other Resources",
          tabBarIcon: ({ focused }) => (
            <FolderTab width={24} height={24} active={focused} />
          )
        }}
        initialParams={params}
      />
    </Tab.Navigator>
  );
};

export default ResourcesTabsNavigator;
