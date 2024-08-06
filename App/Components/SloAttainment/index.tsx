import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import ArrowBack from '../../Assets/SVGs/ArrowBack';
import ArrowForward from '../../Assets/SVGs/ArrowForward';
import { GenericMessage, NoResults, Screen, Spinner } from '../../Components';
import { useCloAttainmentQuery } from '../../RTK/Api/CourseApi';
import { useLanguage } from '../../Types/LanguageContext';
import { findWord } from '../../Utils/ParsingUtils';
import { SLODetails } from './components';
import style from './styles';

const SloAttainment = () => {
  
  const { data, refetch, isFetching, isLoading, isError, isSuccess } =
    useCloAttainmentQuery({});
  const { t: errorsTranslations } = useTranslation('errors');
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [header, setHeader] = React.useState('PLOs');
  const [clickedBack, setClickedBack] = React.useState(false);
  const [clickedForward, setClickedForward] = React.useState(false);
  const {
    selectedDirection,
    dynamicDictionary
  } = useLanguage();
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
        title={errorsTranslations('somethingWentWrong')}
        onClosePress={() => {
          setIsModalVisible(false);
          navigation.goBack();
        }}
      />
    );
  }
  return (
    <Screen>
      <FlatList
        data={data}
        ListEmptyComponent={()=>(
          <View style={style.noResultsContainer}>
          <NoResults message={'No data found'} />
        </View>
        )}
        ListHeaderComponent={() => (
          <View style={style.recordContainer}>
          
              <View style={style.itemContainer}>
              <Text style={style.itemValue}>SLOs {findWord(dynamicDictionary,'Discription')}</Text>
            </View>
           
            
            <View style={style.itemContainer1}>
              <View style={style.recordContainer1}>
                <TouchableOpacity
                  onPress={() => {
                    setClickedBack(!clickedBack);
                  }}>
                  <View>
                    <ArrowBack />
                  </View>
                </TouchableOpacity>

                <View>
                  <Text style={style.textStyle}>{findWord(dynamicDictionary,header)?
                  findWord(dynamicDictionary,header):header
                }</Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    setClickedForward(!clickedForward);
                  }}>
                  <View>
                    <ArrowForward />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        renderItem={({ item, index }) => (
          <View
             key={index}
              style={{
              backgroundColor: index % 2 == 0 ? '#F8FAFC' : '#F1F5F9',
              width: '100%',
              paddingBottom: 7,
              flexDirection: 'column'
            }}>
            <SLODetails
              data={item}
              previousdata={data[index - 1]}
              index={index}
              clicked={clickedForward}
              setClicked={setClickedForward}
              clickedBack={clickedBack}
              setClickedBack={setClickedBack}
              header={header}
              setHeader={setHeader}
            />
          </View>
        )}
        initialNumToRender={data.length}
      />
    </Screen>
  );
};

export default SloAttainment;
