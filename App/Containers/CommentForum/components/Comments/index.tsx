import React, { useState } from 'react';
import { Image, Text, ToastAndroid, View } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import Timetable from '../../../../Assets/SVGs/Timetable';
import { BASE_URL } from '../../../../Config/Api';
import { useDeleteCommentForumMutation } from '../../../../RTK/Api/CourseApi';
import { Images } from '../../../../Themes';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import EditModal from '../EditModal';
import styles from './styles';
import { CommentProps } from './type';
const Comments = (props: CommentProps) => {
  const { commentID, reload, setReload } = props;
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const { dynamicDictionary, selectedDirection } = useLanguage();
  const [deleteCommentForum, { isLoading: DeleteLoad, data: DeleteData }] =
    useDeleteCommentForumMutation();

  const renderRightActions = () => {
    if (props.data.allow_update) {
      return (
        <RectButton style={styles.deleteButton} onPress={deleteComment}>
          <Text style={styles.deleteButtonText}>
            {findWord(dynamicDictionary, 'Delete')
              ? findWord(dynamicDictionary, 'Delete')
              : 'Delete'}
          </Text>
        </RectButton>
      );
    }
    return null;
  };

  const renderLeftActions = () => {
    if (props.data.allow_update) {
      return (
        <RectButton style={styles.editButton} onPress={editComment}>
          <Text style={styles.deleteButtonText}>
            {findWord(dynamicDictionary, 'Edit')
              ? findWord(dynamicDictionary, 'Edit')
              : 'Edit'}
          </Text>
        </RectButton>
      );
    }
    return null;
  };

  const deleteComment = () => {
    deleteCommentForum({ id: props.data.id });
  };

  if (DeleteData != undefined && !DeleteLoad) {
    if (DeleteData.success) {
      props.setReload(true);
      var message = 'Comment deleted successfully';
      var convertMessage = findWord(dynamicDictionary, message)
        ? findWord(dynamicDictionary, message)
        : message;
      ToastAndroid.show(convertMessage ?? message, ToastAndroid.SHORT);
    } else {
      props.setReload(true);
      var message = 'Please try again later';
      var convertMessage = findWord(dynamicDictionary, message)
        ? findWord(dynamicDictionary, message)
        : message;
      ToastAndroid.show(convertMessage ?? message, ToastAndroid.SHORT);
    }
  }

  const editComment = () => {
    setEdit(true);
  };
  return (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}>
      <View style={styles.recordContainer}>
        {selectedDirection === 'left' ? (
          <View style={styles.itemContainer}>
            <View style={styles.leftContainer}>
              {props.data.dp ? (
                <Image
                  source={{
                    uri: `${BASE_URL}${props.data.dp}`
                  }}
                  defaultSource={Images.profilePlaceholder}
                  style={styles.profile}
                />
              ) : (
                <Image
                  source={Images.profilePlaceholder}
                  style={styles.profile}
                />
              )}

              <View style={styles.anotherContainer}>
                <View style={styles.calenderContainer}>
                  <Text style={styles.textPostby} numberOfLines={1}>
                    {props.data.comment_by}
                  </Text>
                </View>
                <View style={styles.calenderContainer}>
                  <Timetable width={20} />
                  <Text style={styles.time} numberOfLines={1}>
                    {props.data.comment_when}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View style={[styles.itemContainer,]}>
            <View style={[styles.leftContainer, ]}>

              <View style={[styles.anotherContainer,{alignItems:'flex-end', right:10}]}>
                <View style={styles.calenderContainer}>
                  <Text style={styles.textPostby} numberOfLines={1}>
                    {props.data.comment_by}
                  </Text>
                </View>
                <View style={styles.calenderContainer}>         
                  <Text style={styles.time} numberOfLines={1}>
                    {props.data.comment_when}
                  </Text>
                  <Timetable width={20} />
                </View>
              </View>

              {props.data.dp ? (
                <Image
                  source={{
                    uri: `${BASE_URL}${props.data.dp}`
                  }}
                  defaultSource={Images.profilePlaceholder}
                  style={styles.profile}
                />
              ) : (
                <Image
                  source={Images.profilePlaceholder}
                  style={styles.profile}
                />
              )}
            </View>
          </View>
        )}

        <View
          style={[
            styles.itemContainer,
            ,
            selectedDirection != 'left'
              ? {
                  justifyContent: 'flex-end'
                }
              : {}
          ]}>
          <View
            style={[
              styles.secondContainer,
              selectedDirection != 'left'
                ? {
                    justifyContent: 'flex-end'
                  }
                : {}
            ]}>
            <Text
              style={[
                styles.titleText,
                selectedDirection != 'left'
                  ? {
                      textAlign: 'right'
                    }
                  : {}
              ]}>
              {props.data.comment}
            </Text>
          </View>
        </View>
        {edit === true ? (
          <EditModal
            modalVisible={edit}
            setModalVisible={setEdit}
            id={props.data.id}
            reload={reload}
            setReload={setReload}
            message={props.data.comment}
            ids={commentID}
          />
        ) : null}
      </View>
    </Swipeable>
  );
};

export default Comments;
