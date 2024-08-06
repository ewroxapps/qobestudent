import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';
import Modal from 'react-native-modal';
import { ActivityIndicator } from 'react-native-paper';
import { CloseCircle, Note } from '../../../../Assets/SVGs';
import { useUpdateNotesMutation } from '../../../../RTK/Api/CourseApi';
import { Colors } from '../../../../Themes';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import ActivityActionButton from '../ActivityActionButton';
import styles from './styles';
import { CourseDetailsModalProps } from './types';

const UpdateNoteModal = (props: CourseDetailsModalProps) => {
  const { dynamicDictionary, selectedDirection } = useLanguage();
  const {
    modalVisible = false,
    setModalVisible,
    note,
    title,
    activity
  } = props;
  const [updateNotes, { isLoading, isSuccess, isError,data }] =
    useUpdateNotesMutation();
  const [notes, setNotes] = useState(note ?? '');
  const { t } = useTranslation('courseDetails');
  const { t: errorsTranslations } = useTranslation('errors');

  useEffect(() => {
    if(data!=undefined && !isLoading){
      if(data.success){
        var message = 'Note added successfully';
        var convertMessage = findWord(dynamicDictionary, message)
          ? findWord(dynamicDictionary, message)
          : message;
        ToastAndroid.show(convertMessage ?? message, ToastAndroid.SHORT);

        setModalVisible(false)
      }
        else {
          var message = 'Please try again later';
          var convertMessage = findWord(dynamicDictionary, message)
            ? findWord(dynamicDictionary, message)
            : message;
          ToastAndroid.show(convertMessage ?? message, ToastAndroid.SHORT);
        }
      
    }
  }, [data, isLoading]);
  return (
    <Modal
      isVisible={modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.7}
      onBackButtonPress={() => setModalVisible(false)}>
      <View style={styles.container}>
        {selectedDirection === 'left' ? (
          <View style={styles.topRowContainer}>
            <Text style={styles.heading}>{title}</Text>
            <View style={styles.closeButtonContainer}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <CloseCircle />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.topRowContainer}>
            <View style={[styles.closeButtonContainer,{alignItems:'flex-start'}]}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <CloseCircle />
              </TouchableOpacity>
            </View>
            <Text style={[styles.heading]}>{title}</Text>
          </View>
        )}

        <Text style={styles.noteText}>{findWord(dynamicDictionary,'Notes')?
      findWord(dynamicDictionary,'Notes'):'Notes'
      }</Text>
        <TextInput
          style={[styles.textInput,selectedDirection!='left'?{
            textAlign:'right'
          }:{}]}
          multiline
          value={notes}
          onChangeText={value => setNotes(value)}
        />
        <View style={styles.buttonContainer}>
          <ActivityActionButton
            label={note ? t('editNote') : t('saveNote')}
            color={Colors.darkGreen}
            icon={() => <Note />}
            onPress={() => {
              updateNotes({ id: activity.remarksId!, notes: notes });
              activity.sremarks = notes;
              updateNotes({ id: activity.remarksId!, notes: notes });
            }}
          />
        </View>
        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color={Colors.primary} />
          </View>
        )}
      </View>
    </Modal>
  );
};

export default UpdateNoteModal;
