import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryTheme
} from 'victory-native';
import { CloseCircle } from '../../../../../../Assets/SVGs';
import { Colors } from '../../../../../../Themes';
import { useLanguage } from '../../../../../../Types/LanguageContext';
import { convertDecimal, convertNumberToArabic, findWord } from '../../../../../../Utils/ParsingUtils';
import styles from './styles';
import { CloProps } from './types';
const CLOModal = (props: CloProps) => {
  const {
    modalVisible = false,
    setModalVisible,
    code,
    description,
    avg,
    myscore,
    max,
    min
  } = props;
  const graphData = {
    average: [{ x: ' ', y: Number(props.avg).toFixed(2) }],
    maximum: [{ x: '  ', y: Number(props.max).toFixed(2) }],
    minimum: [{ x: '   ', y: Number(props.min).toFixed(2) }],
    myscore: [{ x: '    ', y: Number(props.myscore).toFixed(2) }]
  };
  const { dynamicDictionary, selectedDirection } = useLanguage();
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
  return (
    <Modal
      isVisible={modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.7}
      onBackButtonPress={() => {
        setModalVisible(false);
      }}>
      <View style={[styles.container]}>
        <View style={styles.topRowContainer}>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}>
              <CloseCircle />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            selectedDirection != 'left' ? { alignItems: 'flex-end' } : {}
          ]}>
          <View style={styles.bodering}>
            <Text style={styles.heading}>
              {findWord(dynamicDictionary, 'Code')
                ? findWord(dynamicDictionary, 'Code')
                : 'Code'}
            </Text>
            <Text style={styles.item}>{code}</Text>
          </View>
          <View style={styles.bodering}>
            <Text style={styles.heading}>
              {findWord(dynamicDictionary, 'Description')
                ? findWord(dynamicDictionary, 'Description')
                : 'Description'}
            </Text>
            <Text style={styles.item}>{description}</Text>
          </View>
          <View style={styles.scoreContainer}>
            <View style={styles.bodering}>
              <Text style={styles.heading}>
                {findWord(dynamicDictionary, 'My Score')
                  ? findWord(dynamicDictionary, 'My Score')
                  : 'My Score'}
              </Text>
              <Text style={styles.item}>{Number(myscore).toFixed(2)}</Text>
            </View>
            <View style={styles.bodering}>
              <Text style={styles.heading}>
                {findWord(dynamicDictionary, 'Average Score')
                  ? findWord(dynamicDictionary, 'Average Score')
                  : 'Average Score'}
              </Text>
              <Text style={styles.item}>{Number(avg).toFixed(2)}</Text>
            </View>
          </View>

          <View style={styles.scoreContainer}>
            <View style={styles.bodering}>
              <Text style={styles.heading}>
                {findWord(dynamicDictionary, 'Maximum Score')
                  ? findWord(dynamicDictionary, 'Maximum Score')
                  : 'Highest Score'}
              </Text>
              <Text
                style={[
                  styles.item,
                  selectedDirection != 'left' ? { top: 20 } : {}
                ]}>
                {Number(max).toFixed(2)}
              </Text>
            </View>
            <View style={styles.bodering}>
              <Text
                style={[
                  styles.heading,
                  selectedDirection != 'left' ? { marginRight: 100 } : {}
                ]}>
                {findWord(dynamicDictionary, 'Minimum Score')
                  ? findWord(dynamicDictionary, 'Minimum Score')
                  : 'Minimum Score'}
              </Text>
              <Text style={styles.item}>{Number(min).toFixed(2)}</Text>
            </View>
          </View>
          <View>
            <View
              style={[
                styles.clogrph,
                selectedDirection != 'left'
                  ? { justifyContent: 'flex-end' }
                  : {}
              ]}>
                {props.from === 'CLO'?(
                     <Text style={styles.textCLO}>
                     {findWord(dynamicDictionary, 'CLO Graph')
                       ? findWord(dynamicDictionary, 'CLO Graph')
                       : 'CLO Graph'}
                   </Text>

                ):(
                  <Text style={styles.textCLO}>
                  {findWord(dynamicDictionary, 'PLO Graph')
                    ? findWord(dynamicDictionary, 'PLO Graph')
                    : 'PLO Graph'}
                </Text>
                )

                }
           
            </View>

            <View
              style={{
                flexDirection: 'row',
                padding: 20
              }}>
              {selectedDirection === 'left' ? (
                <View
                  style={{
                    flexDirection: 'row'
                  }}>
                  <View style={styles.avg} />
                  <Text style={styles.texts}>
                    {findWord(dynamicDictionary, 'Average Score')
                      ? findWord(dynamicDictionary, 'Average Score')
                      : 'Average Score'}
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: 'row'
                  }}>
                  <Text style={styles.texts}>
                    {findWord(dynamicDictionary, 'My Score')
                      ? findWord(dynamicDictionary, 'My Score')
                      : 'My Score'}
                  </Text>
                  <View style={styles.my} />
                </View>
              )}

              {selectedDirection === 'left' ? (
                <View
                  style={{
                    flexDirection: 'row'
                  }}>
                  <View style={styles.max} />
                  <Text style={styles.texts}>
                    {' '}
                    {findWord(dynamicDictionary, 'Maximum Score')
                      ? findWord(dynamicDictionary, 'Maximum Score')
                      : 'Maximum Score'}
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: 'row'
                  }}>
                  <Text style={styles.texts}>
                    {' '}
                    {findWord(dynamicDictionary, 'Minimum Score')
                      ? findWord(dynamicDictionary, 'Minimum Score')
                      : 'Minimum Score'}
                  </Text>
                  <View style={styles.min} />
                </View>
              )}
              {selectedDirection === 'left' ? (
                <View
                  style={{
                    flexDirection: 'row'
                  }}>
                  <View style={styles.min} />
                  <Text style={styles.texts}>
                    {' '}
                    {findWord(dynamicDictionary, 'Minimum Score')
                      ? findWord(dynamicDictionary, 'Minimum Score')
                      : 'Minimum Score'}
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: 'row'
                  }}>
                  <Text style={styles.texts}>
                    {' '}
                    {findWord(dynamicDictionary, 'Maximum Score')
                      ? findWord(dynamicDictionary, 'Maximum Score')
                      : 'Maximum Score'}
                  </Text>
                  <View style={styles.max} />
                </View>
              )}

              {selectedDirection === 'left' ? (
                <View
                  style={{
                    flexDirection: 'row'
                  }}>
                  <View style={styles.my} />
                  <Text style={styles.texts}>
                    {findWord(dynamicDictionary, 'My Score')
                      ? findWord(dynamicDictionary, 'My Score')
                      : 'My Score'}
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: 'row'
                  }}>
                  <Text style={styles.texts}>
                    {findWord(dynamicDictionary, 'Average Score')
                      ? findWord(dynamicDictionary, 'Average Score')
                      : 'Average Score'}
                  </Text>
                  <View style={styles.avg} />
                </View>
              )}
            </View>
          </View>

          <View style={{ marginLeft: 30, left:20 }}>
            <VictoryChart
              domainPadding={5}
              theme={VictoryTheme.material}
              width={Dimensions.get('window').width}
              padding={{ left: 52, right: 42, top: 20, bottom: 40 }}
              height={Dimensions.get('window').height / 3.5}>
              <VictoryAxis
                label={props.code}
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
                  labels={({ datum }) =>  `${convertDecimal(dynamicDictionary,datum.y)?
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
        </View>
      </View>
    </Modal>
  );
};
export default CLOModal;
