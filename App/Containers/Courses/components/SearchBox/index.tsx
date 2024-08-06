import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Search } from '../../../../Assets/SVGs';
import { useLanguage } from '../../../../Types/LanguageContext';
import { convertNumberToArabic, findWord } from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { SearchBoxProps } from './types';
const SearchBox = (props: SearchBoxProps) => {
  const { t } = useTranslation('myCourses');
  const [searchString, setSearchString] = useState('');
  const { searchCourses, numberOfCourses = 0 } = props;
  const { dynamicDictionary, selectedDirection } = useLanguage();

  useEffect(() => {}, [selectedDirection, dynamicDictionary]);

  const leftSearch = () => {
    return (
      <View style={styles.topRow}>
        <Search />
        <Text style={styles.searchText}>
          {findWord(dynamicDictionary, 'Search')
            ? findWord(dynamicDictionary, 'Search')
            : 'Search'}
        </Text>
      </View>
    );
  };

  const rightSearch = () => {
    return (
      <View style={styles.topRow}>
        <Text style={styles.searchText}>
          {findWord(dynamicDictionary, 'Search')
            ? findWord(dynamicDictionary, 'Search')
            : 'Search'}
        </Text>
        <Search />
      </View>
    );
  };

  const leftDesign = () => {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          value={searchString}
          style={[styles.boxStyles, styles.inputField, styles.textInput]}
          onChangeText={value => {
            setSearchString(value);
            searchCourses(value);
          }}
        />
        <View style={styles.bottomRow}>
          <Text>
            {findWord(dynamicDictionary, 'Total Result')
              ? findWord(dynamicDictionary, 'Total Result')
              : 'Total Result'}
            : {numberOfCourses}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setSearchString('');
              searchCourses('');
            }}>
            <Text style={styles.clearResults}>
              {findWord(dynamicDictionary, 'Clear Filter')
                ? findWord(dynamicDictionary, 'Clear Filter')
                : 'Clear Filter'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };


  const rightDeign =() =>{
    return (
      <View style={styles.inputContainer}>
      <TextInput
        value={searchString}
        style={[styles.boxStyles2, styles.inputField, styles.textInput]}
        onChangeText={value => {
          setSearchString(value);
          searchCourses(value);
        }}
      />
      <View style={styles.bottomRow}>
        <TouchableOpacity
          onPress={() => {
            setSearchString('');
            searchCourses('');
          }}>
          <Text style={styles.clearResults}>
            {findWord(dynamicDictionary, 'Clear Filter')
              ? findWord(dynamicDictionary, 'Clear Filter')
              : 'Clear Filter'}
          </Text>
        </TouchableOpacity>

        <Text>
          {findWord(dynamicDictionary, 'Total Result')
            ? findWord(dynamicDictionary, 'Total Result')
            : 'Total Result'}
          : {convertNumberToArabic(dynamicDictionary,numberOfCourses)??numberOfCourses}
        </Text>
      </View>
    </View>
    )
  }
  return (
    <View style={styles.container}>
      {selectedDirection === 'left' ? (
        <View>
          {leftSearch()}
          {leftDesign()}
        </View>
      ) : (
        <View>
          {rightSearch()}
          {rightDeign()}
          </View>
      )}
    </View>
  );
};

export default SearchBox;
