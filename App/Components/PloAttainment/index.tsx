import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import ArrowBack from '../../Assets/SVGs/ArrowBack';
import ArrowForward from '../../Assets/SVGs/ArrowForward';
import { GenericMessage, NoResults, Screen, Spinner } from '../../Components';
import { usePloAttainmentQuery } from '../../RTK/Api/CourseApi';
import { useLanguage } from '../../Types/LanguageContext';
import { findWord } from '../../Utils/ParsingUtils';
import { PLODetails } from './components';
import style from './styles';

const PLOAttainment = () => {
  const { data, refetch, isFetching, isLoading, isError, isSuccess } =
    usePloAttainmentQuery({});
  const { t: errorsTranslations } = useTranslation('errors');
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [header, setHeader] = React.useState('PLO 1');
  const [clickedBack, setClickedBack] = React.useState(false);
  const [clickedForward, setClickedForward] = React.useState(false);
  const { selectedDirection, dynamicDictionary } = useLanguage();
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
        data={data.data['4281']}
        ListEmptyComponent={() => (
          <View style={style.noResultsContainer}>
            <NoResults message={'No data found'} />
          </View>
        )}
        ListHeaderComponent={() => (
          <View style={style.recordContainer}>
            {selectedDirection === 'left' ? (
              <View style={style.itemContainer}>
                <Text style={style.itemValue}>
                  {findWord(dynamicDictionary, 'Course')?findWord(dynamicDictionary, 'Course'):'Course'}
                </Text>
              </View>
            ) : null}
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
                  <Text style={style.textStyle}>{header}</Text>
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
            {selectedDirection != 'left' ? (
              <View style={style.itemContainer}>
                <Text style={style.itemValue}>
                  {findWord(dynamicDictionary, 'Course')?findWord(dynamicDictionary, 'Course'):'Course'}
                </Text>
              </View>
            ) : null}
          </View>
        )}
        renderItem={({ item, index }) => (
          <View
            style={{
              backgroundColor: index % 2 == 0 ? '#F8FAFC' : '#F1F5F9',
              width: '100%',
              paddingBottom: 7,
              flexDirection: 'column'
            }}>
            <PLODetails
              data={item}
              previousdata={data.data['4281'][index - 1]}
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

export default PLOAttainment;
