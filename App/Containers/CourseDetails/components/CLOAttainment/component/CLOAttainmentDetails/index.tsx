import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useLanguage } from '../../../../../../Types/LanguageContext';
import CloModal from '../CLOModal';
import styles from './styles';
import { ClosAttainmentProps } from './types';

const CLOAttainmentDetails = (props: ClosAttainmentProps) => {
  const [val, setVal] = React.useState(props.data.myvalue);
  const [vall, setVall] = React.useState(0);
  const [modal, setModal] = React.useState(false);
  let count = -1;
  const { dynamicDictionary, selectedDirection } = useLanguage();
  const heading = [
    'My Score',
    'Maximum Score',
    'Minimum Score',
    'Average Score'
  ];
  function click() {
    if (count === 0 && props.clickedBack) {
      count = 3;
      setVall(count);
      props.setHeader(heading[count]);
      props.setClickedBack(false);
      setVal(props.data.avg);
    } else if (count === 3 && props.clicked) {
      count = 0;
      setVall(count);
      props.setHeader(heading[count]);
      props.setClicked(false);
      setVal(props.data.myvalue);
    } else if (count < 3 && props.clicked) {
      count++;
      setVall(count);
      props.setHeader(heading[count]);
      props.setClicked(false);

      if (count === 0) {
        setVal(props.data.myvalue);
      } else if (count === 1) {
        setVal(props.data.max);
      } else if (count === 2) {
        setVal(props.data.min);
      } else if (count === 3) {
        setVal(props.data.avg);
      }
    } else if (count > 0 && props.clickedBack) {
      count--;
      setVall(count);
      props.setHeader(heading[count]);
      props.setClickedBack(false);

      if (count === 0) {
        setVal(props.data.avg);
      } else if (count === 1) {
        setVal(props.data.max);
      } else if (count === 2) {
        setVal(props.data.min);
      } else if (count === 3) {
        setVal(props.data.myvalue);
      }
    }
    console.debug(count);
  }

  useEffect(() => {
    count = vall;
    if (vall > 3) {
      setVal(0);
    }
    click();
  });
  return (
    <View style={styles.containers}>
      <TouchableOpacity
        onPress={() => {
          setModal(!modal);
        }}>
        {selectedDirection === 'left' ? (
          <View style={styles.headerContainer}>
            <View style={styles.innerView}>
              <Text style={styles.textHeader} numberOfLines={1}>
                {props.data.code}
              </Text>
              <Text style={styles.textHeader1} numberOfLines={1}>
                {props.data.desc}
              </Text>
            </View>

            <View style={styles.innerView1}>
              <Text style={styles.text}>{Number(val).toFixed(2)}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.headerContainer}>
            <View style={[styles.innerView1,{flex:1,justifyContent:'flex-start', left:25}]}>
              <Text style={styles.text}>{Number(val).toFixed(2)}</Text>
            </View>
            <View style={[styles.innerView,{flex:1,justifyContent:'flex-end'}]}>
              <Text style={[styles.textHeader1,{width:'100%', marginRight:10,}]} numberOfLines={1}>
                {props.data.desc}
              </Text>
              
              <Text style={styles.textHeader} numberOfLines={1}>
                {props.data.code}
              </Text>
            </View>
          </View>
        )}
      </TouchableOpacity>

      {modal ? (
        <CloModal
          modalVisible={modal}
          setModalVisible={setModal}
          code={props.data.code}
          description={props.data.desc}
          avg={props.data.avg}
          max={props.data.max}
          myscore={props.data.myvalue}
          min={props.data.min}
          from={props.from}
        />
      ) : null}
    </View>
  );
};

export default CLOAttainmentDetails;
