import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import DocumentPicker, {
  DocumentPickerResponse,
  isInProgress
} from 'react-native-document-picker';
import Modal from 'react-native-modal';
import { ActivityIndicator, Button } from 'react-native-paper';
import { CloseCircle, DocumentUpload, Trash } from '../../../../Assets/SVGs';
import { useUploadFileMutation } from '../../../../RTK/Api/CourseApi';
import { Colors } from '../../../../Themes';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import { checkUploadPermission } from '../../../../Utils/UploadUtils';
import ActivityActionButton from '../ActivityActionButton';
import styles from './styles';
import { CourseDetailsModalProps } from './types';
const UploadFileModal = (props: CourseDetailsModalProps) => {
  const {
    modalVisible = false,
    setModalVisible,
    note,
    title,
    activity
  } = props;
  var fileName: any;
  const navigation = useNavigation();
  const [result, setResult] = useState<
    Array<DocumentPickerResponse> | undefined | null
  >();
  const [uploadFile, { isLoading, isSuccess, isError, data }] =
    useUploadFileMutation();

  const { dynamicDictionary, selectedDirection } = useLanguage();

  useEffect(() => {
    if (data != undefined && !isLoading) {
      if (data.success) {
        var message = 'File uploaded successfully';
        props.refetch()
        props.setResult(true)
        var convertMessage = findWord(dynamicDictionary, message)
          ? findWord(dynamicDictionary, message)
          : message;
        ToastAndroid.show(convertMessage ?? message, ToastAndroid.SHORT);
        setModalVisible(false);

      } else {
        var message = 'Please try again later';
        var convertMessage = findWord(dynamicDictionary, message)
          ? findWord(dynamicDictionary, message)
          : message;
        ToastAndroid.show(convertMessage ?? message, ToastAndroid.SHORT);
      }
    }
  }, [data, isLoading]);

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
      uploadFile({
        id: activity.remarksId!,
        file: document
      });
      props.setName(document[0].name);
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
    <Modal
      isVisible={modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.7}
      onBackButtonPress={() => setModalVisible(false)}>
      <View style={styles.container}>
        <View style={styles.topRowContainer}>

        {selectedDirection != 'left' ? (
            <View style={[styles.closeButtonContainer,{alignItems:'flex-start'}]}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <CloseCircle />
              </TouchableOpacity>
            </View>
          ) : null}
          <Text style={styles.heading}>{title}</Text>
          {selectedDirection === 'left' ? (
            <View style={styles.closeButtonContainer}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <CloseCircle />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
        <Text style={styles.noteText}>
          {findWord(dynamicDictionary, 'File')
            ? findWord(dynamicDictionary, 'File')
            : 'File'}
        </Text>
        {result ? (
          <View style={styles.uploadContainer}>
            <Text style={styles.fileName} numberOfLines={2}>
              {result[0].name}
            </Text>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => setResult(null)}>
              <Text style={styles.remove}>
                {' '}
                {findWord(dynamicDictionary, 'Remove')
                  ? findWord(dynamicDictionary, 'Remove')
                  : 'Remove'}
              </Text>
              <Trash />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={[styles.selectButtonContainer]}>
            <Button
              onPress={() => handleFileSelection()}
              mode="contained"
              color={Colors.secondary}>
              {findWord(dynamicDictionary, 'Select File')
                ? findWord(dynamicDictionary, 'Select File')
                : 'Select File'}
            </Button>
          </View>
        )}

        <View style={styles.buttonContainer}>
          <ActivityActionButton
            label={'Upload File'}
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
