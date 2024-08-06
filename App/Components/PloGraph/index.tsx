import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryTheme
} from 'victory-native';
import { GenericMessage, NoResults, Screen, Spinner } from '../../Components';
import { usePloAttainmentGraphQuery } from '../../RTK/Api/CourseApi';
import { Colors } from '../../Themes';
import { useLanguage } from '../../Types/LanguageContext';
import { convertDecimal, convertNumberToArabic, findWord } from '../../Utils/ParsingUtils';
import styles from './styles';
const PLOGraph = () => {
  const { data, refetch, isFetching, isLoading, isError, isSuccess } =
    usePloAttainmentGraphQuery({});
  const { t: errorsTranslations } = useTranslation('errors');
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  type GraphDataType = { x: string; y: number };
  const [graphData, setGraphData] = useState<GraphDataType[]>([]);
  let array: any = [];
  const { selectedDirection, dynamicDictionary } = useLanguage();
  useEffect(() => {
    refetch();
    setIsModalVisible(isError);
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      var len = data.data.length;
      console.debug(len);
      for (let i = 0; i < len; i++) {
        array.push({ x: data.data[i].plo_code, y: data.data[i].value });
      }

      setGraphData([...array]);
    }
  }, [data]);

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
  const thresholdData = [
    { x: 0, y: 50 },
    { x: graphData.length, y: 50 }
  ];

  return (
    <Screen>
      {data?.head.length > 0 ? (
        <View style={styles.topcontainer}>
          <Text style={styles.textStyle}>{data?.head}</Text>
        </View>
      ) : null}

      {graphData.length > 1 ? (
        <View>
          <ScrollView
            horizontal={true}
            style={{ marginLeft: 15, marginTop: 60 }}>
            <VictoryChart
              domainPadding={25}
              theme={VictoryTheme.material}
              width={
                Dimensions.get('window').width +
                Dimensions.get('window').width +
                150
              }
              padding={{ left: 50, right: 42, top: 20, bottom: 40 }}
              height={Dimensions.get('window').height / 2.5}>
              <VictoryLine
                data={thresholdData}
                style={{
                  data: { stroke: Colors.red, strokeWidth: 2 }
                }}
              />
              <VictoryAxis
                style={{
                  ticks: { stroke: '#D3D3D3' },
                  tickLabels: { fill: '#D3D3D3' }
                }}
              />

              <VictoryAxis
                dependentAxis
                label={`${
                  findWord(dynamicDictionary, 'Attainments')
                    ? findWord(dynamicDictionary, 'Attainments')
                    : 'Attainments'
                }   %`}
                tickFormat={t => `${convertNumberToArabic(dynamicDictionary, Math.round(t)) || Math.round(t)}%`}
                style={{
                  axisLabel: {
                    padding: 40
                  },
                  ticks: {
                    stroke: '#D3D3D3',
                    size: 5
                  },
                  tickLabels: {
                    fill: '#D3D3D3',
                    fontSize: 10
                  }
                }}
                tickValues={Array.from(
                  {
                    length:
                      Math.ceil(Math.max(...graphData.map(d => d.y)) / 10) + 1
                  },
                  (_, i) => i * 10
                )}
              />

              <VictoryBar
                animate={{
                  onLoad: { duration: 1000 },
                  duration: 1000
                }}
                labels={({ datum }) => `${convertDecimal(dynamicDictionary,datum.y)?
                  convertDecimal(dynamicDictionary,datum.y) + '%': datum.y+'%'}`}
                cornerRadius={{ top: 6, bottom: 6 }}
                data={graphData}
                style={{
                  data: {
                    fill: Colors.quizBlue,
                    width: 12,
                    fontSize: 10
                  },
                  labels: {
                    fontSize: 10,
                    color: Colors.black
                  }
                }}
              />
            </VictoryChart>
          </ScrollView>
          {data?.footer.length > 0 ? (
            <View style={styles.bocontainer}>
              <Text style={styles.textStyleBottom}>{data?.footer}</Text>
            </View>
          ) : null}
        </View>
      ) : (
        <View style={styles.noResultsContainer}>
          <NoResults message={'No data found'} />
        </View>
      )}
    </Screen>
  );
};

export default PLOGraph;
