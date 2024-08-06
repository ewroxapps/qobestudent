import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { Spinner } from '../../Components';
import { useSubmitRegisterationMutation } from '../../RTK/Api/CourseApi';
import { Courses } from './components';
import styles from './styles';
const ConfirmRegisteration = (props: any) => {
  const selectedClassroom: MyClassroom[] =
    props.route.params.selectedRadioButtons;
  const check: Course[] = props.route.params.check;
  const unCheck: Course[] = props.route.params.unCheck;
  var isClassRooms: string = props.route.params.isClassRooms;
  var reg: MyCourseRegistration[] = props.route.params.courseReg;
  var unReg: MyCourseRegistration[] = props.route.params.courseUnReg;
 
  
  var refetch: () => void = props.route.params.refetch;
  const [submitRegisteration, { isLoading, data, error }] =
    useSubmitRegisterationMutation();
    const navigation = useNavigation<IHomeNavigationProp>()
  const submitRegisterationFunction = () => {

       const allClassroom = check.map(data => data.classrooms);
       const commonElements: Classroom[] = allClassroom
      .flat()
      .filter(item1 => selectedClassroom.some(item2 => item2.classroom.id === item1.id));
     
      const classroomID = commonElements.map(data => data.id);
  
     
      const classroomSelectedValues = unCheck.map(item => item.classroom_selected)

      submitRegisteration({
        SelectedarraySize: classroomID.length,
        selectedClassroom: classroomID,
        selectedReg:reg,
        ifClassRoom: isClassRooms,

        Unselectedarraysize:classroomSelectedValues.length,
        UnselectedClassroom:classroomSelectedValues,
        UnselectedReg:unReg,

      });
   
  };

  console.debug(error)

  if(data!=undefined && !isLoading){
    if(data.success){
      refetch()
      ToastAndroid.show('Course Successfully Registered', ToastAndroid.SHORT);
      navigation.navigate('Home')
    }else{
      refetch()
      ToastAndroid.show(data.message, ToastAndroid.SHORT);
    }
  }

 
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => {
          const key = item.course_id.toString();
          return key;
        }}
        ListFooterComponent={() => (
          <TouchableOpacity
            style={styles.nextPressView}
            onPress={() => {
              submitRegisterationFunction();
            }}>
            <Text style={styles.textWhite}>Submit</Text>
          </TouchableOpacity>
        )}
        data={check}
        renderItem={({ item, index }) => (
          <Courses
            data={item}
            classroom={selectedClassroom}
            selectedCheckboxes={true}
          />
        )}
      />
      {isLoading ? <Spinner /> : null}
    </View>
  );
};

export default ConfirmRegisteration;
