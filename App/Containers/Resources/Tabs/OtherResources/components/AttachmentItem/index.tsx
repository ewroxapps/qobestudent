import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import { Download } from '../../../../../../Assets/SVGs';
import { BASE_URL } from '../../../../../../Config/Api';
import { useLanguage } from '../../../../../../Types/LanguageContext';
import { downloadFile } from '../../../../../../Utils/DownloadUtils';
import { findWord } from '../../../../../../Utils/ParsingUtils';
import styles from './styles';
import { AttachmentItemProps } from './types';

const AttachmentItem = (props: AttachmentItemProps) => {
  const { t } = useTranslation('resources');
  const { resource } = props;
  const { dynamicDictionary, selectedDirection } = useLanguage();

  const download = () => {
    return (
      <TouchableOpacity
        onPress={() =>
          downloadFile(`${BASE_URL}${resource?.path}`, resource?.filename)
        }
        hitSlop={styles.hitSlop}>
        <Download />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {selectedDirection != 'left' ? <View>{download()}</View> : null}
      <View style={styles.leftContainer}>
        <Text
          style={[
            styles.heading,
            selectedDirection === 'left' ? {} : { alignSelf: 'flex-end' }
          ]}>
          {resource?.filename != undefined
            ? resource.filename
            : findWord(dynamicDictionary, 'N/A')
            ? findWord(dynamicDictionary, 'N/A')
            : 'N/A'}
        </Text>
        <Text style={styles.dateText}>
          {findWord(dynamicDictionary, 'Created on')
            ? findWord(dynamicDictionary, 'Created on')
            : 'Created on'}
          :{' '}
          {resource?.cdate != undefined
            ? resource.cdate
            : findWord(dynamicDictionary, 'N/A')
            ? findWord(dynamicDictionary, 'N/A')
            : 'N/A'}
        </Text>
        <Text style={styles.description}>
          {findWord(dynamicDictionary, 'Description')
            ? findWord(dynamicDictionary, 'Description')
            : 'Description'}
          : {resource?.description ?? '-'}
        </Text>
      </View>
      {selectedDirection === 'left' ? <View>{download()}</View> : null}
    </View>
  );
};

export default AttachmentItem;
