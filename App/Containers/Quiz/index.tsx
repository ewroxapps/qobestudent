import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Platform,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { DocumentUpload, Download } from '../../Assets/SVGs';
import DocumentUploadBlack from '../../Assets/SVGs/DocumentUploadBlack';
import { Spinner } from '../../Components';
import { BASE_URL } from '../../Config/Api';
import { useQuizQuestionQuery } from '../../RTK/Api/CourseApi';
import { Colors } from '../../Themes';
import { useLanguage } from '../../Types/LanguageContext';
import { downloadFile } from '../../Utils/DownloadUtils';
import { findWord } from '../../Utils/ParsingUtils';
import { ActivityActionButton } from '../ActivityDetails/components';
import {
  BackButton,
  CheckBox,
  EditButton,
  ErrorModal,
  ImageModal,
  ImagesShow,
  NoQuestionModal,
  QuestionCount,
  QuizHeader,
  QuizRightHeader,
  RadioButtonFunction,
  SaveButton,
  SubmissionModal,
  UploadQuizFile
} from './components';
import style from './styles';

const Quiz = (props: any) => {
  const { dynamicDictionary, selectedDirection } = useLanguage();
  const id = props.route.params.alert.id;
  const quizName = props.route.params.quizName;
  const teachername = props.route.params.teachername;
  const submissionDate = props.route.params.submissionDate;
  const course = props.route.params.course;
  const dp = props.route.params.dp;
  const from = props.route.params.from;
  const navigation = useNavigation();
  const { data, refetch, isFetching, isLoading } = useQuizQuestionQuery({
    id: id || 0
  });
  const [showImage, setShowImage] = useState(false);
  const [noQuestion, setNoQuestion] = useState(false);
  const [submission, setSubmission] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [delayPassed, setDelayPassed] = useState(false);
  const [radioValue, setRadioValue] = React.useState(
    data?.success &&
      data?.quizDetail[pageCount].type === 'R' &&
      JSON.stringify(data?.quizDetail[pageCount].answer).length > 0
      ? JSON.stringify(data?.quizDetail[pageCount].answer)
      : ''
  );

  const [textValue, setTextValue] = React.useState(
    data?.success &&
      data?.quizDetail[pageCount].type === 'T' &&
      data?.quizDetail[pageCount].answer.length > 0
      ? data?.quizDetail[pageCount].answer
      : ''
  );

  const [selectedCheckboxes, setSelectedCheckboxes] = useState<{
    [label: string]: boolean;
  }>(() => {
    const selectedOptions: { [label: string]: boolean } = {};
    if (data?.success) {
      const choices = data?.quizDetail[pageCount]?.choices;
      const answer = data?.quizDetail[pageCount]?.answer;

      if (choices && answer && answer.length > 0) {
        const array2Elements = answer[0].split(', ');
        choices.forEach((choice: string) => {
          selectedOptions[choice] = array2Elements.includes(choice);
        });
      }
    }

    return selectedOptions;
  });

  const [saveButton, setSaveButton] = useState(
    data?.success &&
      data?.quizDetail.length > 0 &&
      data?.quizDetail[pageCount].answer.length === 0
      ? true
      : false
  );

  const [editButton, setEditButton] = useState(
    data?.success &&
      data?.quizDetail.length > 0 &&
      data?.quizDetail[pageCount].answer.length != 0
      ? true
      : false
  );
  const [uploadModalVisible, setUploadModalVisible] = useState(false);
  const [upload, setUpload] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageHeader, setErrorMessageHeader] = useState('');
  const [myErrorModal, setMyErrorModal] = useState(false);
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => (
        <QuizHeader data={writeTime} checkTime={checkTime()} from={from} />
      )
    });
  };

  const changeRight = () => {
    navigation?.setOptions({
      headerRight: () => (
        <QuizRightHeader
          checkTime={checkTime()}
          success={data?.success}
          quizName={quizName}
          teachername={teachername}
          submissionDate={submissionDate}
          dp={dp}
          course={course}
        />
      )
    });
  };

  const changeLeft = () => {
    navigation?.setOptions({
      headerLeft: () => <BackButton />
    });
  };

  useEffect(() => {
    changeHeaderTitle();
    changeRight();
    changeLeft();
  });

  const useCountdown = (targetDate: any) => {
    const countDownDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(
      countDownDate - new Date().getTime()
    );

    useEffect(() => {
      const interval = setInterval(() => {
        setCountDown(countDownDate + 18000000 - new Date().getTime());
      }, 1000);
      return () => clearInterval(interval);
    }, [
      countDownDate,
      textValue,
      data,
      saveButton,
      editButton,
      radioValue,
      selectedCheckboxes,
      submission,
      hours,
      minutes,
      secondss,
    ]);

    return getReturnValues(countDown);
  };


  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setDelayPassed(true);
    }, 5000); // Adjust the delay time as needed (in milliseconds)
  
    return () => clearTimeout(delayTimer); // Clear the timeout on component unmount
  }, []);

  
  

  const getReturnValues = (countDown: any) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
  };

  const [days, hours, minutes, secondss] = useCountdown(
    data?.activity?.to_time
  );


  useEffect(() => {
    if (delayPassed && hours <= 0 && minutes <= 0 && secondss <= 0) {
      // Open the submission modal when the timer reaches zero after the delay
      setSubmission(true);
    }
  }, [delayPassed, hours, minutes, secondss]);

  function writeTime() {
    if (data?.success === true) {
      return hours + ':' + minutes + ':' + secondss;
    } else {
      return findWord(dynamicDictionary, 'Quiz Ended') ?? 'Quiz Ended';
    }
  }

  function checkTime () {
    if (hours > 0 || minutes > 0 || secondss > 0) {
      return true;
    } else {
      return false;
    }
  }

  const handleCheckboxChange = (label: string) => {
    if (editButton) {
      setMyErrorModal(!props.myErrorModal);

      setErrorMessageHeader(
        findWord(dynamicDictionary, 'Error editing your answer') ??
          'Error editing your answer'
      );
      setErrorMessage(findWord(dynamicDictionary,'Please press edit to choose a different option.')??
      'Please press edit to choose a different option.');
    } else {
      const updatedSelectedCheckboxes = { ...selectedCheckboxes };
      updatedSelectedCheckboxes[label] = !selectedCheckboxes[label];
      setSelectedCheckboxes(updatedSelectedCheckboxes);
    }
  };

  function makeid() {
    var text = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="always"
      contentContainerStyle={style.growFlex}
      enableOnAndroid={true}
      extraScrollHeight={Platform.OS === 'ios' ? 50 : -50}>
      {data?.success === true && checkTime() === true ? (
        <View style={style.overallStyle}>
          <StatusBar backgroundColor="#0EA5E9" barStyle="light-content" />
          {data?.quizDetail.length > 0 && data?.quizDetail.length > 0 ? (
            <QuestionCount
              pageCount={pageCount}
              setPageCount={setPageCount}
              totalCount={data?.quizDetail.length}
              isSuccess={data?.success as Boolean}
              textValue={textValue}
              setTextValue={setTextValue}
              refetch={refetch}
              data={data as IQuizDetailsResponse}
              setSaveButton={setSaveButton}
              saveButton={saveButton}
              setEditButton={setEditButton}
              editButton={editButton}
              radioValue={radioValue}
              setRadioValue={setRadioValue}
              selectedCheckboxes={selectedCheckboxes}
              SetSelectedCheckboxes={setSelectedCheckboxes}
              submission={submission}
              setSubmission={setSubmission}
            />
          ) : null}
          {data?.quizDetail.length > 0 ? (
            <ScrollView style={{ flex: 1 }}>
              {data?.quizDetail[pageCount].question.length > 0 && (
                <View style={style.questionContainer}>
                  <Text style={style.questionText}>
                    {data?.quizDetail[pageCount].question}
                  </Text>
                </View>
              )}

              {data.quizDetail[pageCount].q_img != '' && (
                <ImagesShow
                  url={data.quizDetail[pageCount].q_img}
                  modalVisible={showImage}
                  setModalVisible={setShowImage}
                />
              )}

              {data.quizDetail[pageCount].type === 'R' ? (
                <RadioButtonFunction
                  data={data}
                  pageCount={pageCount}
                  setValue={setRadioValue}
                  value={radioValue}
                  setErrorMessageHeader={setErrorMessageHeader}
                  setErrorMessage={setErrorMessage}
                  myErrorModal={myErrorModal}
                  setMyErrorModal={setMyErrorModal}
                />
              ) : null}

              {data?.quizDetail[pageCount].type === 'M' ? (
                <CheckBox
                  selectedCheckboxes={selectedCheckboxes}
                  handleCheckboxChange={handleCheckboxChange}
                  data={data as IQuizDetailsResponse}
                  pageCount={pageCount}
                />
              ) : null}

              {editButton && data?.quizDetail[pageCount].type === 'T' ? (
                <View style={style.saveAnswerContainer}>
                  <Text style={style.answerText}>{findWord(dynamicDictionary,'Answer')??'Answer'}:</Text>
                  <Text style={style.saveAnswerTexT}>{textValue}</Text>
                </View>
              ) : null}
            </ScrollView>
          ) : (
            <NoQuestionModal
              setModalVisible={setNoQuestion}
              modalVisible={true}
            />
          )}
          {isLoading || isFetching ? <Spinner /> : null}
          {!editButton && data?.quizDetail[pageCount].type === 'T' ? (
            <View style={style.answerConatiner}>
              <Text style={style.answerText}>{findWord(dynamicDictionary,'Answer')??'Answer'}:</Text>
              <TextInput
                value={
                  typeof textValue === 'string'
                    ? textValue
                    : textValue.join(' ')
                }
                multiline={true}
                placeholder={findWord(dynamicDictionary,'Enter your answer...')??'Enter your answer...'}
                style={[style.inputText, selectedDirection != 'left' ?{textAlign:'right'}:{}]}
                maxLength={200}
                placeholderTextColor="#878787"
                onChangeText={value => {
                  setTextValue(value);
                }}
              />
            </View>
          ) : null}

          {saveButton && data?.quizDetail[pageCount].type != 'U' ? (
            <View style={{ alignItems: 'flex-end' }}>
              <SaveButton
                saveButton={saveButton}
                setSaveButton={setSaveButton}
                editButton={editButton}
                setEditButton={setEditButton}
                data={data as IQuizDetailsResponse}
                pageCount={pageCount}
                radioValue={radioValue}
                setRadioValue={setRadioValue}
                setErrorMessageHeader={setErrorMessageHeader}
                setErrorMessage={setErrorMessage}
                myErrorModal={myErrorModal}
                setMyErrorModal={setMyErrorModal}
                id={id}
                qid={data?.quizDetail[pageCount].id as number}
                refetch={refetch}
                selectedCheckboxes={selectedCheckboxes}
                SetSelectedCheckboxes={setSelectedCheckboxes}
                textValue={textValue}
                setTextValue={setTextValue}
                isSuccess={data?.success as Boolean}
                submission={submission}
                setSubmission={setSubmission}
              />
            </View>
          ) : null}
          {editButton && data?.quizDetail[pageCount].type != 'U' ? (
            <EditButton
              pageCount={pageCount}
              saveButton={saveButton}
              setSaveButton={setSaveButton}
              editButton={editButton}
              setEditButton={setEditButton}
              data={data as IQuizDetailsResponse}
              id={id}
              qid={data?.quizDetail[pageCount].id as number}
              refetch={refetch}
              setValue={setRadioValue}
              selectedCheckboxes={selectedCheckboxes}
              SetSelectedCheckboxes={setSelectedCheckboxes}
              textValue={textValue}
              setTextValue={setTextValue}
              isSuccess={data?.success as Boolean}
              submission={submission}
              setSubmission={setSubmission}
            />
          ) : null}

          {data?.quizDetail[pageCount].type === 'U' &&
          data?.quizDetail[pageCount].ans_img === null ? (
            <View style={style.uploadView}>
              <ActivityActionButton
                label="Upload File"
                color={Colors.secondary}
                icon={() => <DocumentUpload />}
                onPress={() => {
                  if (data?.success) {
                    setUploadModalVisible(true);
                  } else {
                    setSubmission(!submission);
                  }
                }}
              />
            </View>
          ) : null}

          {data?.quizDetail[pageCount].type === 'U' &&
          data?.quizDetail[pageCount].ans_img != null ? (
            <View style={style.downloadView}>
              <Text style={style.blueDownloadTxt}>{findWord(dynamicDictionary,'Download file')??'Download file'}</Text>
              <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity
                  style={{ flexDirection: 'row' }}
                  onPress={() => {
                    refetch();
                    if (data?.success) {
                      downloadFile(
                        `${BASE_URL}${data.quizDetail[pageCount].ans_img}`,
                        makeid()
                      );
                    } else {
                      setSubmission(!submission);
                    }
                  }}>
                  <Text style={style.mytextBlue}>{findWord(dynamicDictionary,'Download file')??'Download file'}</Text>
                  <Download />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ flexDirection: 'row' }}
                  onPress={() => {
                    refetch();
                    if (data?.success) {
                      setUploadModalVisible(true);
                    } else {
                      setSubmission(!submission);
                    }
                  }}>
                  <Text style={style.mytextBlue}>{findWord(dynamicDictionary,'Upload file')??'Upload file'}</Text>
                  <DocumentUploadBlack />
                </TouchableOpacity>
              </View>
            </View>
          ) : null}

          {uploadModalVisible ? (
            <UploadQuizFile
              modalVisible={uploadModalVisible}
              setModalVisible={setUploadModalVisible}
              title={'Attach a file'}
              id={id}
              qid={data?.quizDetail[pageCount].id}
              upload={upload}
              setUpload={setUpload}
              refetch={refetch}
            />
          ) : null}

          {showImage ? (
            <ImageModal
              url={data?.quizDetail[pageCount].q_img as String}
              modalVisible={showImage}
              setModalVisible={setShowImage}
            />
          ) : null}
          {myErrorModal ? (
            <ErrorModal
              setModalVisible={setMyErrorModal}
              modalVisible={myErrorModal}
              errorHeader={errorMessageHeader}
              errorText={errorMessage}
            />
          ) : null}
          {submission ? (
            <SubmissionModal
              quizID={data?.activity.quiz_id as number}
              modalVisible={submission}
              setModalVisible={setSubmission}
              headerText="Are you sure you want to submit your quiz?"
            />
          ) : null}
        </View>
      ) : (
        <View>
          {data?.success === false || delayPassed && hours <= 0 && minutes <= 0 && secondss <= 0 ? (
            <SubmissionModal
              quizID={data?.activity?.quiz_id as number}
              modalVisible={true}
              setModalVisible={setSubmission}
              headerText="Quiz has stopped"
            />
          ) : null}
        </View>
      )}
    </KeyboardAwareScrollView>
  );
};

export default Quiz;
