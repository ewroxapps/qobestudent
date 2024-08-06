import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';
import SendLogo from '../../../../Assets/SVGs/SendLogo';
import { useAddCommentsMutation } from '../../../../RTK/Api/CourseApi';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import style from './styles';
import { CommentProps } from './type';

const LeaveComment = (props: CommentProps) => {
  const [addComments, { isLoading, isSuccess, isError, data, error }] =
    useAddCommentsMutation();
  const [comment, setComment] = useState('');
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const { dynamicDictionary, selectedDirection } = useLanguage();
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      e => {
        setKeyboardHeight(e.endCoordinates.height);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const containerStyle = {
    ...style.container,
    paddingBottom: keyboardHeight - 220
  };
  let id = props.courseID;
  useEffect(() => {
    if (!isLoading && data != undefined) {
      if (data.success) {
        props.setReload(true);
        var message = 'Comment added successfully';
        var convertMessage = findWord(dynamicDictionary, message)
          ? findWord(dynamicDictionary, message)
          : message;
        ToastAndroid.show(convertMessage ?? message, ToastAndroid.SHORT);
      } else {
        var message = 'Please try again later';
        var convertMessage = findWord(dynamicDictionary, message)
          ? findWord(dynamicDictionary, message)
          : message;
        ToastAndroid.show(convertMessage ?? message, ToastAndroid.SHORT);
      }
    }
  }, [data]);

  return (
    <View style={containerStyle}>
      <Text style={style.commentText}>
        {findWord(dynamicDictionary, props.heading)
          ? findWord(dynamicDictionary, props.heading)
          : props.heading}
      </Text>
      <View style={style.innerContainer}>
        {selectedDirection != 'left' ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <TouchableOpacity
              onPress={() => {
                if (comment.length > 0) {
                  addComments({ id: id, comment: comment });
                }
              }}>
              <View style={style.sendContainer}>
                <SendLogo />
              </View>
            </TouchableOpacity>
          </View>
        ) : null}
        <View style={{ flexDirection: 'row' }}>
          <View style={style.textInputContainer}>
            <TextInput
              style={[
                style.titletextInput,
                selectedDirection != 'left'
                  ? {
                      textAlign: 'right'
                    }
                  : {}
              ]}
              multiline
              value={comment}
              placeholder={findWord(dynamicDictionary, 'Comments') ?? 'Comment'}
              onChangeText={value => {
                setComment(value);
                setKeyboardHeight(420);
              }}
            />
          </View>
        </View>
        {selectedDirection === 'left' ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <TouchableOpacity
              onPress={() => {
                if (comment.length > 0) {
                  addComments({ id: id, comment: comment });
                }
              }}>
              <View style={style.sendContainer}>
                <SendLogo />
              </View>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </View>
  );
};
export default LeaveComment;
