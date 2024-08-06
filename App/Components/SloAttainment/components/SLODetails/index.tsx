import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useLanguage } from '../../../../Types/LanguageContext';
import {
  convertNumberToArabic,
  findWord
} from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { SlosProps } from './types';
const SLODetails = (props: SlosProps) => {
  const [val, setVal] = React.useState(props.data.plo);
  const [vall, setVall] = React.useState(0);
  const [show, setShow] = React.useState(false);

  let count = -1;
  const heading = ['PLOs', 'Percentage', 'CLO Attainment'];
  const { selectedDirection, dynamicDictionary } = useLanguage();

  function click() {
    if (count === 0 && props.clickedBack) {
      count = 2;
      setVall(count);
      props.setHeader(heading[count]);
      props.setClickedBack(false);
      setVal(props.data.clo_val.toString());
    } else if (count === 2 && props.clicked) {
      count = 0;
      setVall(count);
      props.setHeader(heading[count]);
      props.setClicked(false);
      setVal(props.data.plo);
    } else if (count < 2 && props.clicked) {
      count++;
      setVall(count);
      props.setHeader(heading[count]);
      props.setClicked(false);

      if (count === 0) {
        setVal(props.data.plo);
      } else if (count === 1) {
        setVal(props.data.per);
      } else if (count === 2) {
        setVal(props.data.clo_val.toString());
      }
    } else if (count > 0 && props.clickedBack) {
      count--;
      setVall(count);
      props.setHeader(heading[count]);
      props.setClickedBack(false);

      if (count === 0) {
        setVal(props.data.plo);
      } else if (count === 1) {
        setVal(props.data.per);
      } else if (count === 2) {
        setVal(props.data.clo_val.toString());
      }
    }
  }

  function getRedColor() {
    if (props.header === 'CLO Attainment') {
      var x = Number(props.data.per);
      if (props.data.clo_val < x) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  useEffect(() => {
    count = vall;
    if (vall > 2) {
      setVall(0);
    }
    click();
  });

  function CourseName(name: string) {
    const newString = name.split(',')[0];
    const newString2 = newString.split(' - ')[1];
    return newString2;
  }
  function PLOName(name: string) {
    const newString = name.split('-')[0];
    return newString;
  }
  function PLODis(name: string) {
    const newString = name.split('-')[1];
    return newString;
  }

  return (
    <ScrollView key={props.index}>
      {props.index === 0 ? (
        <View style={{ marginBottom: 20 }}>
          <View style={styles.container}>
          <View style={[styles.itemContainer,selectedDirection!='left'?{
                  alignItems:'flex-end'
                }:{}]}>
              <Text style={[styles.textstyle,selectedDirection!='left'?{
                    textAlign:'right'
                  }:{}]}>
                {CourseName(props.data.name)}
              </Text>
            </View>
            <View style={[styles.itemContainer1,selectedDirection!='left'?{marginLeft:0}:{}]}>
              <Text style={[styles.textstyle,selectedDirection!='left'?{
                    textAlign:'right'
                  }:{}]}>{props.data.classroom_name}</Text>
            </View>
          </View>
        </View>
      ) : (
        <View>
          {props.data.name != props.previousdata.name && (
            <View style={{ marginBottom: 20 }}>
              <View style={styles.container}>
                <View style={[styles.itemContainer,selectedDirection!='left'?{
                  alignItems:'flex-end'
                }:{}]}>
                  <Text style={[styles.textstyle,selectedDirection!='left'?{
                    textAlign:'right'
                  }:{}]}>
                    {CourseName(props.data.name)}
                  </Text>
                </View>
                <View style={[styles.itemContainer1,selectedDirection!='left'?{
                  alignItems:'flex-end',marginLeft:0
                }:{}]}>
                  <Text style={[styles.textstyle,selectedDirection!='left'?{
                    textAlign:'right'
                  }:{}]}>
                    {props.data.classroom_name}
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
      )}

      {props.index === 0 ? (
        <TouchableOpacity
          onPress={() => {
            setShow(!show);
          }}>
          {!show ? (
            <View style={styles.container2}>
              <View style={[styles.itemContainer2,selectedDirection!='left'?{alignItems:'flex-end'}:{}]}>
                <Text style={styles.ploNametext}>{props.data.clo_code}</Text>
                <Text style={styles.ploDistext}>{props.data.clo_desc}</Text>
              </View>

              {props.header === 'PLO Discription' ? (
                <View style={styles.itemContainer2}>
                  <Text style={styles.ploNametext}>
                    {PLOName(props.data.plo)}
                  </Text>
                  <Text style={styles.ploDistext}>
                    {PLODis(props.data.plo)}
                  </Text>
                </View>
              ) : (
                <View style={styles.itemContainer2}>
                  <Text
                    style={
                      getRedColor() ? styles.valametext1 : styles.valametext
                    }>
                    {convertNumberToArabic(dynamicDictionary,val)?
                  convertNumberToArabic(dynamicDictionary,val):val  
                  }
                  </Text>
                </View>
              )}
            </View>
          ) : (
            <View>
              <View style={styles.container3}>
                <View
                  style={[
                    styles.itemContainer2,
                    ,
                    selectedDirection != 'left'
                      ? {
                          alignItems: 'flex-end'
                        }
                      : {}
                  ]}>
                  <Text style={[styles.ploNametext,
                   selectedDirection != 'left' ? { textAlign: 'right' } : {}
                  ]}>{props.data.clo_code}</Text>
                  <Text
                    style={[
                      styles.ploDistext,
                      selectedDirection != 'left' ? { textAlign: 'right' } : {}
                    ]}>
                    {props.data.clo_desc}
                  </Text>
                </View>
                <View
                  style={[
                    styles.itemContainer2,
                    selectedDirection != 'left'
                      ? {
                          alignItems: 'flex-end'
                        }
                      : {}
                  ]}>
                  <Text style={styles.ploDistexxt}>
                    {convertNumberToArabic(
                      dynamicDictionary,
                      props.data.clo_val
                    )
                      ? convertNumberToArabic(
                          dynamicDictionary,
                          props.data.clo_val
                        )
                      : props.data.clo_val}
                  </Text>
                </View>
              </View>

              <View style={styles.container3}>
                <View
                  style={[
                    styles.itemContainer2,
                    selectedDirection != 'left'
                      ? {
                          alignItems: 'flex-end'
                        }
                      : {}
                  ]}>
                  <Text style={[styles.ploNametext,
                   selectedDirection != 'left' ? { textAlign: 'right' } : {}
                  ]}>
                    {PLOName(props.data.plo)}
                  </Text>
                  <Text style={[styles.ploDistext,
                   selectedDirection != 'left' ? { textAlign: 'right' } : {}
                  ]}>
                    {PLODis(props.data.plo)}
                  </Text>
                </View>

                <View
                  style={[
                    styles.itemContainer2,
                    selectedDirection != 'left'
                      ? {
                          alignItems: 'flex-end'
                        }
                      : {}
                  ]}>
                  <Text style={styles.reqPer}>
                    {findWord(dynamicDictionary, 'Required Percentage')
                      ? findWord(dynamicDictionary, 'Required Percentage')
                      : 'Required Precentage'}
                  </Text>
                  <Text style={styles.ploDistext}>
                    {convertNumberToArabic(dynamicDictionary, props.data.per)
                      ? convertNumberToArabic(dynamicDictionary, props.data.per)
                      : props.data.per}
                  </Text>
                </View>
              </View>
            </View>
          )}
        </TouchableOpacity>
      ) : (
        <View>
          {props.data.name === props.previousdata.name ? (
            <TouchableOpacity
              onPress={() => {
                setShow(!show);
              }}>
              {!show ? (
                <View style={styles.container2}>
                  <View style={[styles.itemContainer2,selectedDirection!='left'?{
                    alignItems:'flex-end' }:{}]}>
                    <Text style={[styles.ploNametext,
                     selectedDirection != 'left' ? { textAlign: 'right' } : {}
                    ]}>
                      {props.data.clo_code}
                    </Text>
                    <Text style={[styles.ploDistext,
                     selectedDirection != 'left' ? { textAlign: 'right' } : {}
                    ]}>{props.data.clo_desc}</Text>
                  </View>

                  {props.header === 'PLO Discription' ? (
                    <View style={styles.itemContainer2}>
                      <Text style={styles.ploNametext}>
                        {PLOName(props.data.plo)}
                      </Text>
                      <Text style={styles.ploDistext}>
                        {PLODis(props.data.plo)}
                      </Text>
                    </View>
                  ) : (
                    <View style={styles.itemContainer2}>
                      <Text
                        style={
                          getRedColor() ? styles.valametext1 : styles.valametext
                        }>
                         {convertNumberToArabic(dynamicDictionary,val)?
                  convertNumberToArabic(dynamicDictionary,val):val  
                  }
                      </Text>
                    </View>
                  )}
                </View>
              ) : (
                <View>
                  <View style={styles.container3}>
                    <View style={[styles.itemContainer2,selectedDirection!='left'?{
                      alignItems:'flex-end'
                    }:{}]}>
                      <Text style={[styles.ploNametext,selectedDirection!='left'?{
                      textAlign:'right'
                    }:{}]}>
                        {props.data.clo_code}
                      </Text>
                      <Text style={[styles.ploDistext,selectedDirection!='left'?{
                      textAlign:'right'
                    }:{}]}>
                        {props.data.clo_desc}
                      </Text>
                    </View>
                    <View style={[styles.itemContainer2,selectedDirection!='left'?{
                      alignItems:'flex-end'
                    }:{}]}>
                      <Text style={styles.ploNametext}>
                        {convertNumberToArabic(dynamicDictionary,props.data.clo_val)?
                        convertNumberToArabic(dynamicDictionary,props.data.clo_val):
                        props.data.clo_val
                        }
                      </Text>
                    </View>
                  </View>

                  <View style={styles.container3}>
                    <View style={[styles.itemContainer2,selectedDirection!='left'?{
                      alignItems:'flex-end'
                    }:{}]}>
                      <Text style={[styles.ploNametext,selectedDirection!='left'?{
                     textAlign:'right'
                    }:{}]}>
                        {PLOName(props.data.plo)}
                      </Text>
                      <Text style={[styles.ploDistext,selectedDirection!='left'?{
                      textAlign:'right'
                    }:{}]}>
                        {PLODis(props.data.plo)}
                      </Text>
                    </View>
                    <View style={[styles.itemContainer2,selectedDirection!='left'?{
                      alignItems:'flex-end'
                    }:{}]}>
                      <Text style={styles.reqPer}>{findWord(dynamicDictionary,'Required Percentage')?
                    findWord(dynamicDictionary,'Required Percentage'):'Required Precentage'  
                    }</Text>
                      <Text style={styles.ploDistext}>{convertNumberToArabic(dynamicDictionary,props.data.per)?
                    convertNumberToArabic(dynamicDictionary,props.data.per):props.data.per  
                    }</Text>
                    </View>
                  </View>
                </View>
              )}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setShow(!show);
              }}>
              {!show ? (
                <View style={styles.container2}>
                  <View style={[styles.itemContainer2,selectedDirection!='left'?{
                    alignItems:'flex-end'
                  }:{}]}>
                    <Text style={styles.ploNametext}>
                      {props.data.clo_code}
                    </Text>
                    <Text style={styles.ploDistext}>{props.data.clo_desc}</Text>
                  </View>

                  {props.header === 'PLO Discription' ? (
                    <View style={styles.itemContainer2}>
                      <Text style={styles.ploNametext}>
                        {PLOName(props.data.plo)}
                      </Text>
                      <Text style={styles.ploDistext}>
                        {PLODis(props.data.plo)}
                      </Text>
                    </View>
                  ) : (
                    <View style={styles.itemContainer2}>
                      <Text
                        style={
                          getRedColor() ? styles.valametext1 : styles.valametext
                        }>
                        {convertNumberToArabic(dynamicDictionary,val)?
                  convertNumberToArabic(dynamicDictionary,val):val  
                  }
                      </Text>
                    </View>
                  )}
                </View>
              ) : (
                <View>
                  <View style={styles.container3}>
                    <View style={[styles.itemContainer2,selectedDirection!='left'?{
                      alignItems:'flex-end'
                    }:{}]}>
                      <Text style={[styles.ploNametext,selectedDirection!='left'?{
                     textAlign:'right'
                    }:{}]}>
                        {props.data.clo_code}
                      </Text>
                      <Text style={[styles.ploDistext,selectedDirection!='left'?{
                      textAlign:'right'
                    }:{}]}>
                        {props.data.clo_desc}
                      </Text>
                    </View>
                    <View style={[styles.itemContainer2,selectedDirection!='left'?{
                      alignItems:'flex-end'
                    }:{}]}>
                      <Text style={styles.ploNametext}>
                      {convertNumberToArabic(dynamicDictionary,props.data.clo_val)?
                    convertNumberToArabic(dynamicDictionary,props.data.clo_val):props.data.clo_val  
                    }
                      </Text>
                    </View>
                  </View>

                  <View style={styles.container3}>
                    <View style={[styles.itemContainer2,selectedDirection!='left'?{
                      alignItems:'flex-end'
                    }:{}]}>
                      <Text style={[styles.ploNametext,selectedDirection!='left'?{
                     textAlign:'right'
                    }:{}]}>
                        {PLOName(props.data.plo)}
                      </Text>
                      <Text style={[styles.ploDistext,selectedDirection!='left'?{
                      textAlign:'right'
                    }:{}]}>
                        {PLODis(props.data.plo)}
                      </Text>
                    </View>
                    <View style={[styles.itemContainer2,selectedDirection!='left'?{
                      alignItems:'flex-end'
                    }:{}]}>
                      <Text style={styles.reqPer}>{findWord(dynamicDictionary,'Required Percentage')?
                      findWord(dynamicDictionary,'Required Percentage'):'Required PErcentage'
                      }</Text>
                      <Text style={styles.ploDistext}>{convertNumberToArabic(dynamicDictionary,props.data.per)?
                    convertNumberToArabic(dynamicDictionary,props.data.per):props.data.per  
                    }</Text>
                    </View>
                  </View>
                </View>
              )}
            </TouchableOpacity>
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default SLODetails;
