import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FlatList,
  RefreshControl,
  View
} from 'react-native';
import { Divider } from 'react-native-paper';
import {
  GenericMessage,
  NoResults,
  Screen,
  Spinner
} from '../../../../Components';
import { useVideoMaterialQuery } from '../../../../RTK/Api/CourseApi';
import { VideoItem } from './components';
import styles from './styles';

const VideoMaterial = () => {
  const navigation = useNavigation<IVideoMaterialNavigationProp>();
  const { t } = useTranslation('resources');
  const { t: errorsTranslations } = useTranslation('errors');
  const { params } = useRoute();
  const { isLoading, isError, data, refetch } = useVideoMaterialQuery({
    id: params?.courseId
  });

  const onRefresh = () => {
    refetch();
  };

  if (isError) {
    return (
      <GenericMessage
        title={errorsTranslations('somethingWentWrong')}
        onClosePress={() => {
          navigation.goBack();
        }}
      />
    );
  }
  if (isLoading) {
    return <Spinner />;
  }
  
  return (
    <Screen>
      <View style={styles.scrollView}>
        {data && data?.length > 0 ? (
          <FlatList
            data={data}
            refreshControl={
              <RefreshControl onRefresh={onRefresh} refreshing={false} />
            }
            renderItem={({ item }) => <VideoItem videoItem={item} />}
            ItemSeparatorComponent={() => <Divider style={styles.divider} />}
          />
        ) : (
          <View style={styles.noResults}>
            <NoResults message={'No video material'} />
          </View>
        )}
      </View>
    </Screen>
  );
};

export default VideoMaterial;
