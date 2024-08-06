import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useLanguage } from '../../../../Types/LanguageContext';
import {
    convertNumberToArabic,
    findWord
} from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { PlosProps } from './types';
const PLOssDetails = (props: PlosProps) => {
  const [show, setShow] = React.useState(false);
  const [vall, setVall] = React.useState(0);
  const [val, setVal] = React.useState(props.data.per350);
  let count = -1;
  const heading = [
    'PLO 1',
    'PLO 2',
    'PLO 3',
    'PLO 4',
    'PLO 5',
    'PLO 6',
    'PLO 7',
    'PLO 8',
    'PLO 9',
    'PLO 10'
  ];

  function click() {
    if (count === 0 && props.clickedBack) {
      count = 9;
      setVall(count);
      props.setHeader(heading[count]);
      props.setClickedBack(false);
      setVal(props.data.per359);
    } else if (count === 9 && props.clicked) {
      count = 0;
      setVall(count);
      props.setHeader(heading[count]);
      props.setClicked(false);
      setVal(props.data.per350);
    } else if (count < 9 && props.clicked) {
      count++;
      setVall(count);
      props.setHeader(heading[count]);
      props.setClicked(false);

      if (count === 0) {
        setVal(props.data.per350);
      } else if (count === 1) {
        setVal(props.data.per351);
      } else if (count === 2) {
        setVal(props.data.per352);
      } else if (count === 3) {
        setVal(props.data.per353);
      } else if (count === 4) {
        setVal(props.data.per354);
      } else if (count === 5) {
        setVal(props.data.per355);
      } else if (count === 6) {
        setVal(props.data.per356);
      } else if (count === 7) {
        setVal(props.data.per357);
      } else if (count === 8) {
        setVal(props.data.per358);
      } else if (count === 9) {
        setVal(props.data.per359);
      }
    } else if (count > 0 && props.clickedBack) {
      count--;
      setVall(count);
      props.setHeader(heading[count]);
      props.setClickedBack(false);

      if (count === 0) {
        setVal(props.data.per350);
      } else if (count === 1) {
        setVal(props.data.per351);
      } else if (count === 2) {
        setVal(props.data.per352);
      } else if (count === 3) {
        setVal(props.data.per353);
      } else if (count === 4) {
        setVal(props.data.per354);
      } else if (count === 5) {
        setVal(props.data.per355);
      } else if (count === 6) {
        setVal(props.data.per356);
      } else if (count === 7) {
        setVal(props.data.per357);
      } else if (count === 8) {
        setVal(props.data.per358);
      } else if (count === 9) {
        setVal(props.data.per359);
      }
    }
  }
  function getRedColor(myVal: any) {
    var x = Number(props.data.kpi);
    if (myVal < x) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    count = vall;
    if (vall > 9) {
      setVall(0);
      count = vall;
    }
    click();
  });

  const { selectedDirection, dynamicDictionary } = useLanguage();

  return (
    <ScrollView>
      {props.index === 0 ? (
        <View
          style={[
            styles.container,
            selectedDirection != 'left'
              ? {
                  justifyContent: 'flex-end'
                }
              : {}
          ]}>
          <Text style={styles.textstyle}>
            {findWord(dynamicDictionary, 'Semester')
              ? findWord(dynamicDictionary, 'Semester')
              : 'Semester'}{' '}
            {convertNumberToArabic(dynamicDictionary, props.data.semester)
              ? convertNumberToArabic(dynamicDictionary, props.data.semester)
              : props.data.semester}
          </Text>
        </View>
      ) : (
        <View>
          {props.data.semester != props.previousdata.semester && (
            <View
              style={[
                styles.container,
                selectedDirection != 'left'
                  ? {
                      justifyContent: 'flex-end'
                    }
                  : {}
              ]}>
              <Text style={styles.textstyle}>
                {findWord(dynamicDictionary, 'Semester')
                  ? findWord(dynamicDictionary, 'Semester')
                  : 'Semester'}{' '}
                {convertNumberToArabic(dynamicDictionary, props.data.semester)
                  ? convertNumberToArabic(
                      dynamicDictionary,
                      props.data.semester
                    )
                  : props.data.semester}
              </Text>
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
              {selectedDirection != 'left' ? (
                <View style={styles.itemContainer2}>
                  <Text
                    style={
                      getRedColor(val) ? styles.valametext1 : styles.valametext
                    }>
                    {convertNumberToArabic(dynamicDictionary, val)
                      ? convertNumberToArabic(dynamicDictionary, val)
                      : val}
                  </Text>
                </View>
              ) : null}

              <View style={styles.itemContainer2}>
                <Text style={styles.ploNametext}>{props.data.name}</Text>
                <Text style={styles.ploDistext}>{props.data.course}</Text>
              </View>

              {selectedDirection === 'left' ? (
                <View style={styles.itemContainer2}>
                  <Text
                    style={
                      getRedColor(val) ? styles.valametext1 : styles.valametext
                    }>
                    {convertNumberToArabic(dynamicDictionary, val)
                      ? convertNumberToArabic(dynamicDictionary, val)
                      : val}
                  </Text>
                </View>
              ) : null}
            </View>
          ) : (
            <View>
              <View style={styles.container3}>
                <View
                  style={[
                    styles.itemContainer2,
                    selectedDirection != 'left'
                      ? { alignItems: 'flex-end' }
                      : {}
                  ]}>
                  <Text style={styles.ploNametext}>{props.data.name}</Text>
                  <Text style={styles.ploDistext}>{props.data.course}</Text>
                </View>
              </View>

              <View style={styles.container3}>
                <ScrollView horizontal={true}>
                  <View style={{ padding: 20 }}>
                    <Text style={styles.plotext}>PLO 1</Text>
                    <Text
                      style={
                        getRedColor(props.data.per350)
                          ? styles.valametext1
                          : styles.valametext
                      }>
                      {convertNumberToArabic(
                        dynamicDictionary,
                        props.data.per350
                      )
                        ? convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per350
                          )
                        : props.data.per350}
                    </Text>
                  </View>

                  <View style={{ padding: 20 }}>
                    <Text style={styles.plotext}>PLO 2</Text>
                    <Text
                      style={
                        getRedColor(props.data.per351)
                          ? styles.valametext1
                          : styles.valametext
                      }>
                      {convertNumberToArabic(
                        dynamicDictionary,
                        props.data.per351
                      )
                        ? convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per351
                          )
                        : props.data.per351}
                    </Text>
                  </View>

                  <View style={{ padding: 20 }}>
                    <Text style={styles.plotext}>PLO 3</Text>
                    <Text
                      style={
                        getRedColor(props.data.per352)
                          ? styles.valametext1
                          : styles.valametext
                      }>
                      {convertNumberToArabic(
                        dynamicDictionary,
                        props.data.per352
                      )
                        ? convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per352
                          )
                        : props.data.per352}
                    </Text>
                  </View>

                  <View style={{ padding: 20 }}>
                    <Text style={styles.plotext}>PLO 4</Text>
                    <Text
                      style={
                        getRedColor(props.data.per353)
                          ? styles.valametext1
                          : styles.valametext
                      }>
                      {convertNumberToArabic(
                        dynamicDictionary,
                        props.data.per353
                      )
                        ? convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per353
                          )
                        : props.data.per353}
                    </Text>
                  </View>

                  <View style={{ padding: 20 }}>
                    <Text style={styles.plotext}>PLO 5</Text>
                    <Text
                      style={
                        getRedColor(props.data.per354)
                          ? styles.valametext1
                          : styles.valametext
                      }>
                      {convertNumberToArabic(
                        dynamicDictionary,
                        props.data.per354
                      )
                        ? convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per354
                          )
                        : props.data.per354}
                    </Text>
                  </View>

                  <View style={{ padding: 20 }}>
                    <Text style={styles.plotext}>PLO 6</Text>
                    <Text
                      style={
                        getRedColor(props.data.per355)
                          ? styles.valametext1
                          : styles.valametext
                      }>
                      {convertNumberToArabic(
                        dynamicDictionary,
                        props.data.per355
                      )
                        ? convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per355
                          )
                        : props.data.per355}
                    </Text>
                  </View>

                  <View style={{ padding: 20 }}>
                    <Text style={styles.plotext}>PLO 7</Text>
                    <Text
                      style={
                        getRedColor(props.data.per356)
                          ? styles.valametext1
                          : styles.valametext
                      }>
                      {convertNumberToArabic(
                        dynamicDictionary,
                        props.data.per356
                      )
                        ? convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per356
                          )
                        : props.data.per356}
                    </Text>
                  </View>

                  <View style={{ padding: 20 }}>
                    <Text style={styles.plotext}>PLO 8</Text>
                    <Text
                      style={
                        getRedColor(props.data.per357)
                          ? styles.valametext1
                          : styles.valametext
                      }>
                      {convertNumberToArabic(
                        dynamicDictionary,
                        props.data.per357
                      )
                        ? convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per357
                          )
                        : props.data.per357}
                    </Text>
                  </View>

                  <View style={{ padding: 20 }}>
                    <Text style={styles.plotext}>PLO 9</Text>
                    <Text
                      style={
                        getRedColor(props.data.per358)
                          ? styles.valametext1
                          : styles.valametext
                      }>
                      {convertNumberToArabic(
                        dynamicDictionary,
                        props.data.per358
                      )
                        ? convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per358
                          )
                        : props.data.per358}
                    </Text>
                  </View>

                  <View style={{ padding: 20 }}>
                    <Text style={styles.plotext}>PLO 10</Text>
                    <Text
                      style={
                        getRedColor(props.data.per359)
                          ? styles.valametext1
                          : styles.valametext
                      }>
                      {convertNumberToArabic(
                        dynamicDictionary,
                        props.data.per359
                      )
                        ? convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per359
                          )
                        : props.data.per359}
                    </Text>
                  </View>
                </ScrollView>
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
                  {selectedDirection != 'left' ? (
                    <View style={styles.itemContainer2}>
                      <Text
                        style={
                          getRedColor(val)
                            ? styles.valametext1
                            : styles.valametext
                        }>
                        {convertNumberToArabic(dynamicDictionary, val)
                          ? convertNumberToArabic(dynamicDictionary, val)
                          : val}
                      </Text>
                    </View>
                  ) : null}

                  <View style={styles.itemContainer2}>
                    <Text style={styles.ploNametext}>{props.data.name}</Text>
                    <Text style={styles.ploDistext}>{props.data.course}</Text>
                  </View>

                  {selectedDirection === 'left' ? (
                    <View style={styles.itemContainer2}>
                      <Text
                        style={
                          getRedColor(val)
                            ? styles.valametext1
                            : styles.valametext
                        }>
                        {convertNumberToArabic(dynamicDictionary, val)
                          ? convertNumberToArabic(dynamicDictionary, val)
                          : val}
                      </Text>
                    </View>
                  ) : null}
                </View>
              ) : (
                <View>
                  <View style={styles.container3}>
                    <View
                      style={[
                        styles.itemContainer2,
                        selectedDirection != 'left'
                          ? { alignItems: 'flex-end' }
                          : {}
                      ]}>
                      <Text style={styles.ploNametext}>{props.data.name}</Text>
                      <Text style={styles.ploDistext}>{props.data.course}</Text>
                    </View>
                  </View>

                  <View style={styles.container3}>
                    <ScrollView horizontal={true}>
                      <View style={{ padding: 20 }}>
                        <Text style={styles.plotext}>PLO 1</Text>
                        <Text
                          style={
                            getRedColor(props.data.per350)
                              ? styles.valametext1
                              : styles.valametext
                          }>
                          {convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per350
                          )
                            ? convertNumberToArabic(
                                dynamicDictionary,
                                props.data.per350
                              )
                            : props.data.per350}
                        </Text>
                      </View>

                      <View style={{ padding: 20 }}>
                        <Text style={styles.plotext}>PLO 2</Text>
                        <Text
                          style={
                            getRedColor(props.data.per351)
                              ? styles.valametext1
                              : styles.valametext
                          }>
                          {convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per351
                          )
                            ? convertNumberToArabic(
                                dynamicDictionary,
                                props.data.per351
                              )
                            : props.data.per351}
                        </Text>
                      </View>

                      <View style={{ padding: 20 }}>
                        <Text style={styles.plotext}>PLO 3</Text>
                        <Text
                          style={
                            getRedColor(props.data.per352)
                              ? styles.valametext1
                              : styles.valametext
                          }>
                          {convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per352
                          )
                            ? convertNumberToArabic(
                                dynamicDictionary,
                                props.data.per352
                              )
                            : props.data.per352}
                        </Text>
                      </View>

                      <View style={{ padding: 20 }}>
                        <Text style={styles.plotext}>PLO 4</Text>
                        <Text
                          style={
                            getRedColor(props.data.per353)
                              ? styles.valametext1
                              : styles.valametext
                          }>
                          {convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per353
                          )
                            ? convertNumberToArabic(
                                dynamicDictionary,
                                props.data.per353
                              )
                            : props.data.per353}
                        </Text>
                      </View>

                      <View style={{ padding: 20 }}>
                        <Text style={styles.plotext}>PLO 5</Text>
                        <Text
                          style={
                            getRedColor(props.data.per354)
                              ? styles.valametext1
                              : styles.valametext
                          }>
                          {convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per354
                          )
                            ? convertNumberToArabic(
                                dynamicDictionary,
                                props.data.per354
                              )
                            : props.data.per354}
                        </Text>
                      </View>

                      <View style={{ padding: 20 }}>
                        <Text style={styles.plotext}>PLO 6</Text>
                        <Text
                          style={
                            getRedColor(props.data.per355)
                              ? styles.valametext1
                              : styles.valametext
                          }>
                          {convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per355
                          )
                            ? convertNumberToArabic(
                                dynamicDictionary,
                                props.data.per355
                              )
                            : props.data.per355}
                        </Text>
                      </View>

                      <View style={{ padding: 20 }}>
                        <Text style={styles.plotext}>PLO 7</Text>
                        <Text
                          style={
                            getRedColor(props.data.per356)
                              ? styles.valametext1
                              : styles.valametext
                          }>
                          {convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per356
                          )
                            ? convertNumberToArabic(
                                dynamicDictionary,
                                props.data.per356
                              )
                            : props.data.per356}
                        </Text>
                      </View>

                      <View style={{ padding: 20 }}>
                        <Text style={styles.plotext}>PLO 8</Text>
                        <Text
                          style={
                            getRedColor(props.data.per357)
                              ? styles.valametext1
                              : styles.valametext
                          }>
                          {convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per357
                          )
                            ? convertNumberToArabic(
                                dynamicDictionary,
                                props.data.per357
                              )
                            : props.data.per357}
                        </Text>
                      </View>

                      <View style={{ padding: 20 }}>
                        <Text style={styles.plotext}>PLO 9</Text>
                        <Text
                          style={
                            getRedColor(props.data.per358)
                              ? styles.valametext1
                              : styles.valametext
                          }>
                          {convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per358
                          )
                            ? convertNumberToArabic(
                                dynamicDictionary,
                                props.data.per358
                              )
                            : props.data.per358}
                        </Text>
                      </View>

                      <View style={{ padding: 20 }}>
                        <Text style={styles.plotext}>PLO 10</Text>
                        <Text
                          style={
                            getRedColor(props.data.per359)
                              ? styles.valametext1
                              : styles.valametext
                          }>
                          {convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per359
                          )
                            ? convertNumberToArabic(
                                dynamicDictionary,
                                props.data.per359
                              )
                            : props.data.per359}
                        </Text>
                      </View>
                    </ScrollView>
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
                  {selectedDirection != 'left' ? (
                    <View style={styles.itemContainer2}>
                      <Text
                        style={
                          getRedColor(val)
                            ? styles.valametext1
                            : styles.valametext
                        }>
                        {convertNumberToArabic(dynamicDictionary, val)
                          ? convertNumberToArabic(dynamicDictionary, val)
                          : val}
                      </Text>
                    </View>
                  ) : null}

                  <View style={styles.itemContainer2}>
                    <Text style={styles.ploNametext}>{props.data.name}</Text>
                    <Text style={styles.ploDistext}>{props.data.course}</Text>
                  </View>

                  {selectedDirection === 'left' ? (
                    <View style={styles.itemContainer2}>
                      <Text
                        style={
                          getRedColor(val)
                            ? styles.valametext1
                            : styles.valametext
                        }>
                        {convertNumberToArabic(dynamicDictionary, val)
                          ? convertNumberToArabic(dynamicDictionary, val)
                          : val}
                      </Text>
                    </View>
                  ) : null}
                </View>
              ) : (
                <View>
                  <View style={styles.container3}>
                    <View
                      style={[
                        styles.itemContainer2,
                        selectedDirection != 'left'
                          ? { alignItems: 'flex-end' }
                          : {}
                      ]}>
                      <Text style={styles.ploNametext}>{props.data.name}</Text>
                      <Text style={styles.ploDistext}>{props.data.course}</Text>
                    </View>
                  </View>

                  <View style={styles.container3}>
                    <ScrollView horizontal={true}>
                      <View style={{ padding: 20 }}>
                        <Text style={styles.plotext}>PLO 1</Text>
                        <Text
                          style={
                            getRedColor(props.data.per350)
                              ? styles.valametext1
                              : styles.valametext
                          }>
                          {convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per350
                          )
                            ? convertNumberToArabic(
                                dynamicDictionary,
                                props.data.per350
                              )
                            : props.data.per350}
                        </Text>
                      </View>

                      <View style={{ padding: 20 }}>
                        <Text style={styles.plotext}>PLO 2</Text>
                        <Text
                          style={
                            getRedColor(props.data.per351)
                              ? styles.valametext1
                              : styles.valametext
                          }>
                          {convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per351
                          )
                            ? convertNumberToArabic(
                                dynamicDictionary,
                                props.data.per351
                              )
                            : props.data.per351}
                        </Text>
                      </View>

                      <View style={{ padding: 20 }}>
                        <Text style={styles.plotext}>PLO 3</Text>
                        <Text
                          style={
                            getRedColor(props.data.per352)
                              ? styles.valametext1
                              : styles.valametext
                          }>
                          {convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per352
                          )
                            ? convertNumberToArabic(
                                dynamicDictionary,
                                props.data.per352
                              )
                            : props.data.per352}
                        </Text>
                      </View>

                      <View style={{ padding: 20 }}>
                        <Text style={styles.plotext}>PLO 4</Text>
                        <Text
                          style={
                            getRedColor(props.data.per353)
                              ? styles.valametext1
                              : styles.valametext
                          }>
                          {convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per353
                          )
                            ? convertNumberToArabic(
                                dynamicDictionary,
                                props.data.per353
                              )
                            : props.data.per353}
                        </Text>
                      </View>

                      <View style={{ padding: 20 }}>
                        <Text style={styles.plotext}>PLO 5</Text>
                        <Text
                          style={
                            getRedColor(props.data.per354)
                              ? styles.valametext1
                              : styles.valametext
                          }>
                          {convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per354
                          )
                            ? convertNumberToArabic(
                                dynamicDictionary,
                                props.data.per354
                              )
                            : props.data.per354}
                        </Text>
                      </View>

                      <View style={{ padding: 20 }}>
                        <Text style={styles.plotext}>PLO 6</Text>
                        <Text
                          style={
                            getRedColor(props.data.per355)
                              ? styles.valametext1
                              : styles.valametext
                          }>
                          {convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per355
                          )
                            ? convertNumberToArabic(
                                dynamicDictionary,
                                props.data.per355
                              )
                            : props.data.per355}
                        </Text>
                      </View>

                      <View style={{ padding: 20 }}>
                        <Text style={styles.plotext}>PLO 7</Text>
                        <Text
                          style={
                            getRedColor(props.data.per356)
                              ? styles.valametext1
                              : styles.valametext
                          }>
                          {convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per356
                          )
                            ? convertNumberToArabic(
                                dynamicDictionary,
                                props.data.per356
                              )
                            : props.data.per356}
                        </Text>
                      </View>

                      <View style={{ padding: 20 }}>
                        <Text style={styles.plotext}>PLO 8</Text>
                        <Text
                          style={
                            getRedColor(props.data.per357)
                              ? styles.valametext1
                              : styles.valametext
                          }>
                          {convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per357
                          )
                            ? convertNumberToArabic(
                                dynamicDictionary,
                                props.data.per357
                              )
                            : props.data.per357}
                        </Text>
                      </View>

                      <View style={{ padding: 20 }}>
                        <Text style={styles.plotext}>PLO 9</Text>
                        <Text
                          style={
                            getRedColor(props.data.per358)
                              ? styles.valametext1
                              : styles.valametext
                          }>
                          {convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per358
                          )
                            ? convertNumberToArabic(
                                dynamicDictionary,
                                props.data.per358
                              )
                            : props.data.per358}
                        </Text>
                      </View>

                      <View style={{ padding: 20 }}>
                        <Text style={styles.plotext}>PLO 10</Text>
                        <Text
                          style={
                            getRedColor(props.data.per359)
                              ? styles.valametext1
                              : styles.valametext
                          }>
                          {convertNumberToArabic(
                            dynamicDictionary,
                            props.data.per359
                          )
                            ? convertNumberToArabic(
                                dynamicDictionary,
                                props.data.per359
                              )
                            : props.data.per359}
                        </Text>
                      </View>
                    </ScrollView>
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

export default PLOssDetails;
