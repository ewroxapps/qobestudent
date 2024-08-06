import React, { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { VectorIcons } from '../../../../../../Components';
import { ICON_TYPES } from '../../../../../../Components/VectorIcons/VectorIcons';
import { BASE_URL } from '../../../../../../Config/Api';
import { useAppSelector } from '../../../../../../Hooks';
import { userCoursesSelector } from '../../../../../../Selectors/UserSelector';
import { Colors, Images } from '../../../../../../Themes';
import { useLanguage } from '../../../../../../Types/LanguageContext';
import { findWord } from '../../../../../../Utils/ParsingUtils';
import CqiModal from '../CQIModal';
import styles from './styles';
import { CQIProps } from './types';
const CQIDetail = (props: CQIProps) => {
  const userCourses = useAppSelector(userCoursesSelector);
  var storeDP: String | undefined;
  const [modal, setModal] = React.useState(false);
  const { dynamicDictionary, selectedDirection } = useLanguage();
  function FindingTeacherDp() {
    if (userCourses && userCourses?.length > 0) {
      for (let i = 0; i < userCourses.length; i++) {
        if (props.originator.includes(userCourses[i].teacher)) {
          storeDP = userCourses[i].teacherdp;
        }
      }
    }

    if (storeDP != null) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    FindingTeacherDp();
  });
  return (
    <View style={styles.containers}>
      {selectedDirection === 'left' ? (
        <View style={styles.leftContainer}>
          {FindingTeacherDp() ? (
            <Image
              source={{
                uri: `${BASE_URL}${storeDP}`
              }}
              defaultSource={Images.profilePlaceholder}
              style={styles.profile}
            />
          ) : (
            <Image source={Images.profilePlaceholder} style={styles.profile} />
          )}
          <View style={styles.topTextContainer}>
            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
              <Text style={styles.heading}>
                {findWord(dynamicDictionary, 'Originator')
                  ? findWord(dynamicDictionary, 'Originator')
                  : 'Originator'}
              </Text>
              <Text style={styles.h2}>{props.originator}</Text>
              <Text style={styles.h3}>
                {' '}
                {findWord(dynamicDictionary, 'Teacher')
                  ? findWord(dynamicDictionary, 'Teacher')
                  : 'Teacher'}
              </Text>
              
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View>
                <Text style={styles.date}>{props.doc_date}</Text>
                <View style={styles.statusView}>
                  <Text style={styles.status}>{props.status}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.leftContainer}>
          <View>
            <Text style={styles.date}>{props.doc_date}</Text>
            <View style={styles.statusView}>
              <Text style={styles.status}>{props.status}</Text>
            </View>
          </View>
         
          <View style={[styles.topTextContainer,{justifyContent:'flex-end'}]}>
            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
              <Text style={styles.heading}>
                {findWord(dynamicDictionary, 'Originator')
                  ? findWord(dynamicDictionary, 'Originator')
                  : 'Originator'}
              </Text>
              <Text style={styles.h2}>{props.originator}</Text>
              <Text style={styles.h3}>
                {' '}
                {findWord(dynamicDictionary, 'Teacher')
                  ? findWord(dynamicDictionary, 'Teacher')
                  : 'Teacher'}
              </Text>
            </View>
          </View>

          {FindingTeacherDp() ? (
            <Image
              source={{
                uri: `${BASE_URL}${storeDP}`
              }}
              defaultSource={Images.profilePlaceholder}
              style={styles.profile}
            />
          ) : (
            <Image source={Images.profilePlaceholder} style={styles.profile} />
          )}
        </View>
      )}

      <View>
        <View style={styles.middleCntainer}>
          <View style={{ marginRight: 0 }}>
            <Text style={styles.t1}>
              {findWord(dynamicDictionary, 'CAR No.')
                ? findWord(dynamicDictionary, 'CAR No.')
                : 'CAR No.'}
            </Text>
            <Text style={styles.t2}>{props.doc_no}</Text>
          </View>
          <View style={styles.verticalLine} />
          <View>
            <Text style={styles.t1}>
              {findWord(dynamicDictionary, 'Reference No.')
                ? findWord(dynamicDictionary, 'Reference No.')
                : 'Reference No.'}
            </Text>
            <Text style={styles.t2}>{props.car_ref}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          setModal(!modal);
        }}>
        <View style={styles.bottomContainer}>
          <View>
            <Text
              style={[
                styles.probH2,
                selectedDirection != 'left' ? { right: 10 } : {}
              ]}>
              {findWord(dynamicDictionary, 'Problem')
                ? findWord(dynamicDictionary, 'Problem')
                : 'Problem'}
            </Text>
            <View>
              {selectedDirection != 'left' ? (
                <View style={{ flexDirection: 'row', right: 10 }}>
                  <View style={{}}>
                    <VectorIcons
                      name="left"
                      size={24}
                      color={Colors.textBlack}
                      iconType={ICON_TYPES.AntDesign}
                    />
                  </View>
                  <Text style={styles.probH1} numberOfLines={1}>
                    {props.problem}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
          {selectedDirection === 'left' ? (
            <View style={{ marginTop: 13 }}>
              <VectorIcons
                name="right"
                size={24}
                color={Colors.textBlack}
                iconType={ICON_TYPES.AntDesign}
              />
            </View>
          ) : null}
        </View>
      </TouchableOpacity>

      {modal ? (
        <CqiModal
          modalVisible={modal}
          setModalVisible={setModal}
          status={props.status}
          car_ref={props.car_ref}
          clos={props.clos}
          doc_date={props.doc_date}
          doc_no={props.doc_no}
          originator={props.originator}
          problem={props.problem}
          storeDP={storeDP}
        />
      ) : null}
    </View>
  );
};

export default CQIDetail;
