import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import {
  ChartIcon,
  CoursesHollow,
  CoursesIcon,
  HomeIcon,
  TimetableIcon,
  VideoVertical
} from '../Assets/SVGs';
import Alerts from '../Assets/SVGs/Alerts';
import AttainmentG from '../Assets/SVGs/AttainmentG';
import Backs from '../Assets/SVGs/Backs';
import Contactus from '../Assets/SVGs/Contactus';
import CourseRegister from '../Assets/SVGs/CourseRegister';
import Cqi from '../Assets/SVGs/Cqi';
import Graph from '../Assets/SVGs/Graph';
import Info from '../Assets/SVGs/Info';
import ObeStats from '../Assets/SVGs/ObeStats';
import Resources from '../Assets/SVGs/Resources';
import Timetable from '../Assets/SVGs/Timetable';
import Transcript from '../Assets/SVGs/Transcript';
import { CoursesHeaderTitle, OBETranscript, PloAttainment, PloGraph, SloAttainment } from '../Components';
import HeaderTitle from '../Components/HeaderTitle';
import VectorIcons, { ICON_TYPES } from '../Components/VectorIcons/VectorIcons';
import {
  ActivityDetailsPage,
  AlertActivity,
  AppInfo,
  AttendanceDetail,
  ChangePasswordPage,
  ClassTimetablePage,
  CommentForum,
  Complaint,
  ComplaintChat,
  ComplaintUserDetail,
  ConfirmRegisteration,
  ContactUs,
  CourseCLO,
  CourseCLOAttainment,
  CourseCQI,
  CourseDetails,
  CoursePLO,
  CourseRegisteration,
  CoursesPage,
  Forum,
  HomePage,
  LoginPage,
  Quiz,
  ReportContact,
  ResourcesPage,
  ShowImage,
  Survey,
  TimetablePage,
  VideoDetailsPage,
  VideoPlayer
} from '../Containers';
import { useAppSelector } from '../Hooks';
import { IsAuthenticatedSelector } from '../Selectors/AuthSelector';
import { Colors } from '../Themes';
import colors from '../Themes/Colors';
import { useLanguage } from '../Types/LanguageContext';
import { findWord } from '../Utils/ParsingUtils';
const Stack = createStackNavigator<PrimaryStackParamList>();
const Tab = createBottomTabNavigator<HomeTabParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();
const CoursesStack = createStackNavigator<CoursesStackParamList>();



const HomeStackNavigator = () => {
  var infoicon: () => JSX.Element = () => <Info width={20} height={20} />;
  var contactincon: () => JSX.Element = () => <Contactus width={20} height={20} />;
  var graphicon: () => JSX.Element = () => <Graph width={20} height={20} />;
  var obeicon: () => JSX.Element = () => <ObeStats width={20} height={20} />;
  var graphs: () => JSX.Element = () => <AttainmentG width={20} height={20} />;
  var transcript: () => JSX.Element = () => <Transcript width={20} height={20} />;
  var alert: () => JSX.Element = () => <Alerts width={20} height={20} />;
  var course: () => JSX.Element = () => < CoursesHollow width={20} height={20}/>;
  var alert: () => JSX.Element = () => < Alerts width={20} height={20}/>;
  var courseregister: () => JSX.Element = () => < CourseRegister width={20} height={20}/>;
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white'
        },
        headerTitleStyle: { color: Colors.black }
      }}>
      <HomeStack.Screen name="Home" component={HomePage} />
      <HomeStack.Screen
        name="ChangePasswordPage"
        component={ChangePasswordPage}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name='AppInfo'
        component={AppInfo}
        options={{
         headerTitle: () => <HeaderTitle
         icon={infoicon}
         title='App Info'/>
        }}
      />
      <HomeStack.Screen
        name='ContactUS'
        component={ContactUs}
        options={{
         headerTitle: () => <HeaderTitle
         icon={contactincon}
         title='Contact Us'/>
        }}
      />

        <HomeStack.Screen
        name='ReportContact'
        component={ReportContact}
        options={{
         headerTitle: () => <HeaderTitle
         icon={contactincon}
         title='Contact Us'/>
        }}
      />

      <HomeStack.Screen
        name='SloAttainments'
        component={SloAttainment}
        options={{
         headerTitle: () => <HeaderTitle
         icon={graphicon}
         title='Attainment'/>
        }}
      />

       <HomeStack.Screen
        name='PLOAttainment'
        component={PloAttainment}
        options={{
         headerTitle: () => <HeaderTitle
         icon={obeicon}
         title='Attainment'/>
        }}
      />

       <HomeStack.Screen
        name='PLOGraph'
        component={PloGraph}
        options={{
         headerTitle: () => <HeaderTitle
         icon={graphs}
         title='PLO Graph'/>
        }}
      />
      <HomeStack.Screen
        name='OBETranscript'
        component={OBETranscript}
        options={{
         headerTitle: () => <HeaderTitle
         icon={transcript}
         title='OBE Transcript'/>
        }}
      />
        <HomeStack.Screen
        name='AlertActivity'
        component={AlertActivity}
        options={{
         headerTitle: () => <HeaderTitle
         icon={alert}
         title='Alert'/>
        }}
      />

      <HomeStack.Screen
       name="ActivityDetails"
       component={ActivityDetailsPage}
       options={{
        headerTitle: () => <HeaderTitle
        icon={course}
        title='Activity Detail'/>
       }}
      />

<HomeStack.Screen
       name="ShowImage"
       component={ShowImage}
       options={{
        headerTitle: () => <HeaderTitle
        icon={course}
        title='View Image'/>
       }}
      />

      <HomeStack.Screen
        name="quiz"
        component={Quiz}
        options={{
          headerStyle: {
            backgroundColor: colors.quizBlue, 
            
          }, headerLeft: (props) => (
            <Backs style={{ marginLeft: 19 }} {...props} />
          ),
        }}
      />
        <HomeStack.Screen
        name="survey"
        component={Survey}
        options={{
          headerStyle: {
            backgroundColor: '#14B8A6',
          },
          headerLeft: (props) => (
            <Backs style={{ marginLeft: 19 }} {...props} />
          ),
        }}
      />
       <HomeStack.Screen
       name="courseRegisteration"
       component={CourseRegisteration}
       options={{
        headerTitle: () => <HeaderTitle
        icon={courseregister}
        title='Course Registeration'/>
       }}
      />

    <HomeStack.Screen
       name="confirmRegisteration"
       component={ConfirmRegisteration}
       options={{
        headerTitle: () => <HeaderTitle
        icon={courseregister}
        title='Confirm Registeration'/>
       }}
      />

    <HomeStack.Screen
       name="complaint"
       component={Complaint}
       options={{
        headerTitle: () => <HeaderTitle
        icon={alert}
        title='Complaint'/>
       }}
      />

  <HomeStack.Screen
       name="ComplaintChat"
       options={{
        headerTitle: () => ''
       }}
       component={ComplaintChat}
      />

<HomeStack.Screen
       name="ComplaintUserDetail"
       options={{
        headerShown: false
       }}
       component={ComplaintUserDetail}
      />

    </HomeStack.Navigator>
  );
};



const CoursesStackNavigator = () => {
  const { t } = useTranslation('myCourses');
  var course: () => JSX.Element = () => < CoursesHollow width={20} height={20}/>;
  var timetable: () => JSX.Element =() => <Timetable width={20} height={20}/>;
  var video: () => JSX.Element =() => <VideoVertical width={20} height={20}/>;
  var cloattainment: () => JSX.Element =() => <Graph width={20} height={20}/>;
  var ploattainment: () => JSX.Element =() => <ObeStats width={20} height={20}/>;
  var cqi: () => JSX.Element =() => <Cqi width={20} height={20}/>;
  var resource: () => JSX.Element =() => <Resources width={20} height={20}/>;

  return (
    <CoursesStack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: Colors.backgroundWhite },
        headerTitleStyle: { color: Colors.black }
      }}
      initialRouteName={'Courses'}>
      <CoursesStack.Screen
        name="Courses"
        component={CoursesPage}
        options={{
          headerTitle: () => <CoursesHeaderTitle title={t('courses')} />
        }}
      />
      <CoursesStack.Screen
        name="CourseDetails"
        component={CourseDetails}
        options={{
          headerTitle: () => <HeaderTitle
        icon={course}
        title='Course Details'/>
        }}
      />
      <CoursesStack.Screen
        name="ClassTimetable"
        options={{
          headerTitle: () => <HeaderTitle
          icon={timetable}
          title='Class Timetable'/>
        }}
        component={ClassTimetablePage}
      />
      <CoursesStack.Screen
        name="Resources"
        options={{
          headerTitle: () => <HeaderTitle
          icon={resource} 
          title='Resource'/>
        }}
        component={ResourcesPage}
      />
      <CoursesStack.Screen
        name="VideoDetailsPage"
        component={VideoDetailsPage}
        options={{
          headerTitle: () => <HeaderTitle
          icon={video}
          title='Video Detail'/>
        }
        }
      />
      <CoursesStack.Screen
        name="ActivityDetails"
        component={ActivityDetailsPage}
        options={{
          headerTitle: () => <HeaderTitle
          icon={course}
          title='Activity Detail'/>
        }}
      />
      <CoursesStack.Screen
        name="VideoPlayer"
        component={VideoPlayer}
        options={{
          headerTitle: () => <HeaderTitle
          icon={video}
          title='Video Player'/>
        }}
      />

      <CoursesStack.Screen
        name="CourseCLOAttainment"
        options={{
          headerTitle: () => <HeaderTitle
          icon={cloattainment}
          title='CLO Attainment'/>
        }}
        component={CourseCLOAttainment}
      />

      <CoursesStack.Screen
        name="CourseCLO"
        options={{
          headerTitle: () => <HeaderTitle
          icon={cloattainment}
          title='CLO'/>
        }}
        component={CourseCLO}
      />

     <CoursesStack.Screen
        name="CourseCQI"
        options={{
          headerTitle: () => <HeaderTitle
          icon={cqi}
          title='CQI'/>
        }}
        component={CourseCQI}
      />

     <CoursesStack.Screen
        name="CoursePLO"
        options={{
          headerTitle: () => <HeaderTitle
          icon={ploattainment}
          title='PLO'/>
        }}
        component={CoursePLO }
      />

        <CoursesStack.Screen
        name="AttendanceDetail"
        options={{
          headerTitle: () => <HeaderTitle
          icon={course}
          title='Attendance'/>,
        }}
        component={AttendanceDetail }
      />

      <CoursesStack.Screen
        name="Forums"
        options={{
          headerTitle: () => <HeaderTitle
          icon={course}
          title='Discussion Forum'/>
        }}
        component={Forum }
      />

     <CoursesStack.Screen
        name="CommentForum"
        options={{
          headerTitle: () => <HeaderTitle
          icon={course}
          title='Discussion Forum'/>
        }}
        component={CommentForum }
      />


<CoursesStack.Screen
        name="ShowImage"
        options={{
          headerTitle: () => <HeaderTitle
          icon={course}
          title='View Image'/>
        }}
        component={ShowImage }
      />

      <CoursesStack.Screen
        name="quiz"
        component={Quiz}
        options={{
          headerStyle: {
            backgroundColor: colors.quizBlue, 
          },
          headerLeft: (props) => (
            <Backs style={{ marginLeft: 19 }} {...props} />
          ),
        }}
      />
    </CoursesStack.Navigator>
  );
};

const Placeholder = () => <View/>

function Dashboard() {
  const { t } = useTranslation('home');
  const { selectedLanguage, selectedDirection, dynamicDictionary } =
  useLanguage();
  var more = findWord(dynamicDictionary,"More")
  var stats = findWord(dynamicDictionary,"OBE-Stats")
  var home = findWord(dynamicDictionary,"Home")
  var timetable = findWord(dynamicDictionary,"Timetable")
  var courses = findWord(dynamicDictionary,"Courses")
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: Colors.backgroundWhite },
        tabBarActiveTintColor: Colors.secondary,
        tabBarInactiveTintColor: Colors.iconGrey,
        tabBarStyle: {
          backgroundColor: Colors.backgroundWhite
        }
      }}
      backBehavior="initialRoute">
      <Tab.Screen
        name="CoursesStack"
        options={{
          tabBarIcon: ({ focused }) => (
            <CoursesIcon width={24} active={focused} />
          ),
          tabBarLabel: courses?courses:'Courses'
        }}
        component={CoursesStackNavigator}
      />
      <Tab.Screen
        name="Timetable"
        options={{
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <TimetableIcon width={24} active={focused} />
          ),
          tabBarLabel:timetable?timetable:"Timetable"
        }}
        component={TimetablePage}
      />

      <Tab.Screen
        name="HomeStack"
        options={{
          tabBarLabel: home?home:"Home",
          tabBarIcon: ({ focused }) => <HomeIcon width={24} active={focused} />,
        
        }}
        component={HomeStackNavigator}
      />
     <Tab.Screen
        name="OBE-Stat"
        options={{
          headerShown: true,
          tabBarIcon: ({ focused }) =>
            <ChartIcon width={24} active={focused} />,
            tabBarLabel: stats?stats:"OBE-Stats",

        }}
        
        component={Placeholder}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('CustomModals');
          }
        })}

      />
       <Tab.Screen
        name="More"
        options={{
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <VectorIcons
              name="dots-three-horizontal"
              color={focused ? Colors.secondary : Colors.iconGrey}
              iconType={ICON_TYPES.Entypo}
              size={24}
            />
          ), 
          tabBarLabel: more?more:"More",
        }}

        component={Placeholder}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('CustomModal');
          }
        })}
      />
    </Tab.Navigator>
  );
}

export function PrimaryNavigator() {
  const isAuthenticated: boolean = useAppSelector(IsAuthenticatedSelector);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      {isAuthenticated ? (
        <Stack.Screen name="Dashboard" component={Dashboard} />
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            headerShown: false
          }}
        />
      )}
    </Stack.Navigator>
  );
}

export const exitRoutes: string[] = ['welcome'];
