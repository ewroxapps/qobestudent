import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Start from '../../../../Assets/SVGs/Start';
import { useLanguage } from '../../../../Types/LanguageContext';
import {
  convertNumberToArabic,
  findWord
} from '../../../../Utils/ParsingUtils';
import StartDiscussionModal from '../StartDiscussionModal';
import styles from './styles';
import { StartDiscussionViewProps } from './types';

const StartDiscussionView = (props: StartDiscussionViewProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { dynamicDictionary, selectedDirection } = useLanguage();
  return (
    <View style={styles.container}>
      {selectedDirection === 'left' ? (
        <View style={styles.recordContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemValue}>
              {findWord(dynamicDictionary, 'Total Discussion')
                ? findWord(dynamicDictionary, 'Total Discussion')
                : 'Total Discussion'}
              :{' '}
              {convertNumberToArabic(dynamicDictionary, props.totalDiscussion)
                ? convertNumberToArabic(
                    dynamicDictionary,
                    props.totalDiscussion
                  )
                : props.totalDiscussion}
            </Text>
          </View>

          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}>
              <View style={styles.start}>
                <View>
                  <Start style={{ top: 3, right: -13 }} />
                  <Text style={styles.itemValue2}>    +  Start New</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.recordContainer}>
       
          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}>
              <View style={styles.start}>
                <View>
                  <Text style={[styles.itemValue2,{top:15,right:1}]}>
                    {findWord(dynamicDictionary, 'Start New')
                      ? `${findWord(dynamicDictionary, 'Start New')}`
                      : 'Start New'}  +    
                  </Text>
                  <Start style={{ top: -3, right: 1 }} />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.itemContainer}>
            <Text style={styles.itemValue}>
              {findWord(dynamicDictionary, 'Total Discussion')
                ? findWord(dynamicDictionary, 'Total Discussion')
                : 'Total Discussion'}
              :{' '}
              {convertNumberToArabic(dynamicDictionary, props.totalDiscussion)
                ? convertNumberToArabic(
                    dynamicDictionary,
                    props.totalDiscussion
                  )
                : props.totalDiscussion}
            </Text>
          </View>

        </View>
      )}

      {modalVisible ? (
        <StartDiscussionModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          classID={props.classID}
          click={props.click}
          setClick={props.setClick}
        />
      ) : null}
    </View>
  );
};
export default StartDiscussionView;
