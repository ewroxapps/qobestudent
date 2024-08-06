import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import { useDeleteComplaintMutation } from '../../../../RTK/Api/CourseApi';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { complainProps } from './types';
const DetailComplaint = (props: complainProps) => {
  const navigation = useNavigation<IHomeNavigationProp>();
  const [deleteComplaint, { isLoading, data }] = useDeleteComplaintMutation({});

  const { selectedDirection, dynamicDictionary } = useLanguage();
  if (!isLoading && data != undefined) {
    if (data.success) {
      props.setSpinner(!props.spinner);
      ToastAndroid.show(data.message, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(data.message, ToastAndroid.SHORT);
    }
  }

  const renderRightActions = () => {
    return (
      <RectButton style={styles.deleteButton} onPress={deleteTimeTable}>
        <Text style={styles.deleteButtonText}>
          {findWord(dynamicDictionary, 'Delete')
            ? findWord(dynamicDictionary, 'Delete')
            : 'Delete'}
        </Text>
      </RectButton>
    );
  };

  const deleteTimeTable = () => {
    deleteComplaint({ id: props.data.id });
  };
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity
        style={[
          styles.container,
          selectedDirection != 'left' ? { alignItems: 'flex-end' } : {}
        ]}
        onPress={() => {
          navigation.navigate('ComplaintChat', { id: props.data.id });
        }}>
        <Text style={styles.categoryTxt}>{props.data.category}</Text>
        <View style={styles.justifyView}>
          {selectedDirection != 'left' ? (
            <Text style={styles.rightTxt}>{props.data.student}</Text>
          ) : null}
          <Text style={styles.leftTexT}>
            {findWord(dynamicDictionary, 'Created By')
              ? findWord(dynamicDictionary, 'Created By')
              : 'Created by'}
            :
          </Text>

          {selectedDirection === 'left' ? (
            <Text style={styles.rightTxt}>{props.data.student}</Text>
          ) : null}
        </View>
        <View style={[styles.justifyView, { marginTop: 3 }]}>
          {selectedDirection != 'left' ? (
            <Text style={styles.rightTxt}>{props.data.created_when}</Text>
          ) : null}
          <Text style={styles.leftTexT}>
            {findWord(dynamicDictionary, 'Creation Time')
              ? findWord(dynamicDictionary, 'Creation Time')
              : 'Creation time'}
            :
          </Text>

          {selectedDirection === 'left' ? (
            <Text style={styles.rightTxt}>{props.data.created_when}</Text>
          ) : null}
        </View>
        <View style={[styles.justifyView, { marginTop: 3 }]}>
          {selectedDirection != 'left' ? (
            <Text style={styles.rightTxt}>{props.data.status}</Text>
          ) : null}
          <Text style={styles.leftTexT}>
            {findWord(dynamicDictionary, 'Status')
              ? findWord(dynamicDictionary, 'Status')
              : 'Status'}
            :
          </Text>

          {selectedDirection === 'left' ? (
            <Text style={styles.rightTxt}>{props.data.status}</Text>
          ) : null}
        </View>
        <View style={[styles.justifyView, { marginTop: 3 }]}>
          {selectedDirection != 'left' ? (
            <Text style={styles.rightTxt}>{props.data.subject}</Text>
          ) : null}

          <Text style={styles.leftTexT}>
            {findWord(dynamicDictionary, 'Subject')
              ? findWord(dynamicDictionary, 'Subject')
              : 'Subject'}
            :
          </Text>
          {selectedDirection === 'left' ? (
            <Text style={styles.rightTxt}>{props.data.subject}</Text>
          ) : null}
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default DetailComplaint;
