import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Spinner } from '../../Components';
import { useCourseRegisterationQuery } from '../../RTK/Api/CourseApi';
import { useLanguage } from '../../Types/LanguageContext';
import { findWord } from '../../Utils/ParsingUtils';
import { ErrorModal } from '../Quiz/components';
import { SemesterList, UnselectRegisterationModal } from './components';
import styles from './styles';
const CourseRegisteration = (props: any) => {
  const navigation = useNavigation<IHomeNavigationProp>();
  const { data, refetch, isFetching, isLoading } = useCourseRegisterationQuery(
    {}
  );

  const [selectedRadioButtons, setSelectedRadioButtons] = useState<
    MyClassroom[]
  >([]);
  const [check, setCheck] = useState<Course[]>([]);

  const [uncheck, setUncheck] = useState<Course[]>([]);
  const [unReg, setUnReg] = useState<MyCourseRegistration[]>([]);
  const [reg, setReg] = useState<MyCourseRegistration[]>([]);
  const [error, setError] = useState(false);
  const [unRegisterModal, setUnRegisterModal] = useState(false);
  const { dynamicDictionary, courseRegSingleChoice } = useLanguage();

  const unchangedCourses = check.filter(
    course => course.course_selected === '1'
  );

  const handleNextButton = () => {
    if (data?.classroom_base_reg === '2') {
      setUnRegisterModal(!unRegisterModal);
    } else if (
      check.length === selectedRadioButtons.length &&
      check.length > 0 &&
      selectedRadioButtons.length > 0 &&
      data?.classroom_base_reg === '1'
    ) {
      navigation.navigate('confirmRegisteration', {
        selectedRadioButtons: selectedRadioButtons,
        check: check,
        unCheck: uncheck,
        isClassRooms: data?.classroom_base_reg as string,
        courseReg: reg,
        courseUnReg: unReg,
        refetch: refetch
      });
    } else if (check.length > 0 && data?.classroom_base_reg === '0') {
      navigation.navigate('confirmRegisteration', {
        selectedRadioButtons: selectedRadioButtons,
        check: check,
        unCheck: uncheck,
        isClassRooms: data?.classroom_base_reg as string,
        courseReg: reg,
        courseUnReg: unReg,
        refetch: refetch
      });
    } else {
      setError(!error);
    }
  };

  const onRefresh = () => {
    refetch();
  };
  if (isLoading || isFetching) {
    return <Spinner />;
  }

  const filteredData = Object.keys(data?.regCourseDtl).reduce(
    (result, semesterKey) => {
      const semesterData = data?.regCourseDtl[semesterKey];

      const filteredSemesterData = Object.keys(semesterData).reduce(
        (semesterResult, courseKey) => {
          const courses = semesterData[courseKey];

          const filteredCourses = courses.filter(
            (course: Course) => course.course_selected === '1'
          );

          if (filteredCourses.length > 0) {
            semesterResult[courseKey] = filteredCourses;
          }

          return semesterResult;
        },
        {} as Record<string, Course[]>
      );

      if (Object.keys(filteredSemesterData).length > 0) {
        result[semesterKey] = filteredSemesterData;
      }

      return result;
    },
    {} as Record<string, Record<string, Course[]>>
  );
  const semesterIds = data?.regMst.map((semester: Registration) => semester.id);
  const presentSemesters = Object.keys(filteredData).filter(semesterId =>
    semesterIds.includes(Number(semesterId))
  );
  const presentSemesterData = presentSemesters.map(semesterId => {
    const matchingSemester = data?.regMst.find(
      (semester: Registration) => semester.id === Number(semesterId)
    );
    return matchingSemester;
  });

  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={false} />
        }
        refreshing={isFetching}
        keyExtractor={(item, index) => {
          const key = item.id.toString();
          return key;
        }}
        ListFooterComponent={() => {
          if (!courseRegSingleChoice) {
            return (
              <TouchableOpacity
                style={styles.nextPressView}
                onPress={() => {
                  handleNextButton();
                }}>
                <Text style={styles.textWhite}>
                  {findWord(dynamicDictionary, 'Next')
                    ? findWord(dynamicDictionary, 'Next')
                    : 'Next'}{' '}
                  {'-->'}
                </Text>
              </TouchableOpacity>
            );
          } else if (Object.keys(filteredData).length === 0 && courseRegSingleChoice) {
            return (
              <TouchableOpacity
                style={styles.nextPressView}
                onPress={() => {
                  handleNextButton();
                }}>
                <Text style={styles.textWhite}>
                  {findWord(dynamicDictionary, 'Next')
                    ? findWord(dynamicDictionary, 'Next')
                    : 'Next'}{' '}
                  {'-->'}
                </Text>
              </TouchableOpacity>
            );
          } else if (Object.keys(filteredData).length > 0 && courseRegSingleChoice) {
            return (
              <View style={styles.centerVire}>
                <Text style={styles.text}>
                  You have already registered your courses
                </Text>
              </View>
            );
          }
          return null;
        }}
        data={
          courseRegSingleChoice && presentSemesterData.length > 0
            ? presentSemesterData
            : data?.regMst
        }
        renderItem={({ item, index }) => (
          <SemesterList
            data={item}
            reg={reg}
            setReg={setReg}
            unReg={unReg}
            setUnReg={setUnReg}
            courses={data?.regCourseDtl}
            selectedRadioButtons={selectedRadioButtons}
            setSelectedRadioButtons={setSelectedRadioButtons}
            check={check}
            setCheck={setCheck}
            uncheck={uncheck}
            setUnCheck={setUncheck}
            filteredData={filteredData}
          />
        )}
      />

      {error ? (
        <ErrorModal
          modalVisible={error}
          setModalVisible={setError}
          errorHeader="Please recheck your selection"
          errorText="You have not select the classroom of some course."
        />
      ) : null}
      {unRegisterModal ? (
        <UnselectRegisterationModal
          modalVisible={unRegisterModal}
          setModalVisible={setUnRegisterModal}
          selectedRadioButtons={selectedRadioButtons}
          check={check}
          unCheck={uncheck}
          isClassRooms={data?.classroom_base_reg as string}
          courseReg={reg}
          courseUnReg={unReg}
          refetch={refetch}
        />
      ) : null}
    </View>
  );
};

export default CourseRegisteration;
