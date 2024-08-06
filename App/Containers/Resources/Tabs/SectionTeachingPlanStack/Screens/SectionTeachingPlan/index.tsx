import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import { NoResults, Screen, Spinner } from '../../../../../../Components';
import { useClassPlansQuery } from '../../../../../../RTK/Api/CourseApi';
import { PlanItem } from './components';
import styles from './styles';

const SectionTeachingPlan = () => {
  const navigation = useNavigation<ISectionTeachingPlanNavigationProp>();
  const { params } = useRoute();
  const { t } = useTranslation('resources');
  const { isLoading, isError, isFetching, data } = useClassPlansQuery({
    id: params?.courseId
  });
  if (isLoading || isFetching) {
    return <Spinner />;
  }
  return (
    <Screen>
      <View style={styles.container}>
        {data && data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PlanItem
                planItem={item}
                onPress={() =>
                  navigation.navigate('PlanDetailsPage', {
                    plan: item
                  })
                }
              />
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        ) : (
          <NoResults message={'No plans announced'} />
        )}
      </View>
    </Screen>
  );
};

export default SectionTeachingPlan;
