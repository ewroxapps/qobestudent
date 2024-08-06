import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Arros from '../../../../../../Assets/SVGs/Arros';
import Circles from '../../../../../../Assets/SVGs/Circles';
import Learning from '../../../../../../Assets/SVGs/Learning';
import Levels from '../../../../../../Assets/SVGs/Levels';
import { useLanguage } from '../../../../../../Types/LanguageContext';
import { findWord } from '../../../../../../Utils/ParsingUtils';
import styles from './styles';
import { HeadersProps } from './types';
const PlosDetail = (props: HeadersProps) => {
  const { dynamicDictionary, selectedDirection } = useLanguage();
  return (
    <View style={styles.containers}>
      <View
        style={[
          styles.PlosContainer,
          selectedDirection != 'left' ? { alignItems: 'flex-end' } : {}
        ]}>
        {selectedDirection === 'left' ? (
          <View style={styles.itemContainer}>
            <Circles />
            <Text style={styles.textHeader}>PLOs</Text>
          </View>
        ) : (
          <View style={styles.itemContainer}>
            <Text style={[styles.textHeader, { marginRight: 5 }]}>PLOs</Text>
            <Circles />
          </View>
        )}

        <Text style={styles.disText}>{props.plo}</Text>

        <View style={styles.itemContainer1}>
          <View
            style={[
              selectedDirection === 'left' ? styles.forLeft : styles.forRight
            ]}>
            {selectedDirection === 'left' ? (
              <View style={[styles.itemContainer]}>
                <Learning />
                <Text style={styles.textHeader}>
                  {' '}
                  {findWord(dynamicDictionary, 'Learning Type')
                    ? findWord(dynamicDictionary, 'Learning Type')
                    : 'Learning Type'}
                </Text>
              </View>
            ) : (
              <View style={[styles.itemContainer]}>
                <Text style={styles.textHeader}>
                  {' '}
                  {findWord(dynamicDictionary, 'Learning Type')
                    ? findWord(dynamicDictionary, 'Learning Type')
                    : 'Learning Type'}
                </Text>
                <Learning />
              </View>
            )}

            <Text style={styles.disText}>{props.learning_type}</Text>
          </View>

          <View
            style={[
              selectedDirection === 'left' ? styles.forLeft : styles.forRight
            ]}>
            {selectedDirection === 'left' ? (
              <View style={styles.itemContainer}>
                <Arros />
                <Text style={styles.textHeader}>
                  {findWord(dynamicDictionary, 'Level')
                    ? findWord(dynamicDictionary, 'Level')
                    : 'Level'}
                </Text>
              </View>
            ) : (
              <View style={styles.itemContainer}>
                <Text style={styles.textHeader}>
                  {findWord(dynamicDictionary, 'Level')
                    ? findWord(dynamicDictionary, 'Level')
                    : 'Level'}
                </Text>
                <Arros />
              </View>
            )}

            <Text style={styles.disText}>{props.level}</Text>
          </View>
        </View>

        {selectedDirection === 'left' ? (
          <View style={styles.itemContainer}>
            <Levels />
            <Text style={styles.textHeader}>
              {findWord(dynamicDictionary, 'Emphasis Level')
                ? findWord(dynamicDictionary, 'Emphasis Level')
                : 'Emphasis Level'}
            </Text>
          </View>
        ) : (
          <View style={styles.itemContainer}>
            <Text style={[styles.textHeader,{marginRight:3}]}>
              {findWord(dynamicDictionary, 'Emphasis Level')
                ? findWord(dynamicDictionary, 'Emphasis Level')
                : 'Emphasis Level'}
            </Text>
            <Levels />
          </View>
        )}

        <Text style={styles.levelText}>{props.emphasis}</Text>
      </View>
    </View>
  );
};

export default PlosDetail;
