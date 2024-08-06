import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import GreyBack from '../../../../Assets/SVGs/GreyBack';
import { Spinner } from '../../../../Components';
import { useSubmitRegisterationMutation } from '../../../../RTK/Api/CourseApi';
import styles from './styles';
import { unselectProps } from './types';
const UnselectRegisterationModal = (props: unselectProps) => {
  const navigation = useNavigation<IHomeNavigationProp>()
  const [submitRegisteration, { isLoading, data, error }] =
    useSubmitRegisterationMutation();
  const submitRegisterationFunction = () => {
    const allClassroom = props.check.map(data => data.classrooms);
    const commonElements: Classroom[] = allClassroom
      .flat()
      .filter(item1 =>
        props.selectedRadioButtons.some(
          item2 => item2.classroom.id === item1.id
        )
      );
    const classroomID = commonElements.map(data => data.id);
    const classroomSelectedValues = props.unCheck.map(
      item => item.classroom_selected
    );

    submitRegisteration({
      SelectedarraySize: classroomID.length,
      selectedClassroom: classroomID,
      selectedReg: props.courseReg,
      ifClassRoom: props.isClassRooms,

      Unselectedarraysize: classroomSelectedValues.length,
      UnselectedClassroom: classroomSelectedValues,
      UnselectedReg: props.courseUnReg
    });
  };

  if(data!= undefined && !isLoading){
    if(data.success){
      props.refetch()
      ToastAndroid.show('Course Unselected Successfully', ToastAndroid.SHORT);
      props.setModalVisible(!props.modalVisible)
      navigation.navigate('Home')
    }else{
      props.refetch()
      ToastAndroid.show(data.message, ToastAndroid.SHORT);
    }
  }
  return (
    <Modal
      isVisible={props.modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.7}
      onBackButtonPress={() => props.setModalVisible(false)}>
      <View style={styles.container}>
        <GreyBack width={70} height={70} />
        <Text style={styles.textStyle}>
          Are you sure you want to unselect all courses?
        </Text>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => {
              props.setModalVisible(!props.modalVisible);
            }}>
            <Text style={styles.whiteTxt}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quitButton} onPress={() => {
            submitRegisterationFunction()
          }}>
            <Text style={styles.whiteTxt}>Okay</Text>
          </TouchableOpacity>
        </View>

        {isLoading?(
          <Spinner/>
        ):null

        }
      </View>
      
    </Modal>
  );
};

export default UnselectRegisterationModal;
