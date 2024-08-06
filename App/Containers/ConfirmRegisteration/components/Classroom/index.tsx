import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../../../../Themes';
import styles from './styles';
import { classListProps } from './types';
const Classroom = (props: classListProps) => {

  let doesObjectExist=false
  const [select, setSelect] = useState(false);
  useEffect(() => {
       doesObjectExist = props.classroom.some(item => {
         if(item.classroom.id === props.data.id){
          console.debug(item.classroom.id === props.data.id)
          setSelect(true)
         }else{
          setSelect(false)
         }
      return item.classroom.id === props.data.id;
    });
  }, [props.data,select,setSelect]);

  
  return (
    <View style={styles.radioButton}>
      <View
        style={[
          styles.radioCircle,
          {
            backgroundColor: select ? Colors.quizBlue : Colors.backgroundWhite
          }
        ]}>
        {select && <View style={styles.selectedRadioInnerCircle} />}
      </View>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.Nolabel}>Teacher:</Text>
          <Text style={styles.label}>{props.data?.teacher}</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.Nolabel}>Timing:</Text>
          <Text style={styles.label}>{props.data?.timing}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.Nolabel}>Section:</Text>
          <Text style={styles.label}>{props.data?.section}</Text>
        </View>
      </View>
    </View>
  );
};

export default Classroom;
