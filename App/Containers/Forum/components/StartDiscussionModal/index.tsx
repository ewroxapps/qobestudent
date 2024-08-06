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
import { useCreateClassForumMutation } from '../../../../RTK/Api/CourseApi';
import colors from '../../../../Themes/Colors';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { ModalProps } from './types';

const StartDiscussionModal = (props: ModalProps) => {
  const { modalVisible = false, setModalVisible, classID } = props;
  const [title, setTitle] = useState('');
  const [detail, setDetails] = useState('');
  const { dynamicDictionary, selectedDirection } = useLanguage();
  const [createClassForum, { isLoading, isSuccess, isError, data, error }] =
    useCreateClassForumMutation();
  useEffect(() => {
    if (!isLoading && data != undefined) {
      if (data.success) {
        props.setClick(true);
        var message = 'Successfully created';
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
  }, [data]);
  function createForum() {
    if (title.length > 0) {
      if (detail.length > 0) {
        createClassForum({ id: classID, title: title, detail: detail });
      } else {
        props.setClick(true);
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
      onBackButtonPress={() => setModalVisible(false)}>
      <View style={styles.container}>
        {selectedDirection === 'left' ? (
          <View style={styles.topRowContainer}>
            <View style={styles.headingContainer}>
              <Text style={styles.heading}>
                {findWord(dynamicDictionary, 'Create new discussion forum')
                  ? findWord(dynamicDictionary, 'Create new discussion forum')
                  : 'Create new discussion forum'}
              </Text>
            </View>
            <View style={styles.closeButtonContainer}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <CloseCircle />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.topRowContainer}>
            <View style={[styles.closeButtonContainer,{ alignItems:'flex-end', right:70}]}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <CloseCircle />
              </TouchableOpacity>
            </View>
            
            <View style={[styles.headingContainer,{right:10}]}>
              <Text style={styles.heading}>
                {findWord(dynamicDictionary, 'Create new discussion forum')
                  ? findWord(dynamicDictionary, 'Create new discussion forum')
                  : 'Create new discussion forum'}
              </Text>
            </View>
          </View>
        )}

        <View style={styles.titleView}>
          <Text style={styles.titleText}>
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

        <View style={styles.CreateView}>
          <TouchableOpacity
            onPress={() => {
              createForum();
            }}>
            {selectedDirection === 'left' ? (
              <View style={styles.innerCreateVie}>
                <View>
                  <Msg />
                  <Msg2 style={{ marginTop: -8, marginLeft: -2 }} />
                </View>
                <Text style={styles.textWhite}>
                  {findWord(dynamicDictionary, 'Create Discussion')
                    ? findWord(dynamicDictionary, 'Create Discussion')
                    : 'Create Discussion'}{' '}
                </Text>
              </View>
            ) : (
              <View style={styles.innerCreateVie}>
                <Text style={styles.textWhite}>
                  {findWord(dynamicDictionary, 'Create Discussion')
                    ? findWord(dynamicDictionary, 'Create Discussion')
                    : 'Create Discussion'}{' '}
                </Text>
                <View>
                  <Msg />
                  <Msg2 style={{ marginTop: -8, marginLeft: -2 }} />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default StartDiscussionModal;
