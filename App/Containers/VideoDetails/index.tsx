import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { Screen } from '../../Components';
import styles from './styles';

const VideoDetails = () => {
  const { params } = useRoute<any>();
  const { t } = useTranslation('resources');
  const navigation = useNavigation<ICoursesNavigationProp>();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Video Details'
    });
  }, []);

  return (
    <Screen>
      <ScrollView style={styles.container}>
        <Card
          style={{ paddingVertical: 5, paddingHorizontal: 10 }}
          onPress={() =>
            navigation.navigate('VideoPlayer', {
              videoItem: params?.videoItem
            })
          }>
          <Card.Cover
            source={{ uri: params?.videoItem?.thumbnail }}></Card.Cover>
        </Card>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>{t('details')}</Text>
          <Text style={styles.description}>
            {params?.videoItem?.description}
            {params?.videoItem?.description}
            {params?.videoItem?.description}
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
};
export default VideoDetails;
