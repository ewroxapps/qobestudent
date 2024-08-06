import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { GenericMessage, NoResults, Spinner } from '../../../../Components';
import { useClassCqiQuery } from '../../../../RTK/Api/CourseApi';
import { CQIDetail } from './components';
import styles from './styles';

const CQI = (props: any) => {
  var id = props.route.params.id;
  const { data, refetch, isFetching, isLoading, isError } = useClassCqiQuery({
    id: id || 0
  });
  const navigation = useNavigation();

  if (isError) {
    return (
      <GenericMessage
        title={'Something went wrong.'}
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
    return <NoResults message="No CQI Found" />;
  }
  const onRefresh = () => {
    refetch();
  };

  return (
    <View style={styles.containers}>
      <FlatList
        data={data}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={false} />
        }
        renderItem={({ item }) => (
          <CQIDetail
            car_ref={item.car_ref}
            clos={item.clos}
            doc_date={item.doc_date}
            doc_no={item.doc_no}
            originator={item.originator}
            problem={item.problem}
            status={item.status}
          />
        )}
      />
    </View>
  );
};

export default CQI;
