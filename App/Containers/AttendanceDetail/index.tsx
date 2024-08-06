import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { GenericMessage, Screen, Spinner } from '../../Components';
import { useClassAttendanceQuery } from '../../RTK/Api/CourseApi';
import { useLanguage } from '../../Types/LanguageContext';
import { findWord } from '../../Utils/ParsingUtils';
import { AttendanceComponent } from './components';
import styles from './styles';

const AttendanceDetail = (props: any) => {
  const { t: errorsTranslations } = useTranslation('errors');
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const id = props.route.params.id;
  let count = 0;
  const { isLoading, isFetching, isError, data, refetch } =
    useClassAttendanceQuery({
      id: id || 0
    });

  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    refetch();
    setIsModalVisible(isError);
  }, [isError]);

  if (isLoading || isFetching) {
    return <Spinner />;
  }

  const { dynamicDictionary, selectedDirection } = useLanguage();

  if (isError && isModalVisible) {
    return (
      <GenericMessage
        title={'Something went wrong'}
        onClosePress={() => {
          setIsModalVisible(false);
          navigation.goBack();
        }}
      />
    );
  }

  function checkPresent(val: String) {
    if (val === '1') {
      return findWord(dynamicDictionary, 'Yes')
        ? findWord(dynamicDictionary, 'Yes')
        : 'Yes';
    } else {
      return findWord(dynamicDictionary, 'No')
        ? findWord(dynamicDictionary, 'No')
        : 'No ';
    }
  }

  const renderNoCurrentCourses = () => {
    return (
      <Modal isVisible={isVisible} backdropOpacity={0.7}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            {findWord(dynamicDictionary, 'No attendance available')
              ? findWord(dynamicDictionary, 'No attendance available')
              : 'No attendance available'}
          </Text>
          <TouchableOpacity
            style={styles.modalClose}
            onPress={() => {
              setIsVisible(!isVisible);
              navigation.goBack();
            }}>
            <Text style={styles.buttonClik}>
              {findWord(dynamicDictionary, 'Okay')
                ? findWord(dynamicDictionary, 'Okay')
                : 'Okay'}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  return (
    <Screen>
      {data.present_percentage != 0 ? (
        <View style={styles.container}>
          {selectedDirection === 'left' ? (
            <View style={styles.recordContainer}>
              <View style={styles.itemContainer}>
                <Text style={styles.itemValue}>
                  {findWord(dynamicDictionary, 'Sr#')
                    ? findWord(dynamicDictionary, 'Sr#')
                    : 'Sr#'}
                </Text>
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.itemValue}>
                  {findWord(dynamicDictionary, 'Date')
                    ? findWord(dynamicDictionary, 'Date')
                    : 'Date'}{' '}
                </Text>
              </View>

              <View style={styles.itemContainer}>
                <Text style={styles.itemValue}>
                  {findWord(dynamicDictionary, 'Name')
                    ? findWord(dynamicDictionary, 'Name')
                    : 'Name'}{' '}
                </Text>
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.itemValue}>
                  {findWord(dynamicDictionary, 'Present')
                    ? findWord(dynamicDictionary, 'Present')
                    : 'Present'}
                </Text>
              </View>
            </View>
          ) : (
            <View style={styles.recordContainer}>
              <View style={styles.itemContainer}>
                <Text style={styles.itemValue}>
                  {findWord(dynamicDictionary, 'Present')
                    ? findWord(dynamicDictionary, 'Present')
                    : 'Present'}
                </Text>
              </View>

              <View style={styles.itemContainer}>
                <Text style={styles.itemValue}>
                  {findWord(dynamicDictionary, 'Name')
                    ? findWord(dynamicDictionary, 'Name')
                    : 'Name'}{' '}
                </Text>
              </View>

              <View style={styles.itemContainer}>
                <Text style={styles.itemValue}>
                  {findWord(dynamicDictionary, 'Date')
                    ? findWord(dynamicDictionary, 'Date')
                    : 'Date'}{' '}
                </Text>
              </View>

              <View style={styles.itemContainer}>
                <Text style={styles.itemValue}>
                  {findWord(dynamicDictionary, 'Sr#')
                    ? findWord(dynamicDictionary, 'Sr#')
                    : 'Sr#'}
                </Text>
              </View>
            </View>
          )}

          <View>
            <FlatList
              data={data.attendance}
              style={{ marginBottom: 60 }}
              keyExtractor={(item, index) => item.idd}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    backgroundColor: index % 2 == 0 ? '#F8FAFC' : '#F1F5F9',
                    width: '100%',
                    paddingBottom: 7,
                    flexDirection: 'column'
                  }}>
                  <AttendanceComponent
                    sr={index + 1}
                    date={item.attendance_date}
                    name={item.name}
                    present={checkPresent(item.present)}
                  />
                </View>
              )}
            />
          </View>
        </View>
      ) : (
        renderNoCurrentCourses()
      )}
    </Screen>
  );
};

export default AttendanceDetail;
