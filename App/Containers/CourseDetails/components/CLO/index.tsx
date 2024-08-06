import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, RefreshControl, View } from 'react-native';
import { Text } from 'react-native-paper';
import { GenericMessage, NoResults, Spinner } from '../../../../Components';
import { useClassClosQuery } from '../../../../RTK/Api/CourseApi';
import { useLanguage } from '../../../../Types/LanguageContext';
import {
  convertNumberToArabic,
  findWord
} from '../../../../Utils/ParsingUtils';
import { CLODetail } from './components';
import styles from './styles';
const CLO = (props: any) => {
  const { dynamicDictionary, selectedDirection } = useLanguage();
  var id = props.route.params.id;
  const { data, refetch, isFetching, isLoading, isError } = useClassClosQuery({
    id: id || 0
  });
  const navigation = useNavigation();
  const { t: errorsTranslations } = useTranslation('errors');

  const onRefresh = () => {
    refetch();
  };

  if (isError) {
    return (
      <GenericMessage
        title={'Something went wrong'}
        onClosePress={() => {
          navigation.goBack();
        }}
      />
    );
  }

  if (isFetching || isLoading) {
    return <Spinner />;
  }

  if (data.length === 0) {
    return <NoResults message="No CLOs Found" />;
  }

  return (
    <View style={styles.containers}>
      {selectedDirection === 'left' ? (
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}>
            {findWord(dynamicDictionary, 'Course Learning Outcomes')
              ? findWord(dynamicDictionary, 'Course Learning Outcomes')
              : 'Course Learning Outcomes'}
          </Text>
          <Text style={styles.itemText}>
            {findWord(dynamicDictionary, 'Total')
              ? findWord(dynamicDictionary, 'Total')
              : 'Total'}
            {convertNumberToArabic(dynamicDictionary, data.length)
              ? convertNumberToArabic(dynamicDictionary, data.length)
              : data.length}{' '}
            {findWord(dynamicDictionary, 'item')
              ? findWord(dynamicDictionary, 'item')
              : 'item'}
          </Text>
        </View>
      ) : (
        <View style={styles.headerContainer}>
           <Text style={styles.itemText}>
          {findWord(dynamicDictionary, 'Total')
            ? findWord(dynamicDictionary, 'Total')
            : 'Total'}
          {convertNumberToArabic(dynamicDictionary, data.length)
            ? convertNumberToArabic(dynamicDictionary, data.length)
            : data.length}{' '}
          {findWord(dynamicDictionary, 'item')
            ? findWord(dynamicDictionary, 'item')
            : 'item'}
        </Text>
        <Text style={[styles.textHeader,{right:-90}]}>
          {findWord(dynamicDictionary, 'Course Learning Outcomes')
            ? findWord(dynamicDictionary, 'Course Learning Outcomes')
            : 'Course Learning Outcomes'}
        </Text>
       
      </View>
      )}

      <FlatList
        data={data}
        style={styles.flatListStyle}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={false} />
        }
        renderItem={({ item }) => (
          <CLODetail
            discription={item.description}
            code={item.code}
            plos={item.plos}
            active={item.active}
          />
        )}
      />
    </View>
  );
};

export default CLO;
