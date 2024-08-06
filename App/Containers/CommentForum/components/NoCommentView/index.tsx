import React from 'react';
import { Text, View } from 'react-native';
import Discussion from '../../../../Assets/SVGs/Discussion';
import Discussion2 from '../../../../Assets/SVGs/Discussion2';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import styles from './style';
import { CommentProps } from './type';

const NoCommentsView = (props: CommentProps) => {
  const { dynamicDictionary, selectedDirection } = useLanguage();
  return (
    <View style={styles.container}>
      {selectedDirection === 'left' ? (
        <View style={{ paddingRight: 3 }}>
          <Discussion style={{ marginTop: 4 }} />
          <Discussion2 style={{ marginTop: -8, marginLeft: -2 }} />
        </View>
      ) : null}

      <Text style={styles.textStyle}>
        {findWord(dynamicDictionary, 'No comments yet')
          ? findWord(dynamicDictionary, 'No comments yet')
          : 'No comments yet'}
      </Text>

      {selectedDirection != 'left' ? (
        <View style={{ left: 3 }}>
          <Discussion style={{ marginTop: 4 }} />
          <Discussion2 style={{ marginTop: -8, marginLeft: -2 }} />
        </View>
      ) : null}
    </View>
  );
};
export default NoCommentsView;
