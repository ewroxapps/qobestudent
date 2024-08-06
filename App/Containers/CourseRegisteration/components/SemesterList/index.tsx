import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import SemesterNumber from '../SemesterNumber';
import styles from './styles';
import { facultyProps } from './types';
const SemesterList = (props: facultyProps) => {
  const semester = props.data.name.split(' - ')[1];
  const coursesForId = props.courses[props.data.id];
  const semesterKeys = Object.keys(coursesForId);
  const { dynamicDictionary, selectedDirection,
    courseRegSingleChoice } = useLanguage();

    const [semesterKeys1, setSemesterKeys1] = useState<string[]>([]);

    const registrationIds = Object.keys(props.filteredData);
    useEffect(() => {
      const allSemesterKeys: string[] = [];
  
      registrationIds.forEach((registrationId) => {
        const keys = Object.keys(props.filteredData[registrationId]);
        allSemesterKeys.push(...keys);
      });
  
      setSemesterKeys1(allSemesterKeys);
    }, [props.filteredData]);
  return (
    <View>
      
      <View style={styles.container}>
        {selectedDirection === 'left' ? (
          <View style={styles.justfyView}>
            <Text style={styles.textcolor}>{semester}</Text>
            <Text style={styles.textcolor}>
              {findWord(dynamicDictionary, 'Open till')
                ? findWord(dynamicDictionary, 'Open till')
                : 'Open till'}
              : {props.data.end_date}
            </Text>
          </View>
        ) : (
          <View style={styles.justfyView}>
            <Text style={styles.textcolor}>
              {findWord(dynamicDictionary, 'Open till')
                ? findWord(dynamicDictionary, 'Open till')
                : 'Open till'}
              : {props.data.end_date}
            </Text>
            <Text style={[styles.textcolor]}>{semester}</Text>
          </View>
        )}

        <Text style={styles.textcolorWhite}>{props.data.name}</Text>
      </View>

      <FlatList
        style={{ marginBottom: 20 }}
        data={courseRegSingleChoice && semesterKeys1.length>0 ? semesterKeys1:semesterKeys}
        keyExtractor={(item, index) => {
          const key = item.toString();
          return key;
        }}
        renderItem={({ item, index }) => (
          <SemesterNumber
            registerationId={props.data.id}
            reg={props.reg}
            setReg={props.setReg}
            unReg={props.unReg}
            setUnReg={props.setUnReg}
            semester={item}
            courseId={coursesForId}
            check={props.check}
            setCheck={props.setCheck}
            selectedRadioButtons={props.selectedRadioButtons}
            setSelectedRadioButtons={props.setSelectedRadioButtons}
            uncheck={props.uncheck}
            setUnCheck={props.setUnCheck}
            singlePick = {courseRegSingleChoice && semesterKeys1.length>0}
          />
        )}
      />
    </View>
  );
};

export default SemesterList;
