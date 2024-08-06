import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  Modal,
  PermissionsAndroid,
  Platform,
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
import ImageViewer from 'react-native-image-zoom-viewer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BlueAttach from '../../Assets/SVGs/BlueAttach';
import RedCross from '../../Assets/SVGs/RedCross';
import { Spinner } from '../../Components';
import { BASE_URL } from '../../Config/Api';
import { useAppSelector } from '../../Hooks';
import {
  useChatComplaintQuery,
  useCommentComplaintMutation
} from '../../RTK/Api/CourseApi';
import { userInfoSelector } from '../../Selectors/UserSelector';
import { Images } from '../../Themes';
import { useLanguage } from '../../Types/LanguageContext';
import { convertDateToArabic2, findWord } from '../../Utils/ParsingUtils';
import { Header } from './components';
import styles from './styles';

const ComplaintChat = (props: any) => {
  const { selectedDirection, dynamicDictionary } = useLanguage();

  const [modalVisible, setModalVisible] = useState(false);
  const [close, Setclose] = useState(false);
  const [commentCheck, setCommentCheck] = useState(false);
  const [url, setUrl] = useState('');
  const [selectedAssets, setSelectedAssets] = useState<ImagePicker.Asset[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const openImage = (urls: string) => {
    setModalVisible(true);
    setUrl(urls);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const [messageInput, setMessageInput] = React.useState('');
  const userInfo: any = useAppSelector(userInfoSelector);
  const id: Number = props.route.params.id;
  const { data, refetch, isFetching, isLoading, isError, isSuccess } =
    useChatComplaintQuery(id);
  const [sendComment, { isLoading: commentLoad, data: commentData, error }] =
    useCommentComplaintMutation();
  const ChatComplaintData: IComplaintResponse = data;
  const navigation = useNavigation();
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => (
        <Header
          name={userInfo.name}
          dp={userInfo.dp}
          data={ChatComplaintData}
        />
      )
    });
  };

  const handleSend = () => {
    const myClose = close ? 'C' : 'M';
    setCommentCheck(false);
    console.debug(selectedImage);
    if (messageInput.length > 0) {
      sendComment({
        id: id,
        filename: selectedImage != null ? selectedAssets[0].fileName : '',
        uri: selectedImage != null ? selectedAssets[0].uri : '',
        message: messageInput,
        types: selectedImage != null ? selectedAssets[0].type : ''
      });
    } else {
      var msg = 'Please enter a message';
      var converMsg = findWord(dynamicDictionary, msg)
        ? findWord(dynamicDictionary, msg)
        : msg;
      ToastAndroid.show(converMsg ?? msg, ToastAndroid.SHORT);
    }
  };

  if (!commentLoad && commentData != undefined && !commentCheck) {
    if (commentData?.success) {
      setCommentCheck(true);
      setSelectedImage(null);
      setMessageInput('');
      refetch();
    } else {
      var msg = 'Something went wrong, check your internet connection';
      var converMsg = findWord(dynamicDictionary, msg)
        ? findWord(dynamicDictionary, msg)
        : msg;
      ToastAndroid.show(converMsg ?? msg, ToastAndroid.SHORT);
    }
  }

  useEffect(() => {
    if (isSuccess) {
      changeHeaderTitle();
    }
  }, [userInfo, isSuccess]);
  if (isFetching || isLoading) {
    return <Spinner />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const formattedTime = `${date.getHours()}:${date.getMinutes()}`;
    return formattedTime;
  };

  const groupedChatMessages: { [date: string]: any[] } = {};
  if (ChatComplaintData?.chat) {
    for (const message of ChatComplaintData.chat) {
      const formattedDate = message.dated.split(' ')[0]; // Get the date part
      if (!groupedChatMessages[formattedDate]) {
        groupedChatMessages[formattedDate] = [];
      }
      groupedChatMessages[formattedDate].push(message);
    }
  }

  const renderChatItem = ({ item }: { item: IChat }) => (
    <View
      style={
        item.user === userInfo.name
          ? styles.yourMessageContainer
          : styles.otherMessageContainer
      }>
      <View
        style={
          item.user === userInfo.name
            ? styles.MymessageBubble
            : styles.messageBubble
        }>
        {item.attachment ? (
          <View>
            <TouchableOpacity
              onPress={() => {
                openImage(item.attachment);
              }}>
              <Image
                source={{
                  uri: `${BASE_URL}${item.attachment}`
                }}
                defaultSource={Images.profilePlaceholder}
                style={styles.profile}
              />
            </TouchableOpacity>
          </View>
        ) : null}
        <Text
          style={item.user === userInfo.name ? styles.mytext : styles.otherTxt}>
          {item.msg}
        </Text>
        <View style={{ alignItems: 'flex-end' }}>
          <Text
            style={[
              item.user === userInfo.name
                ? [styles.mytext, { fontSize: 10 }]
                : [styles.otherTxt, { fontSize: 10 }]
            ]}>
            {formatDate(item.dated)}
          </Text>
        </View>
      </View>
    </View>
  );

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

  const getDisplayDate = (dateString: string) => {
    const dateParts = dateString.split('-');
    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1;
    const year = parseInt(dateParts[2], 10);

    const messageDate = new Date(year, month, day);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    if (messageDate.toDateString() === today.toDateString()) {
      return findWord(dynamicDictionary, 'Today')
        ? findWord(dynamicDictionary, 'Today')
        : 'Today';
    } else if (messageDate.toDateString() === yesterday.toDateString()) {
      return findWord(dynamicDictionary, 'Yesterday')
        ? findWord(dynamicDictionary, 'Yesterday')
        : 'Yesterday';
    } else {
      return convertDateToArabic2(dateString, dynamicDictionary)
        ? convertDateToArabic2(dateString, dynamicDictionary)
        : dateString;
    }
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="always"
      contentContainerStyle={styles.growFlex}
      enableOnAndroid={true}
      extraScrollHeight={Platform.OS === 'ios' ? 50 : -50}>
      <View style={styles.container}>
        <FlatList
          data={
            ChatComplaintData?.chat.length > 5
              ? Object.entries(groupedChatMessages).reverse()
              : Object.entries(groupedChatMessages)
          }
          refreshing={isFetching}
          inverted={ChatComplaintData?.chat.length > 5}
          renderItem={({ item, index }) => (
            <View key={index}>
              <View style={styles.dateView}>
                <Text style={styles.dateTxt}>{getDisplayDate(item[0])}</Text>
              </View>
              {item[1].map(message => renderChatItem({ item: message }))}
            </View>
          )}
        />
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

        {ChatComplaintData.complaint.status != 'Closed' &&
        ChatComplaintData.complaint.allowChat === true ? (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={findWord(dynamicDictionary,'Type a message...')?? 'Type a message...'}
              value={messageInput}
              onChangeText={value => setMessageInput(value)}
            />
            <View style={styles.sendButton}>
              <TouchableOpacity
                onPress={() => {
                  openImagePicker();
                }}>
                <BlueAttach width={18} height={18} style={{ right: 5 }} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  handleSend();
                }}>
                <Text style={styles.sendButtonText}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
      <Modal visible={modalVisible} onRequestClose={closeModal}>
        <ImageViewer
          imageUrls={[{ url: `${BASE_URL}${url}` }]}
          onCancel={closeModal}
          enableSwipeDown={true}
        />
      </Modal>
      {commentLoad ? <Spinner /> : null}
    </KeyboardAwareScrollView>
  );
};

export default ComplaintChat;
