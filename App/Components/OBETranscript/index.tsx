import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import { GenericMessage, NoResults, Spinner } from '../../Components';
import { useObeTranscriptListQuery } from '../../RTK/Api/CourseApi';
import { TranscriptDetail } from './components';
import styles from './styles';
const OBETranscript = () => {
  const { data, refetch, isFetching, isLoading, isError, isSuccess } =
    useObeTranscriptListQuery({});
  const { t: errorsTranslations } = useTranslation('errors');
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    refetch();
    setIsModalVisible(isError);
  }, [isError]);

  if (isLoading || isFetching) {
    return <Spinner />;
  }
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

 

  
  return (
    <View>
      <FlatList
        data={data}
        ListEmptyComponent={() => (
          <View style={styles.noResultsContainer}>
            <NoResults message="No Transcript available" />
          </View>
        )}
        renderItem={({ item, index }) => (
          <TranscriptDetail data={item} index={index} />
        )}
        initialNumToRender={data.length}
      />
    </View>
  );
};

export default OBETranscript;
