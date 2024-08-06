import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Surface } from 'react-native-paper';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger
} from 'react-native-popup-menu';
import {
  ColoredCalendar,
  ColoredChart,
  ColoredFolder,
  ColoredMessages
} from '../../../../Assets/SVGs';
import { BASE_URL } from '../../../../Config/Api';
import { Colors, Images } from '../../../../Themes';
import ActionButton from '../ActionButton';
import OBEbutton from '../OBEbutton';
import styles from './styles';
import { CourseInfoProps } from './types';

import Cqi from '../../../../Assets/SVGs/Cqi';
import Graph from '../../../../Assets/SVGs/Graph';
import ObeStats from '../../../../Assets/SVGs/ObeStats';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
const CourseInfo = (props: CourseInfoProps) => {
  const { t } = useTranslation('courseDetails');
  const navigation = useNavigation<ICoursesNavigationProp>();
  const { course, id } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  let show = true;
  const { dynamicDictionary, selectedDirection } = useLanguage();
  console.debug(props.plo_base);
  function getBASE() {
    if (props.plo_base != 0) {
      return true;
    }
  }

  return (
    // @ts-ignore
    <Surface style={styles.container} elevation={3}>
      {selectedDirection === 'left' ? (
        <View style={styles.topContainer}>
          {course?.teacherdp ? (
            <Image
              source={{
                uri: `${BASE_URL}${course?.teacherdp}`
              }}
              defaultSource={Images.profilePlaceholder}
              style={styles.profile}
            />
          ) : (
            <Image source={Images.profilePlaceholder} style={styles.profile} />
          )}
          <View style={styles.topTextContainer}>
            <View style={styles.topRow}>
              <Text style={styles.courseName}>{course?.name}</Text>
            </View>
            <Text style={styles.classLabel}>{course?.course}</Text>
            <Text style={styles.instructorName}>{course?.teacher}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.topContainer}>
         
          <View style={[styles.topTextContainer,{alignItems:'flex-end', marginRight:10}]}>
            <View style={styles.topRow}>
              <Text style={[styles.courseName,{textAlign:'right'}]}>{course?.name}</Text>
            </View>
            <Text style={[styles.classLabel,{textAlign:'right'}]}>{course?.course}</Text>
            <Text style={[styles.instructorName,{textAlign:'right'}]}>{course?.teacher}</Text>
          </View>

          {course?.teacherdp ? (
            <Image
              source={{
                uri: `${BASE_URL}${course?.teacherdp}`
              }}
              defaultSource={Images.profilePlaceholder}
              style={styles.profile}
            />
          ) : (
            <Image source={Images.profilePlaceholder} style={styles.profile} />
          )}
        </View>
      )}

      <View style={styles.buttonsContainer}>
        <ActionButton
          color={Colors.lightCyanBg}
          icon={() => <ColoredFolder width={26} height={26} />}
          label={t('resources')}
          textColor={Colors.darkCyan}
          onPress={() =>
            navigation.navigate('Resources', {
              courseId: course?.id,
              course: course
            })
          }
        />
        <ActionButton
          color={Colors.lightMustardBg}
          icon={() => <ColoredCalendar width={26} height={26} />}
          label={'Time'}
          textColor={Colors.burgundy}
          onPress={() =>
            navigation.navigate('ClassTimetable', {
              classId: course?.id
            })
          }
        />
        {show ? (
          <Menu opened={menuOpen} onBackdropPress={() => setMenuOpen(false)}>
            <MenuTrigger
              onPress={() => setMenuOpen(true)}
              customStyles={{
                TriggerTouchableComponent: TouchableOpacity
              }}>
              <TouchableOpacity onPress={() => setMenuOpen(true)}>
                <OBEbutton
                  color={Colors.lightGreenBg}
                  icon={() => <ColoredChart width={26} height={26} />}
                  label="OBE"
                  textColor={Colors.darkGreen}
                />
              </TouchableOpacity>
            </MenuTrigger>
            <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>
              <View style={styles.container2}>
                <View style={styles.recordContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      setMenuOpen(false);

                      navigation.navigate('CourseCLO', {
                        id: course?.id,
                        name: course.course
                      });
                    }}>
                    <View
                      style={
                        getBASE()
                          ? styles.itemContainerr
                          : styles.itemContainering
                      }>
                      <Graph />
                      <Text style={styles.itemValue}>CLOs</Text>
                    </View>
                  </TouchableOpacity>
                  {props.plo_base == 0 ? (
                    <MenuOption style={styles.innerMenu}>
                      <TouchableOpacity
                        onPress={() => {
                          setMenuOpen(false);

                          navigation.navigate('CourseCLOAttainment', {
                            id: course?.id,
                            name: course.course
                          });
                        }}>
                        <View style={styles.itemContainer}>
                          <Graph />
                          <Text style={styles.itemValue}>
                            CLOs{' '}
                            {findWord(dynamicDictionary, 'Attainment')
                              ? findWord(dynamicDictionary, 'Attainment')
                              : 'Attainment'}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </MenuOption>
                  ) : null}
                </View>
                <View style={styles.recordContainer}>
                  <MenuOption style={styles.innerMenu}>
                    <TouchableOpacity
                      onPress={() => {
                        setMenuOpen(false);
                        navigation.navigate('CoursePLO', {
                          id: course?.id,
                          name: course.course
                        });
                      }}>
                      <View style={styles.itemContainer}>
                        <ObeStats />
                        <Text style={styles.itemValue}>
                          PLOs{' '}
                          {findWord(dynamicDictionary, 'Attainment')
                            ? findWord(dynamicDictionary, 'Attainment')
                            : 'Attainment'}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </MenuOption>
                  <MenuOption style={styles.innerMenu}>
                    <TouchableOpacity
                      onPress={() => {
                        setMenuOpen(false);
                        navigation.navigate('CourseCQI', {
                          id: course?.id,
                          name: course.course
                        });
                      }}>
                      <View style={styles.itemContainer}>
                        <Cqi />
                        <Text style={styles.itemValue}>CQI</Text>
                      </View>
                    </TouchableOpacity>
                  </MenuOption>
                </View>
              </View>
            </MenuOptions>
          </Menu>
        ) : null}

        <ActionButton
          color={Colors.lightPinkBg}
          icon={() => <ColoredMessages width={26} height={26} />}
          label={t('discussion')}
          textColor={Colors.red}
          onPress={() => {
            navigation.navigate('Forums', {
              id: id,
              name: course.name
            });
          }}
        />
      </View>
    </Surface>
  );
};

export default CourseInfo;
