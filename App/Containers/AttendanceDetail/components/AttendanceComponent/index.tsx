import { Text, View } from 'react-native';
import { useLanguage } from '../../../../Types/LanguageContext';
import { convertNumberToArabic } from '../../../../Utils/ParsingUtils';
import styles from './styles';

const AttendanceComponent = (props: any) => {
  const { dynamicDictionary, selectedDirection } = useLanguage();

  return (
    <View>
      {selectedDirection === 'left' ? (
        <View style={styles.recordContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemLabel}>
              {convertNumberToArabic(dynamicDictionary, props.sr)
                ? convertNumberToArabic(dynamicDictionary, props.sr)
                : props.sr}{' '}
            </Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.dateLabel}>{props.date} </Text>
          </View>

          <View style={styles.itemContainers}>
            <Text style={styles.nameLabel}>{props.name}</Text>
          </View>
          <View style={styles.itemContainers}>
            <Text
              style={
                props.present === 'Yes' || props.present === 'نعم'
                  ? styles.itemLabel
                  : styles.itemLabel1
              }>
              {props.present}
            </Text>
          </View>
        </View>
      ) : (

        <View style={styles.recordContainer}>
        
        <View style={styles.itemContainers2}>
          <Text
            style={
              props.present === 'Yes' || props.present === 'نعم'
                ? styles.itemLabel
                : styles.itemLabel1
            }>
            {props.present}
          </Text>
        </View>

        <View style={styles.itemContainers2}>
          <Text style={styles.nameLabel}>{props.name}</Text>
        </View>
       

        <View style={[styles.itemContainers2,{justifyContent:'flex-end',alignItems:'flex-end'}]}>
          <Text style={styles.dateLabel}>{props.date} </Text>
        </View>
        <View style={[styles.itemContainers2,{justifyContent:'flex-end',alignItems:'flex-end'}]}>
          <Text style={[styles.itemLabel]}>
            {convertNumberToArabic(dynamicDictionary, props.sr)
              ? convertNumberToArabic(dynamicDictionary, props.sr)
              : props.sr}{' '}
          </Text>
        </View>
      </View>
      )}
    </View>
  );
};

export default AttendanceComponent;
