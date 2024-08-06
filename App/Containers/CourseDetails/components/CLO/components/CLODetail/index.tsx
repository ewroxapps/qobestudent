import React, { useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import Graph from '../../../../../../Assets/SVGs/Graph';
import { useLanguage } from '../../../../../../Types/LanguageContext';
import { findWord } from '../../../../../../Utils/ParsingUtils';
import PlosDetails from '../PLODetail';
import styles from './styles';

const CLODetail = (props: any) => {
  const [detail, setDetail] = useState(false);
  const { dynamicDictionary, selectedDirection } = useLanguage();
  return (
    <View style={styles.pads}>
      {props.active === 'Yes' && (
        <View>
          <View style={styles.innerContainer}>
            <View
              style={[
                styles.containers,
                selectedDirection != 'left'
                  ? { justifyContent: 'flex-end', alignItems: 'flex-end' }
                  : {}
              ]}>
              <Text style={styles.codeText}>
                {findWord(dynamicDictionary, 'Code')
                  ? findWord(dynamicDictionary, 'Code')
                  : 'Code'}
              </Text>
              <Text style={styles.codeTextDetail}>{props.code}</Text>
            </View>

            <View
              style={[
                selectedDirection != 'left'
                  ? { justifyContent: 'flex-end', alignItems: 'flex-end' }
                  : {}
              ]}>
              <Text style={styles.codeText}>
                {findWord(dynamicDictionary, 'Discription')
                  ? findWord(dynamicDictionary, 'Discription')
                  : 'Discription'}
              </Text>
              <Text
                style={[
                  styles.disTextDetail,
                  selectedDirection != 'left' ? { textAlign: 'left' } : {}
                ]}>
                {props.discription}
              </Text>
            </View>
          </View>

          {props.plos.length != 0 ? (
            <View>
              {selectedDirection === 'left' ? (
                <View style={styles.stylesinner}>
                  <Text style={styles.mappingText}>
                    {props.code}{' '}
                    {findWord(dynamicDictionary, 'Mapping')
                      ? findWord(dynamicDictionary, 'Mapping')
                      : 'Mapping'}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setDetail(!detail);
                    }}>
                    <Text style={styles.viewDetailText}>
                      {' '}
                      {findWord(dynamicDictionary, 'View Details')
                        ? findWord(dynamicDictionary, 'View Details')
                        : 'Mapping'}
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.stylesinner}>
                    <TouchableOpacity
                    onPress={() => {
                      setDetail(!detail);
                    }}>
                    <Text style={styles.viewDetailText}>
                      {' '}
                      {findWord(dynamicDictionary, 'View Details')
                        ? findWord(dynamicDictionary, 'View Details')
                        : 'Mapping'}
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.mappingText}>
                    {props.code}{' '}
                    {findWord(dynamicDictionary, 'Mapping')
                      ? findWord(dynamicDictionary, 'Mapping')
                      : 'Mapping'}
                  </Text>
                </View>
              )}

              {detail && (
                <FlatList
                  data={props.plos}
                  renderItem={({ item }) => (
                    <PlosDetails
                      plo={item.plo}
                      emphasis={item.emphasis}
                      level={item.level}
                      learning_type={item.learning_type}
                    />
                  )}
                />
              )}
            </View>
          ) : (
            <View>
              <View style={styles.stylesinner1}>
                <Graph width={34} />
                <Text style={styles.nomappingText}>
                  {' '}
                  {findWord(dynamicDictionary, ' There is no mapping available')
                    ? findWord(
                        dynamicDictionary,
                        ' There is no mapping available'
                      )
                    : 'There is no mapping available'}{' '}
                </Text>
              </View>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default CLODetail;
