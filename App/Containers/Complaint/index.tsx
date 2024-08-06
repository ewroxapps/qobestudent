import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { GenericMessage, NoResults, Spinner } from '../../Components';
import { useUseComplaintQuery } from '../../RTK/Api/CourseApi';

import { useLanguage } from '../../Types/LanguageContext';
import { CreateComplaint, DetailComplaint } from './components';
import styles from './styles';
const Complaint = () => {
  const navigation = useNavigation();
  const [modal, setModal] = React.useState(false);
  const [spinner, setSpinner] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [pageNumbers, setPageNumbers] = React.useState<number[]>([]);
  const { data, refetch, isFetching, isLoading, isError } =
    useUseComplaintQuery({
      page: page
    });

    const { selectedDirection, dynamicDictionary } = useLanguage();

  const onRefresh = () => {
    refetch();
  };
  React.useEffect(() => {
    if (data?.totalPages) {
      const newPageNumbers = Array.from(
        { length: data.totalPages },
        (_, index) => index + 1
      );
      setPageNumbers(newPageNumbers);
    }
  }, [data]);

  if (isFetching || isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <GenericMessage
        title={'Something went wrong, check internet connection'}
        onClosePress={() => {
          navigation.goBack();
        }}
      />
    );
  }
  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
    refetch();
  };

  if (spinner) {
    refetch();
    setSpinner(false);
  }
  return (
    <View style={styles.contaner}>
      <FlatList
        data={data?.data}
        refreshing={isFetching}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={false} />
        }
        ListEmptyComponent={() => (
          <View style={styles.noResults}>
            <NoResults message={'Currently no complaint reported'} />
          </View>
        )}
        ListFooterComponent={() => (
          <>
            <View style={styles.paginationContainer}>
              {pageNumbers.map(pageNumber => (
                <TouchableOpacity
                  key={pageNumber}
                  style={[
                    styles.pageNumber,
                    page === pageNumber && styles.selectedPage
                  ]}
                  onPress={() => handlePageChange(pageNumber)}>
                  <Text style={styles.blueTxt}>{pageNumber}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
        renderItem={({ item }) => (
          <DetailComplaint
            data={item}
            spinner={spinner}
            setSpinner={setSpinner}
          />
        )}
      />
      {spinner ? <Spinner /> : null}
      <View style={[styles.containers,selectedDirection!='left'?{ right: 260,}:{}]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setModal(!modal);
          }}>
          <View style={styles.innerContainer}>
            <View style={styles.innerContainer2}>
              <Text style={styles.textWhite}>+</Text>
            </View>
          </View>
        </TouchableOpacity>
        
      </View>

      {modal ? (
        <CreateComplaint 
         modalVisible={modal} 
         setModalVisible={setModal}
         refetch={refetch}
         
         />
      ) : null}
    </View>
  );
};

export default Complaint;
