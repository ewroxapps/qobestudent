import React from 'react';
import { Text, View } from 'react-native';
import Discussion from '../../../../Assets/SVGs/Discussion';
import Discussion2 from '../../../../Assets/SVGs/Discussion2';
import colors from '../../../../Themes/Colors';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import StartDiscussionView from '../StartDiscussionView';
import styles from './styles';
import { DiscussionViewProps } from './types';
const DiscussionEmpty = (props: DiscussionViewProps) => {
  const { dynamicDictionary, selectedDirection } = useLanguage();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.background
      }}>
      <StartDiscussionView
        totalDiscussion={props.totalDiscussion}
        classID={props.classID}
        click={props.click}
        setClick={props.setClick}
      />
      {selectedDirection === 'left' ? (
        <View style={styles.container}>
          <View style={{ paddingRight: 3 }}>
            <Discussion style={{ marginTop: 4 }} />
            <Discussion2 style={{ marginTop: -8, marginLeft: -2 }} />
          </View>
          <Text style={styles.textStyle}>
            {findWord(dynamicDictionary, 'Start Your Discussion')
              ? findWord(dynamicDictionary, 'Start Your Discussion')
              : 'Start Your Discussion'}
          </Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.textStyle}>
            {findWord(dynamicDictionary, 'Start Your Discussion')
              ? findWord(dynamicDictionary, 'Start Your Discussion')
              : 'Start Your Discussion'}
          </Text>
          <View style={{ right: -10 }}>
            <Discussion style={{ marginTop: 4 }} />
            <Discussion2 style={{ marginTop: -8, marginLeft: -2 }} />
          </View>
        </View>
      )}
    </View>
  );
};
export default DiscussionEmpty;
