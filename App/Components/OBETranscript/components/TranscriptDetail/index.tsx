import React, { useState } from 'react';
import { Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { Download } from '../../../../Assets/SVGs';
import { useFetchTranscriptQuery } from '../../../../RTK/Api/CourseApi';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { TranscriptProps } from './types';

const TranscriptDetail = (props: TranscriptProps) => {
  const [pdfUri, setPdfUri] = useState<string | null>(null);
  const { data: pdfBlob, refetch, isFetching, isLoading, isError, isSuccess, error } =
    useFetchTranscriptQuery({ id: props.data.semster_id });

  const { selectedDirection, dynamicDictionary } = useLanguage();

  const showToast = () => {
    ToastAndroid.show('Download is not available at the moment!', ToastAndroid.SHORT);
  };
  return (
    <View key={props.index}>
      <View style={styles.container}>
        {selectedDirection != 'left' ? (
          <TouchableOpacity onPress={() => {
            showToast()
          }}>
            <View style={styles.innerConatiner2}>
              <Text style={styles.download}>
                {findWord(dynamicDictionary, 'Download') ? findWord(dynamicDictionary, 'Download') : 'Download'}
              </Text>
              <Download />
            </View>
          </TouchableOpacity>
        ) : null}
        <View style={[styles.innerConatiner, selectedDirection != 'left' ? { alignItems: 'flex-end' } : {}]}>
          <Text style={styles.semesterName}>{props.data.name}</Text>
        </View>

        {selectedDirection === 'left' ? (
          <TouchableOpacity onPress={() => {
            showToast()
          }}>
            <View style={styles.innerConatiner2}>
              <Text style={styles.download}>
                {findWord(dynamicDictionary, 'Download') ? findWord(dynamicDictionary, 'Download') : 'Download'}
              </Text>
              <Download />
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 0, paddingRight: 0 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: '#E2E8F0' }} />
        <View style={{ flex: 1, height: 1, backgroundColor: '#E2E8F0' }} />
      </View>
    
    </View>
  );
};

export default TranscriptDetail;
