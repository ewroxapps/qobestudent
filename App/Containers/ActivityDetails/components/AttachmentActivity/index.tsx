import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Download } from '../../../../Assets/SVGs';
import { BASE_URL } from '../../../../Config/Api';
import { useLanguage } from '../../../../Types/LanguageContext';
import { downloadFile } from '../../../../Utils/DownloadUtils';
import { findWord } from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { CourseDetailsModalProps } from './types';
//import { downloadFile } from '../../../../Utils/DownloadUtils';

const AttactmentActivity = (props: CourseDetailsModalProps) => {

  function makeid() {
    var text = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  const { dynamicDictionary, selectedDirection } = useLanguage();

  
  return (
    <View style={styles.container}>
      {selectedDirection != 'left' ? (
        <TouchableOpacity
          onPress={() => {
            downloadFile(`${BASE_URL}${props.url}`, makeid());
          }}>
          <Download />
        </TouchableOpacity>
      ) : null}
      <Text style={styles.questionHeading}>
        {findWord(dynamicDictionary, 'Download the file')
          ? findWord(dynamicDictionary, 'Download the file')
          : 'Download the file'}
      </Text>
      {selectedDirection === 'left' ? (
        <TouchableOpacity
          onPress={() => {
            downloadFile(`${BASE_URL}${props.url}`, makeid());
          }}>
          <Download />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default AttactmentActivity;
