import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  PermissionsAndroid,
  Platform,
  ScrollView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';
import ImagePicker, {
  ImagePickerResponse,
  launchImageLibrary
} from 'react-native-image-picker';
import Modal from 'react-native-modal';
import BlueAttach from '../../../../Assets/SVGs/BlueAttach';
import RedCross from '../../../../Assets/SVGs/RedCross';
import { Spinner } from '../../../../Components';
import {
  useCreateComplaintMutation,
  useGetComplaintQuery
} from '../../../../RTK/Api/CourseApi';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import DropDown from '../DropDown';
import { default as style, default as styles } from './styles';
import { createmodalProps } from './types';
const CreateComplaint = (props: createmodalProps) => {
  const nav = useNavigation()
  const { data, refetch, isFetching, isLoading, isError } =
    useGetComplaintQuery({});
  const [
    createComplaint,
    { isLoading: commentLoad, data: commentData, error: complainterror }
  ] = useCreateComplaintMutation();
  const [complaintyType, setComplaintType] = useState<IGetComplaint>();
  const [error, setError] = useState(false);
  const [subject, setSubject] = useState('');
  const [detail, setDetail] = useState('');
  const { selectedDirection, dynamicDictionary } = useLanguage();
  const [selectedAssets, setSelectedAssets] = useState<ImagePicker.Asset[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const requestGalleryPermission = async (): Promise<boolean> => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Gallery Permission',
            message: 'App needs access to your gallery.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK'
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  const handleSend = () => {
    if (complaintyType?.id != undefined) {
      if (subject.length > 0) {
        if (detail.length > 0) {
          createComplaint({
            category_id: complaintyType?.id,
            subject: subject,
            detail: detail,
            filename: selectedImage != null ? selectedAssets[0].fileName : '',
            uri: selectedImage != null ? selectedAssets[0].uri : '',
            types: selectedImage != null ? selectedAssets[0].type : ''
          });
        } else {
          var msg = 'Please enter detail of complaint';
          var convertmsg = findWord(dynamicDictionary, msg);
          ToastAndroid.show(convertmsg ?? msg, ToastAndroid.SHORT);
        }
      } else {
        var msg = 'Please enter subject of complaint';
        var convertmsg = findWord(dynamicDictionary, msg);
        ToastAndroid.show(convertmsg ?? msg, ToastAndroid.SHORT);
      }
    } else {
      var msg = 'Please select complaint type';
      var convertmsg = findWord(dynamicDictionary, msg);
      ToastAndroid.show(convertmsg ?? msg, ToastAndroid.SHORT);
    }
  };

 

  const openImagePicker = async () => {
    const hasPermission = await requestGalleryPermission();
    if (!hasPermission) {
      Alert.alert(
        'Permission Denied',
        'You need to grant gallery permissions.'
      );
      return;
    }

    const options: ImagePicker.ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: false,
      maxHeight: 700,
      maxWidth: 700
    };

    try {
      const response: ImagePickerResponse = await launchImageLibrary(options);
      const selectedAsset: ImagePicker.Asset[] = response.assets ?? [];
      if (selectedAsset.length > 0 && selectedAsset[0].uri) {
        setSelectedAssets(selectedAsset);
        setSelectedImage(selectedAsset[0].uri);
      } else {
        setSelectedImage(null);
      }
    } catch (error) {
      console.debug(error);
    }
  };

  useEffect(()=>{
    if (!commentLoad && commentData != undefined) {
      if (commentData.success) {
        props.refetch();
        props.setModalVisible(!props.modalVisible);
        ToastAndroid.show(commentData.message, ToastAndroid.SHORT);
      } else {
        var msg = 'Something went wrong.';
        var convertmsg = findWord(dynamicDictionary, msg);
        ToastAndroid.show(convertmsg ?? msg, ToastAndroid.SHORT);
      }
    }
  },[commentLoad,commentData])


  return (
    <Modal
      isVisible={props.modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.7}
      onBackButtonPress={() => {
        props.setModalVisible(false);
      }}>
      <ScrollView style={style.container}>
        <View style={styles.headerView}>
          <Text style={style.headerTexT}>
            {findWord(dynamicDictionary, 'Create a new complaint') ??
              'Create a new complaint'}
          </Text>
        </View>
        <DropDown
          containerName={
            findWord(dynamicDictionary, 'Complaint Type') ?? 'Complaint Type'
          }
          height={selectedImage ? 220 : 450}
          options={data?.data}
          setValue={setComplaintType}
          value={complaintyType}
          error={error}
          setError={setError}
        />

        <Text style={style.textStyle}>
          {findWord(dynamicDictionary, 'Subject') ?? 'Subject'}
        </Text>
        <TextInput
          style={[
            style.titletextInput,
            selectedDirection != 'left' ? { textAlign: 'right' } : {}
          ]}
          value={subject}
          onChangeText={value => setSubject(value)}
        />

        <Text style={[style.textStyle]}>
          {findWord(dynamicDictionary, 'Detail')?? 'Detail'}
        </Text>
        <TextInput
          style={[
            style.titletextInput,
            selectedDirection != 'left'
              ? { height: 100, textAlign: 'right' }
              : {}
          ]}
          value={detail}
          onChangeText={value => setDetail(value)}
        />
        {selectedDirection === 'left' ? (
          <TouchableOpacity
            style={style.justifyView}
            onPress={() => {
              openImagePicker();
            }}>
            <Text style={style.blueTexT}>
              {findWord(dynamicDictionary, 'Select a file') ?? 'Select a file'}
            </Text>
            <BlueAttach width={18} height={18} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={style.justifyView}
            onPress={() => {
              openImagePicker();
            }}>
            <BlueAttach width={18} height={18} />
            <Text style={style.blueTexT}>
              {findWord(dynamicDictionary, 'Select a file') ?? 'Select a file'}
            </Text>
          </TouchableOpacity>
        )}

        {selectedImage ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 22,
              marginTop: 10
            }}>
            <Image
              source={selectedImage ? { uri: selectedImage } : {}}
              style={[styles.profile, { flex: 1 }]}
            />
            <TouchableOpacity
              onPress={() => {
                setSelectedImage(null);
              }}>
              <RedCross />
            </TouchableOpacity>
          </View>
        ) : null}

        <TouchableOpacity
          style={style.createButton}
          onPress={() => {
            handleSend();
          }}>
          <Text style={style.whiteTexT}>
            {findWord(dynamicDictionary, 'Create') ?? 'Create'}
          </Text>
        </TouchableOpacity>
        {isLoading || commentLoad ? <Spinner /> : null}
      </ScrollView>
    </Modal>
  );
};
export default CreateComplaint;
