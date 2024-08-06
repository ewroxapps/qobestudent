import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import { ErrorModal } from '../Quiz/components';
import { HeaderTitle, SubmitModal, SurveyQuestion } from './component';
const Survey = (props: any) => {
  const id: string = props.route.params.id;
  const refetch:() => void = props.route.params.refetch;
  var storeData: SurveyData = props.route.params.data;
  const sectionNames = Object.keys(storeData?.data?.questions);
  const [singleChoice, setSingleChoice] = useState<{
    [key: string]: string | null;
  }>({});
 
  const [text, setText] = useState<string>('');
  const [para, setPara] = useState<string>('');
  const [listChoice, setListChoice] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [error, setError] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [shown, setShown] = useState(false);
  const [numberChoice, setNumberChoice] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [myindex, setMyIndex] = useState<number>(-1);
  var flag = true;
  const initialRef: any = FlatList;
  const ref = React.useRef(initialRef);
  function getTotalNumQuestions(data: SurveyData): number {
    let total = 0;
    for (const section in data?.data?.questions) {
      const sectionQuestions = data?.data?.questions[section];
      total += sectionQuestions.length;
    }
    return total;
  }
  const totalNumQuestions = getTotalNumQuestions(storeData);
  const [answers, setAnswers] = useState<Array<any>>(
    Array(totalNumQuestions).fill(undefined)
  );
  const [questionId, setquestionId] = useState<Array<any>>(
    Array(totalNumQuestions).fill(undefined)
  );

  const [multipleChoices, setMultipleChoices] = useState<Array<Array<string>>>(Array(totalNumQuestions).fill([]));
  const [selectedChoices, setSelectedChoices] = useState<{ [key: string]: string | null }>({});

  const navigation = useNavigation();
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <HeaderTitle />
    });
  };


  useEffect(() => {
    changeHeaderTitle();

    if (isClicked) {
      setError(false);
      const allUndefined = answers.every(item => item === undefined);
      if (allUndefined) {
        setError(true);
        setMyIndex(-1);
        ref.current.scrollToIndex({ index: 0, animated: true });
      } else {
        const index = answers.indexOf(undefined);
        if (index === -1) {
          setMyIndex(-1);
          for (let i = 0; i < answers.length; i++) {
            if (Array.isArray(answers[i]) && answers[i].length === 0) {
              setMyIndex(i);
              flag = false;
              ref.current.scrollToIndex({ index: i, animated: true });
              break;
            } else {
              setMyIndex(-1);
              flag = true;
            }
          }
          if (myindex === -1 && flag != false) {
            for (let i = 0; i < answers.length; i++) {
              if (Array.isArray(answers[i])) {
                const str = JSON.stringify(answers[i]);
                answers[i] = str;
              }
            }
            setSubmit(!submit);
          }
        } else {
          setMyIndex(index);
          ref.current.scrollToIndex({ index: index, animated: true });
        }
      }
      setIsClicked(false);
    }
  });
  const areAllListsEmpty = sectionNames.every(sectionName => {
    const questions = storeData.data.questions[sectionName];
    return questions.length === 0;
  });

  useEffect(() => {
    if (shown && !errorModal) {
      navigation.goBack();
    }
    if (areAllListsEmpty && !shown) {
      setErrorModal(true);
      setShown(true);
    }
  }, [errorModal, areAllListsEmpty]);
  if (areAllListsEmpty) {
    return (
      <ErrorModal
        modalVisible={errorModal}
        setModalVisible={setErrorModal}
        errorHeader="Oppsss!!"
        errorText="No questions found in this survey."
      />
    );
  }
  return (
    <View>
      <StatusBar backgroundColor="#14B8A6" barStyle="light-content" />
      {sectionNames.map(sectionName => (
        <FlatList
          ref={ref}
          keyExtractor={(item, index) => index.toString()}
          data={storeData.data.questions[sectionName]}
          renderItem={({ item, index }) => (
            <SurveyQuestion
              question={item}
              section={sectionName}
              previousSections={sectionNames[index - 1]}
              index={index}
              totalQuestion={storeData.data.questions[sectionName].length}
              singleChoice={singleChoice[item.id]}
              setSingleChoice={choiceKey =>
                setSingleChoice({
                  ...singleChoice,
                  [item.id]: choiceKey
                })
              }
              multipleChoices={multipleChoices}
              setMultipleChoices={setMultipleChoices}
              text={text}
              setText={setText}
              para={para}
              setPara={setPara}
              listChoice={listChoice}
              setListChoice={setListChoice}
              focus={isFocus}
              setFocus={setIsFocus}
              numberChoice={numberChoice}
              setNumberChoice={setNumberChoice}
              answers={answers}
              setAnswers={setAnswers}
              isClicked={isClicked}
              setisClicked={setIsClicked}
              myindex={myindex}
              error={error}
              questionId={questionId}
              setQuestionId={setquestionId}
              selectedChoices={selectedChoices}
              setSelectedChoices={setSelectedChoices}
            />
          )}
        />
      ))}

      {submit ? (
        <SubmitModal
          modalVisible={submit}
          setModalVisible={setSubmit}
          answers={answers}
          totalQuestion={totalNumQuestions}
          questionId={questionId}
          code={id}
          refetch={refetch}
          
        />
      ) : null}
    </View>
  );
};

export default Survey;
