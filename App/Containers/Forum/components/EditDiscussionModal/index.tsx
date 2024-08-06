import React, { useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';
import Modal from 'react-native-modal';
import { CloseCircle } from '../../../../Assets/SVGs';
import Msg from '../../../../Assets/SVGs/Msg';
import Msg2 from '../../../../Assets/SVGs/Msg2';
import { useUpdateClassForumMutation } from '../../../../RTK/Api/CourseApi';
import colors from '../../../../Themes/Colors';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { EditModalProps } from './types';

const EditDiscussionModal = (props: EditModalProps) => {
  const {
    setClicked,
    modalVisible = false,
    setModalVisible,
    titles,
    details,
    classID,
    classForumID
  } = props;
  const [title, setTitle] = useState('');
  const [detail, setDetails] = useState('');
  const { dynamicDictionary, selectedDirection } = useLanguage();
  const [updateClassForum, { isLoading, data }] = useUpdateClassForumMutation();
  useEffect(() => {
    setTitle(titles);
    setDetails(details);
    if (!isLoading && data != undefined) {
      if (data.success) {
        setClicked(true);
        ToastAndroid.show(data.message, ToastAndroid.SHORT);
        setModalVisible(false);
      } else {
        ToastAndroid.show('Please try again later', ToastAndroid.SHORT);
      }
    }
  }, [titles, details, data]);

  function checkEdit() {
    if (title.length > 0) {
      if (detail.length > 0) {
        updateClassForum({
          id: classForumID,
          title: title,
          detail: detail,
          allow_comment: props.allow_comment,
          allow_image: '0',
          published: props.published
        });
      } else {
        var message = 'Please enter some details';
        var convertMessage = findWord(dynamicDictionary, message)
          ? findWord(dynamicDictionary, message)
          : message;
        ToastAndroid.show(convertMessage ?? message, ToastAndroid.SHORT);
      }
    } else {
      var message = 'Please enter some title';
      var convertMessage = findWord(dynamicDictionary, message)
        ? findWord(dynamicDictionary, message)
        : message;
      ToastAndroid.show(convertMessage ?? message, ToastAndroid.SHORT);
    }
  }

  return (
    <Modal
      isVisible={modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.7}
      onBackButtonPress={() => {
        setModalVisible(false);
      }}>
      <View style={styles.container}>
        <View style={styles.topRowContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>
              {findWord(dynamicDictionary, 'Edit discussion forum')
                ? findWord(dynamicDictionary, 'Edit discussion forum')
                : 'Edit discussion forum'}
            </Text>
          </View>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}>
              <CloseCircle />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.titleView}>
          <Text style={styles.titleText}>
            {' '}
            {findWord(dynamicDictionary, 'Title')
              ? findWord(dynamicDictionary, 'Title')
              : 'Title'}
          </Text>
          <View
            style={{
              backgroundColor: colors.backgroundGrey,
              borderRadius: 10
            }}>
            <TextInput
             style={[
              styles.titletextInput,
              selectedDirection != 'left' ? { textAlign: 'right' } : {}
            ]}
              multiline
              value={title}
              maxLength={100}
              placeholder={
                findWord(dynamicDictionary, 'Enter title')
                  ? findWord(dynamicDictionary, 'Enter title')
                  : 'Enter title'
              }
              onChangeText={value => setTitle(value)}
            />
          </View>
        </View>

        <View style={styles.detailView}>
          <Text style={styles.titleText}>
            {' '}
            {findWord(dynamicDictionary, 'Detail')
              ? findWord(dynamicDictionary, 'Detail')
              : 'Detail'}
          </Text>
          <View
            style={{
              backgroundColor: colors.backgroundGrey,
              borderRadius: 10
            }}>
            <TextInput
                style={[
                  styles.detailtextInput,
                  selectedDirection != 'left' ? { textAlign: 'right' } : {}
                ]}
              multiline
              value={detail}
              maxLength={1000}
              placeholder={
                findWord(dynamicDictionary, 'Enter your message')
                  ? findWord(dynamicDictionary, 'Enter your message')
                  : 'Enter your message'
              }
              onChangeText={value => setDetails(value)}
            />
          </View>
        </View>

        {selectedDirection === 'left' ? (
          <View style={styles.CreateView}>
            <TouchableOpacity
              onPress={() => {
                checkEdit();
              }}>
              <View style={styles.innerCreateVie}>
                <View>
                  <Msg />
                  <Msg2 style={{ marginTop: -8, marginLeft: -2 }} />
                </View>
                <Text style={styles.textWhite}>
                  {' '}
                  {findWord(dynamicDictionary, 'Save Discussion')
                    ? findWord(dynamicDictionary, 'Save Discussion')
                    : 'Save Discussion'}{' '}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.CreateView}>
            <TouchableOpacity
              onPress={() => {
                checkEdit();
              }}>
              <View style={styles.innerCreateVie}>
                <Text style={styles.textWhite}>
                  {' '}
                  {findWord(dynamicDictionary, 'Save Discussion')
                    ? findWord(dynamicDictionary, 'Save Discussion')
                    : 'Save Discussion'}{' '}
                </Text>

                <View>
                  <Msg />
                  <Msg2 style={{ marginTop: -8, marginLeft: -2 }} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Modal>
  );
};
export default EditDiscussionModal;
