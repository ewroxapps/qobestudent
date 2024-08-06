import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { CloseCircle } from '../../../../../../Assets/SVGs';
import Docss from '../../../../../../Assets/SVGs/Docss';
import { BASE_URL } from '../../../../../../Config/Api';
import { Images } from '../../../../../../Themes';
import { useLanguage } from '../../../../../../Types/LanguageContext';
import { findWord } from '../../../../../../Utils/ParsingUtils';
import styles from './styles';
import { CQIProps } from './types';
const CQIModal = (props: CQIProps) => {
  const { modalVisible = false, setModalVisible } = props;

  const { dynamicDictionary, selectedDirection } = useLanguage();
  return (
    <Modal
      isVisible={modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.7}
      onBackButtonPress={() => {
        setModalVisible(false);
      }}>
      <ScrollView style={styles.container}>
        <View style={styles.topRowContainer}>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}>
              <CloseCircle />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.middleContainer}>
          {props.storeDP ? (
            <Image
              source={{
                uri: `${BASE_URL}${props.storeDP}`
              }}
              defaultSource={Images.profilePlaceholder}
              style={styles.profile}
            />
          ) : (
            <Image source={Images.profilePlaceholder} style={styles.profile} />
          )}
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.heading}>
              {findWord(dynamicDictionary, 'Originator')
                ? findWord(dynamicDictionary, 'Originator')
                : 'Originator'}
            </Text>
            <Text style={styles.text2}>{props.originator}</Text>
            <Text style={styles.text1}>
              {' '}
              {findWord(dynamicDictionary, 'Teacher')
                ? findWord(dynamicDictionary, 'Teacher')
                : 'Teacher'}
            </Text>
          </View>
        </View>

        <View style={styles.lowMainContainer}>
          {selectedDirection === 'left' ? (
            <View style={styles.rowCont}>
              <View>
                <Text style={styles.text}>
                  {' '}
                  {findWord(dynamicDictionary, 'CAR No.')
                    ? findWord(dynamicDictionary, 'CAR No.')
                    : 'CAR No.'}
                </Text>
                <Text style={styles.texting}>{props.doc_no}</Text>
              </View>
              <Docss />
            </View>
          ) : (
            <View style={styles.rowCont}>
              <Docss />
              <View>
                <Text style={styles.text}>
                  {' '}
                  {findWord(dynamicDictionary, 'CAR No.')
                    ? findWord(dynamicDictionary, 'CAR No.')
                    : 'CAR No.'}
                </Text>
                <Text style={[styles.texting, { alignSelf: 'flex-end' }]}>
                  {props.doc_no}
                </Text>
              </View>
            </View>
          )}

          {selectedDirection === 'left' ? (
            <View style={styles.rowCont}>
              <View>
                <Text style={styles.text}>
                  {' '}
                  {findWord(dynamicDictionary, 'Reference No.')
                    ? findWord(dynamicDictionary, 'Reference No.')
                    : 'Reference No.'}
                </Text>
                <Text style={styles.texting}>{props.car_ref}</Text>
              </View>
              <Docss />
            </View>
          ) : (
            <View style={styles.rowCont}>
              <Docss />
              <View>
                <Text style={styles.text}>
                  {' '}
                  {findWord(dynamicDictionary, 'Reference No.')
                    ? findWord(dynamicDictionary, 'Reference No.')
                    : 'Reference No.'}
                </Text>
                <Text style={styles.texting}>{props.car_ref}</Text>
              </View>
            </View>
          )}
          <View
            style={[
              styles.Containers1,
              selectedDirection != 'left' ? { alignItems: 'flex-end' } : {}
            ]}>
            <Text style={styles.text}>
              {' '}
              {findWord(dynamicDictionary, 'Date')
                ? findWord(dynamicDictionary, 'Date')
                : 'Date'}
            </Text>
            <Text style={styles.texting}>{props.doc_date}</Text>
          </View>
          {selectedDirection === 'left' ? (
            <View style={styles.Containerss}>
              <Text style={styles.text}>
                {findWord(dynamicDictionary, 'Status')
                  ? findWord(dynamicDictionary, 'Status')
                  : 'Status'}
              </Text>
              <View style={styles.ans}>
                <Text style={styles.cloT}> {props.status}</Text>
              </View>
            </View>
          ) : (
            <View style={[styles.Containerss, { justifyContent: 'flex-end' }]}>
              <View style={styles.ans}>
                <Text style={styles.cloT}> {props.status}</Text>
              </View>
              <Text style={styles.text}>
                {findWord(dynamicDictionary, 'Status')
                  ? findWord(dynamicDictionary, 'Status')
                  : 'Status'}
                :{' '}
              </Text>
            </View>
          )}

          {selectedDirection === 'left' ? (
            <View style={styles.Containerss}>
              <Text style={styles.text}>
                {findWord(dynamicDictionary, 'SLO:')
                  ? findWord(dynamicDictionary, 'SLO:')
                  : 'SLO: '}
              </Text>
              <View style={styles.an}>
                <Text style={styles.cloT}> {props.clos}</Text>
              </View>
            </View>
          ) : (
            <View style={[styles.Containerss,{ justifyContent:'flex-end'}]}>
              <View style={styles.an}>
                <Text style={styles.cloT}> {props.clos}</Text>
              </View>
              <Text style={styles.text}>
                {findWord(dynamicDictionary, 'SLO')
                  ? findWord(dynamicDictionary, 'SLO')
                  : 'SLO'}{' '}
                :{' '}
              </Text>
            </View>
          )}

          <View>
            <Text style={styles.text}>
              {findWord(dynamicDictionary, 'Problem')
                ? findWord(dynamicDictionary, 'Problem')
                : 'Problems'} : {' '}
            </Text>
            <Text style={styles.texting}>{props.problem}</Text>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};
export default CQIModal;
