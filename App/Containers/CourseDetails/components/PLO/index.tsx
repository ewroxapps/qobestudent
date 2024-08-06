import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import ArrowBack from '../../../../Assets/SVGs/ArrowBack';
import ArrowForward from '../../../../Assets/SVGs/ArrowForward';
import Blue from '../../../../Assets/SVGs/Blue';
import Green from '../../../../Assets/SVGs/Green';
import Orange from '../../../../Assets/SVGs/Orange';
import Red from '../../../../Assets/SVGs/Red';
import { GenericMessage, NoResults, Spinner } from '../../../../Components';
import { useClassPloAttainmentQuery } from '../../../../RTK/Api/CourseApi';
import colors from '../../../../Themes/Colors';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import { CLOAttainmentDetails, CLOGraph } from '../CLOAttainment/component';
import styles from './styles';
const PLO = (props: any) => {
  var id = props.route.params.id;
  const { data, refetch, isFetching, isLoading, isError } =
    useClassPloAttainmentQuery({ id: id || 0 });
  const navigation = useNavigation();
  const { dynamicDictionary, selectedDirection } = useLanguage();
  const [header, setHeader] = React.useState('My Score');
  const [clicked, setClicked] = React.useState(false);
  const [clicked1, setClicked1] = React.useState(false);
  const [clickedBack, setClickedBack] = React.useState(false);
  const [clickedForward, setClickedForward] = React.useState(false);

  const initialRef: any = FlatList;
  const ref = React.useRef(initialRef);
  let count = 1;
  const nextPress = () => {
    if (count < data.length - 1) {
      count++;
      ref.current.scrollToIndex({
        animated: true,
        index: count
      });
    }
  };
  const backPress = () => {
    if (count != 0) {
      count--;
      ref.current.scrollToIndex({
        animated: true,
        index: count
      });
    }
  };

  if (isError) {
    return (
      <GenericMessage
        title={'Something went wrong'}
        onClosePress={() => {
          navigation.goBack();
        }}
      />
    );
  }

  if (isFetching || isLoading) {
    return <Spinner />;
  }

  if (data.length === 0) {
    return <NoResults message="No PLO Attainment Found" />;
  }

  return (
    <View style={styles.containers}>
      <View>
        <View style={styles.headerContainer}>
          {selectedDirection != 'left' ? (
            <View style={styles.innerView}>
              <TouchableOpacity
                onPress={() => {
                  setClicked1(!clicked1);
                }}>
                <ArrowBack />
              </TouchableOpacity>

              <Text style={styles.text}>
                {' '}
                {findWord(dynamicDictionary, header)
                  ? findWord(dynamicDictionary, header)
                  : header}
              </Text>

              <TouchableOpacity
                onPress={() => {
                  setClicked(!clicked);
                }}>
                <ArrowForward />
              </TouchableOpacity>
            </View>
          ) : null}
          {selectedDirection === 'left' ? (
            <View style={styles.innerView}>
              <Text style={styles.textHeader}>
                {findWord(dynamicDictionary, 'Code')
                  ? findWord(dynamicDictionary, 'Code')
                  : 'Code'}
              </Text>
              <Text style={styles.textHeader}>
                {findWord(dynamicDictionary, 'Discription')
                  ? findWord(dynamicDictionary, 'Discription')
                  : 'Discription'}
              </Text>
            </View>
          ) : (
            <View style={styles.innerView}>
              <Text style={styles.textHeader}>
                {findWord(dynamicDictionary, 'Discription')
                  ? findWord(dynamicDictionary, 'Discription')
                  : 'Discription'}
              </Text>
              <Text style={styles.textHeader}>
                {findWord(dynamicDictionary, 'Code')
                  ? findWord(dynamicDictionary, 'Code')
                  : 'Code'}
              </Text>
            </View>
          )}

          {selectedDirection === 'left' ? (
            <View style={styles.innerView}>
              <TouchableOpacity
                onPress={() => {
                  setClicked1(!clicked1);
                }}>
                <ArrowBack />
              </TouchableOpacity>

              <Text style={styles.text}>
                {' '}
                {findWord(dynamicDictionary, header)
                  ? findWord(dynamicDictionary, header)
                  : header}
              </Text>

              <TouchableOpacity
                onPress={() => {
                  setClicked(!clicked);
                }}>
                <ArrowForward />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>

        <View
          style={{
            height: Dimensions.get('window').height / 3.9,
            justifyContent: 'flex-start',
            alignContent: 'flex-start'
          }}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => item.idd}
            showsVerticalScrollIndicator={true}
            renderItem={({ item, index }) => (
              <View
                style={{
                  backgroundColor: index % 2 == 0 ? '#F8FAFC' : '#F1F5F9',
                  width: '100%',
                  paddingBottom: 7,
                  flexDirection: 'column',
                  elevation: 10
                }}>
                <CLOAttainmentDetails
                  data={item}
                  header={header}
                  setHeader={setHeader}
                  clicked={clicked}
                  setClicked={setClicked}
                  clickedBack={clicked1}
                  setClickedBack={setClicked1}
                  from={'PLO'}
                />
              </View>
            )}
          />
        </View>
      </View>

      <View
        style={{
          backgroundColor: colors.backgroundWhite,
          borderRadius: 10,
          padding: 10,
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 5,
          elevation: 5
        }}>
        <View>
          {selectedDirection === 'left' ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
              <Text style={styles.textCLO}>
                {findWord(dynamicDictionary, 'PLO Graph')
                  ? findWord(dynamicDictionary, 'PLO Graph')
                  : 'PLO Graph'}
              </Text>
              <View style={styles.innerView}>
                <TouchableOpacity
                  onPress={() => {
                    backPress();
                  }}>
                  <ArrowBack />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    nextPress();
                  }}>
                  <ArrowForward
                    style={{
                      marginLeft: 20,
                      marginRight: 10
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
              <View style={styles.innerView}>
                <TouchableOpacity
                  onPress={() => {
                    backPress();
                  }}>
                  <ArrowBack />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    nextPress();
                  }}>
                  <ArrowForward
                    style={{
                      marginLeft: 20,
                      marginRight: 10
                    }}
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.textCLO}>
                {findWord(dynamicDictionary, 'PLO Graph')
                  ? findWord(dynamicDictionary, 'PLO Graph')
                  : 'PLO Graph'}
              </Text>
            </View>
          )}

          <View
            style={[
              styles.clograph,
              selectedDirection != 'left' ? { justifyContent: 'flex-end' } : {}
            ]}>
            {selectedDirection === 'left' ? (
              <View
                style={{
                  flexDirection: 'row',
                  width: 50
                }}>
                <Red style={{ marginTop: 4 }} width={10} />
                <Text style={styles.texts}>
                  {findWord(dynamicDictionary, 'Average Score')
                    ? findWord(dynamicDictionary, 'Average Score')
                    : 'Average Score'}
                </Text>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 5
                }}>
                <Text style={styles.texts1}>
                  {findWord(dynamicDictionary, 'My Score')
                    ? findWord(dynamicDictionary, 'My Score')
                    : 'My Score'}
                </Text>
                <Blue style={{ marginTop: 4 }} width={10} />
              </View>
            )}

            {selectedDirection === 'left' ? (
              <View
                style={{
                  flexDirection: 'row',
                  width: 55,
                  marginLeft: 5
                }}>
                <Orange style={{ marginTop: 4 }} width={10} />
                <Text style={styles.texts}>
                  {findWord(dynamicDictionary, 'Maximum Score')
                    ? findWord(dynamicDictionary, 'Maximum Score')
                    : 'Maximum Score'}
                </Text>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  width: 55,
                  marginLeft: 5
                }}>
                <Text style={styles.texts}>
                  {findWord(dynamicDictionary, 'Minimum Score')
                    ? findWord(dynamicDictionary, 'Minimum Score')
                    : 'Minimum Score'}
                </Text>
                <Green style={{ marginTop: 4 }} width={10} />
              </View>
            )}

            {selectedDirection === 'left' ? (
              <View
                style={{
                  flexDirection: 'row',
                  width: 55,
                  marginLeft: 5
                }}>
                <Green style={{ marginTop: 4 }} width={10} />
                <Text style={styles.texts}>
                  {findWord(dynamicDictionary, 'Minimum Score')
                    ? findWord(dynamicDictionary, 'Minimum Score')
                    : 'Minimum Score'}
                </Text>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  width: 55,
                  marginLeft: 5
                }}>
                <Text style={styles.texts}>
                  {findWord(dynamicDictionary, 'Maximum Score')
                    ? findWord(dynamicDictionary, 'Maximum Score')
                    : 'Maximum Score'}
                </Text>
                <Orange style={{ marginTop: 4 }} width={10} />
              </View>
            )}

            {selectedDirection === 'left' ? (
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 5
                }}>
                <Blue style={{ marginTop: 4 }} width={10} />
                <Text style={styles.texts1}>
                  {findWord(dynamicDictionary, 'My Score')
                    ? findWord(dynamicDictionary, 'My Score')
                    : 'My Score'}
                </Text>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 5
                }}>
                <Text style={styles.texts1}>
                  {findWord(dynamicDictionary, 'Average Score')
                    ? findWord(dynamicDictionary, 'Average Score')
                    : 'Average Score'}
                </Text>
                <Red style={{ marginTop: 4 }} width={10} />
              </View>
            )}
          </View>
        </View>

        <FlatList
          ref={ref}
          data={data}
          horizontal
          keyExtractor={(item, index) => item.idd}
          showsVerticalScrollIndicator={true}
          renderItem={({ item, index }) => (
            <CLOGraph
              data={item}
              clickedBack={clickedBack}
              setClickedBack={setClickedBack}
              clickedForward={clickedForward}
              setClickedForward={setClickedForward}
            />
          )}
        />
      </View>
    </View>
  );
};

export default PLO;
