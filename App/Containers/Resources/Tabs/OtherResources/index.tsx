import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';
import { Attachment } from '../../../../Assets/SVGs';
import {
  GenericMessage,
  NoResults,
  Screen,
  Spinner
} from '../../../../Components';
import { useClassResourcesQuery } from '../../../../RTK/Api/CourseApi';
import { useLanguage } from '../../../../Types/LanguageContext';
import {
  convertNumberToArabic,
  findWord
} from '../../../../Utils/ParsingUtils';
import { AttachmentItem } from './components';
import styles from './styles';

const OtherResources = () => {
  const { params } = useRoute();
  const { t } = useTranslation('resources');
  const { t: errorsTranslations } = useTranslation('errors');
  const navigation = useNavigation();
  const { isLoading, isError, isFetching, data, refetch } =
    useClassResourcesQuery({
      id: params?.course.id
    });

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
  if (isLoading || isFetching) {
    return <Spinner />;
  }

  const { dynamicDictionary, selectedDirection } = useLanguage();
  return (
    <Screen>
      <FlatList
        data={data}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={false} />
        }
        style={styles.container}
        ListEmptyComponent={() => <NoResults message={'No resources provided so far'} />}
        ListHeaderComponent={() => (
          <View
            style={[
              styles.attachmentsHeadingContainer,
              selectedDirection === 'left' ? {} : { justifyContent: 'flex-end' }
            ]}>
            {selectedDirection === 'left' ? <Attachment /> : null}

            <Text
              style={[
                styles.detailValue,
                styles.textWithIcon,
                { marginRight: 5 }
              ]}>
              {convertNumberToArabic(dynamicDictionary, data?.length)
                ? convertNumberToArabic(dynamicDictionary, data?.length)
                : data?.length}{' '}
              {findWord(dynamicDictionary, 'Attachments')
                ? findWord(dynamicDictionary, 'Attachments')
                : 'Attachments'}
            </Text>

            {selectedDirection != 'left' ? <Attachment /> : null}
          </View>
        )}
        renderItem={({ item }) => (
          <>
            <View style={{ flex: 1 }}>
              <AttachmentItem resource={item} />
              <Divider style={styles.divider} />
            </View>
          </>
        )}
      />
    </Screen>
  );
};

export default OtherResources;
