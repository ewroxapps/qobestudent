import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { CloseCircle } from '../../../../Assets/SVGs';
import Timetable from '../../../../Assets/SVGs/Timetable';
import { BASE_URL } from '../../../../Config/Api';
import { Images } from '../../../../Themes';
import { useLanguage } from '../../../../Types/LanguageContext';
import styles from './styles';
import { DeleteProps } from './types';

const Details = (props: DeleteProps) => {
  const {
    modalVisible = false,
    setModalVisible,
    date,
    dp,
    title,
    details,
    name
  } = props;

  const { dynamicDictionary, selectedDirection } = useLanguage();
  return (
    <Modal
      isVisible={modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.7}
      onBackButtonPress={() => {
        setModalVisible(false);
      }}>
      <View style={styles.container}>
        <View style={styles.topRowContainer}>
          {selectedDirection === 'left' ? (
            <View style={styles.closeButtonContainer}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}>
                <CloseCircle />
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={[
                styles.closeButtonContainer,
                { alignItems: 'flex-start', marginLeft: 10 }
              ]}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}>
                <CloseCircle />
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={styles.overallContainer}>
          {selectedDirection === 'left' ? (
            <View style={styles.leftContainer}>
              {dp ? (
                <Image
                  source={{
                    uri: `${BASE_URL}${dp}`
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
                <Text style={styles.textPostby}>{name}</Text>
                <View style={styles.calenderContainer}>
                  <Timetable width={20} />
                  <Text style={styles.time}>{date}</Text>
                </View>
              </View>
            </View>
          ) : (
            <View style={styles.leftContainer}>
              <View
                style={[
                  styles.anotherContainer,
                  { alignItems: 'flex-end', marginRight: 8 }
                ]}>
                <Text style={styles.textPostby}>{name}</Text>
                <View style={styles.calenderContainer}>
                  <Text style={styles.time}>{date}</Text>
                  <Timetable width={20} />
                </View>
              </View>

              {dp ? (
                <Image
                  source={{
                    uri: `${BASE_URL}${dp}`
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
          )}
        </View>

        <ScrollView style={[styles.overallContainer]}>
          <View
            style={[
              styles.secondContainer,
              selectedDirection != 'left'
                ? {
                    alignItems: 'flex-end'
                  }
                : {}
            ]}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.detailText}>{details}</Text>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};
export default Details;
