import React from 'react';
import { Dimensions, View } from 'react-native';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryTheme
} from 'victory-native';
import { Colors } from '../../../../../../Themes';
import { useLanguage } from '../../../../../../Types/LanguageContext';
import { convertDecimal, convertNumberToArabic, findWord } from '../../../../../../Utils/ParsingUtils';
import styles from './styles';
import { ClosAttainmentProps } from './types';
const CLOAttainmentDetails = (props: ClosAttainmentProps) => {
  const graphData = {
    average: [{ x: ' ', y: Number(props.data.avg).toFixed(2) }],
    maximum: [{ x: '  ', y: Number(props.data.max).toFixed(2) }],
    minimum: [{ x: '   ', y: Number(props.data.min).toFixed(2) }],
    myscore: [{ x: '    ', y: Number(props.data.myvalue).toFixed(2) }]
  };
  const sortedData = Object.values(graphData).sort(
    (a, b) => parseFloat(a[0].y) - parseFloat(b[0].y)
  );
  function checkColor(sortedData: any) {
    if (sortedData === graphData.average) {
      return '#EF4444';
    } else if (sortedData === graphData.maximum) {
      return '#F97316';
    } else if (sortedData === graphData.minimum) {
      return '#22C55E';
    } else {
      return '#3B82F6';
    }
  }
  const { dynamicDictionary, selectedDirection } = useLanguage();
  return (
    <View style={styles.containers}>
      <VictoryChart
        domainPadding={5}
        theme={VictoryTheme.material}
        width={Dimensions.get('window').width}
        padding={{ left: 52, right: 42, top: 20, bottom: 40 }}
        height={Dimensions.get('window').height / 3.5}>
        <VictoryAxis
          label={props.data.code}
          style={{
            ticks: { stroke: '#D3D3D3' },
            tickLabels: { fill: '#D3D3D3' }
          }}
        />
        <VictoryAxis
          dependentAxis
          label={`${
            findWord(dynamicDictionary, 'Attainment')
              ? findWord(dynamicDictionary, 'Attainment')
              : 'Attainments'
          }   %`}
          tickFormat={t => `${convertNumberToArabic(dynamicDictionary, Math.round(t)) || Math.round(t)}%`}
          style={{
            axisLabel: {
              padding: 40
            }
          }}
        />
        <VictoryGroup offset={-30}>
          <VictoryBar
            animate={{
              onLoad: { duration: 1000 },
              duration: 1000
            }}
            labels={({ datum }) => `${convertDecimal(dynamicDictionary,datum.y)?
              convertDecimal(dynamicDictionary,datum.y) + '%': datum.y+'%'}`}
            cornerRadius={{ top: 6, bottom: 6 }}
            data={sortedData[0]}
            style={{
              data: {
                fill: checkColor(sortedData[0]),
                width: 12,
                fontSize: 10
              },
              labels: {
                fontSize: 10,
                color: Colors.black
              }
            }}
          />

          <VictoryBar
             labels={({ datum }) => `${convertDecimal(dynamicDictionary,datum.y)?
              convertDecimal(dynamicDictionary,datum.y) + '%': datum.y+'%'}`}
            animate={{
              onLoad: { duration: 1000 },
              duration: 1000
            }}
            cornerRadius={{ top: 6, bottom: 6 }}
            data={sortedData[1]}
            style={{
              data: {
                fill: checkColor(sortedData[1]),
                width: 12,
                strokeLinejoin: 'round'
              }
            }}
          />
          <VictoryBar
      labels={({ datum }) => `${convertDecimal(dynamicDictionary,datum.y)?
        convertDecimal(dynamicDictionary,datum.y) + '%': datum.y+'%'}`}
            animate={{
              onLoad: { duration: 1000 },
              duration: 1000
            }}
            cornerRadius={{ top: 6, bottom: 6 }}
            data={sortedData[2]}
            style={{
              data: {
                fill: checkColor(sortedData[2]),
                width: 12,
                strokeLinejoin: 'round'
              }
            }}
          />
          <VictoryBar
              labels={({ datum }) => `${convertDecimal(dynamicDictionary,datum.y)?
                convertDecimal(dynamicDictionary,datum.y) + '%': datum.y+'%'}`}
            animate={{
              onLoad: { duration: 1000 },
              duration: 1000
            }}
            cornerRadius={{ top: 6, bottom: 6 }}
            data={sortedData[3]}
            style={{
              data: {
                fill: checkColor(sortedData[3]),
                width: 12,
                strokeLinejoin: 'round'
              }
            }}
          />
        </VictoryGroup>
      </VictoryChart>
    </View>
  );
};

export default CLOAttainmentDetails;
