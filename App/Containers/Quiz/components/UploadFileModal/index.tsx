import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Text,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';
import DocumentPicker, {
  DocumentPickerResponse,
  isInProgress
} from 'react-native-document-picker';
import Modal from 'react-native-modal';
import { ActivityIndicator, Button } from 'react-native-paper';
import { CloseCircle, DocumentUpload, Trash } from '../../../../Assets/SVGs';
import { useQuizAnswerMutation } from '../../../../RTK/Api/CourseApi';
import { Colors } from '../../../../Themes';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import { checkUploadPermission } from '../../../../Utils/UploadUtils';
import { ActivityActionButton } from '../../../ActivityDetails/components';
import styles from './styles';
import { CourseDetailsModalProps } from './types';


const UploadFileModal = (props: CourseDetailsModalProps) => {
  const {
    modalVisible = false,
    setModalVisible,
    title,
    id,
    qid,
    upload = false,
    setUpload 
  } = props;
   var fileName: any


   
  const [result, setResult] = useState<
    Array<DocumentPickerResponse> | undefined | null
  >();
  const [quizAnswer, { isLoading, isSuccess, isError, }] = useQuizAnswerMutation();
  const { t } = useTranslation('courseDetails');
  const { t: commonTranslations } = useTranslation('common');
  const { t: errorTranslations } = useTranslation('errors');
  const { dynamicDictionary, selectedDirection } = useLanguage();

  useEffect(() => {
    if (isSuccess) {
       props.refetch()
      setModalVisible(false);
      setUpload(true)
      var msg = 'Upload successfull'
      var convert = findWord(dynamicDictionary,msg) ?? msg
      ToastAndroid.showWithGravity(
       convert??msg,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }
  }, [isError, isSuccess]);

  const handleError = (err: unknown) => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled');
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered'
      );
    } else {
      throw err;
    }
  };

  const uploadDocument = async (document: Array<DocumentPickerResponse>) => {
    const granted = await checkUploadPermission();
    if (granted) {
      console.debug(document)
      quizAnswer({ id: id, qid: qid, answer: " ", ans_img: document })  
    }
   
  };
  const handleFileSelection = async () => {
    try {
      const pickerResult = await DocumentPicker.pickSingle({});
      setResult([pickerResult]);
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <Modal isVisible={modalVisible} hasBackdrop={true} backdropOpacity={0.7} onBackButtonPress={() => setModalVisible(false)}>
      <View style={styles.container}>
        <View style={styles.topRowContainer}>
          <Text style={styles.heading}>{findWord(dynamicDictionary,'Attach a file')??'Attach a file'}</Text>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <CloseCircle />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.noteText}>{findWord(dynamicDictionary,'File')??'File'}</Text>
        {result ? (
          <View style={styles.uploadContainer}>
            <Text style={styles.fileName} numberOfLines={2}>{result[0].name}</Text>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => setResult(null)}>
              <Text style={styles.remove}>{findWord(dynamicDictionary,'Remove')??'Remove'}</Text>
              <Trash />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={[styles.selectButtonContainer,selectedDirection != 'left'?{ alignSelf:'flex-end'}:{}]}>
            <Button
              onPress={() => handleFileSelection()}
              mode="contained"
              color={Colors.secondary}>
              {findWord(dynamicDictionary,'Select File')??'Select File'}
            </Button>
          </View>
        )}

        <View style={styles.buttonContainer}>
          <ActivityActionButton
            label={findWord(dynamicDictionary,'Upload file')??'Upload File'}
            color={Colors.secondary}
            icon={() => <DocumentUpload />}
            onPress={() => {
              if (result) {
                uploadDocument(result);          
              }
              
            }}
            disabled={result == null}
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

export default UploadFileModal;