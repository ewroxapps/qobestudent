import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import style from './styles';
import { SurveyQuestionProps } from './types';
const SurveyQuestion = (props: SurveyQuestionProps) => {
  const { dynamicDictionary, selectedDirection } = useLanguage();

  const handleChoicePress = (choiceKey: string) => {
    const updatedAnswers = [...props.answers];
    const updateQuestion = [...props.questionId];
    updatedAnswers[props.index] = choiceKey;
    updateQuestion[props.index] = props.question.id;
    props.setAnswers(updatedAnswers);
    props.setQuestionId(updateQuestion);
    props.setSingleChoice(choiceKey);
  };

  const MhandleChoicePress = (choiceKey: string) => {
    const updatedAnswers = [...props.answers];
    const updateQuestion = [...props.questionId];

    const currentQuestionChoices = [...props.multipleChoices[props.index]];

    if (currentQuestionChoices.includes(choiceKey)) {
      // Deselect the choice
      const updatedChoices = currentQuestionChoices.filter(
        key => key !== choiceKey
      );
      props.setMultipleChoices(prevChoices => {
        const newChoices = [...prevChoices];
        newChoices[props.index] = updatedChoices;
        return newChoices;
      });
    } else {
      // Select the choice
      const updatedChoices = [...currentQuestionChoices, choiceKey];
      props.setMultipleChoices(prevChoices => {
        const newChoices = [...prevChoices];
        newChoices[props.index] = updatedChoices;
        return newChoices;
      });
    }
    updatedAnswers[props.index] = props.multipleChoices[props.index];
    updateQuestion[props.index] = props.question.id;

    props.setAnswers(updatedAnswers);
    props.setQuestionId(updateQuestion);
  };

  const handleAnswerChange = (text: string) => {
    const updatedAnswers = [...props.answers];
    const updateQuestion = [...props.questionId];
    updatedAnswers[props.index] = text;
    updateQuestion[props.index] = props.question.id;
    props.setAnswers(updatedAnswers);
    props.setQuestionId(updateQuestion);
    props.setText(text);
  };

  const handleParaAnswerChange = (text: string) => {
    const updatedAnswers = [...props.answers];
    const updateQuestion = [...props.questionId];
    updatedAnswers[props.index] = text;
    updateQuestion[props.index] = props.question.id;
    props.setAnswers(updatedAnswers);
    props.setQuestionId(updateQuestion);
    props.setPara(text);
  };

  const handleNumberChange = (text: string) => {
    const updatedAnswers = [...props.answers];
    const updateQuestion = [...props.questionId];
    updatedAnswers[props.index] = text;
    updateQuestion[props.index] = props.question.id;
    props.setAnswers(updatedAnswers);
    props.setQuestionId(updateQuestion);
    props.setNumberChoice(text);
  };

  const handleChoicePressL = (choiceKey: string) => {
    const updatedAnswers = [...props.answers];
    const updateQuestion = [...props.questionId];
    updatedAnswers[props.index] = choiceKey;
    updateQuestion[props.index] = props.question.id;
    props.setAnswers(updatedAnswers);
    props.setQuestionId(updateQuestion);
    props.setListChoice(choiceKey);
  };

  const handleOptionSelect = (option: string, choiceKey: string) => {
    const updatedAnswers = [...props.answers];

    if (!updatedAnswers[props.index]) {
      updatedAnswers[props.index] = Array(options.length).fill(undefined);
    }
  
    const optionIndex = options.indexOf(option);
    updatedAnswers[props.index][optionIndex] = { option, choiceKey };
    const updatedQuestionId = [...props.questionId];
    updatedQuestionId[props.index] = props.question.id;
  
    const updatedSelectedChoices = {
      ...props.selectedChoices,
      [option]: choiceKey,
    };
  
    props.setAnswers(updatedAnswers);
    props.setQuestionId(updatedQuestionId);
    props.setSelectedChoices(updatedSelectedChoices);
  };
  

  const options = props.question.question
    .split(';')
    .map(option => option.trim())
    .filter(Boolean) // Exclude empty strings
    .slice(1);

  const optionsQuestion = props.question.question
    .split(';')
    .map(option => option.trim())
    .filter(Boolean);

  return (
    <ScrollView>
      {props.index === 0 ? (
        <View>
          {selectedDirection === 'left' ? (
            <View style={style.textContainer}>
              <Text style={style.textStyle}>
                {findWord(dynamicDictionary, 'Section')
                  ? findWord(dynamicDictionary, 'Section')
                  : 'Section'}
                :{' '}
              </Text>
              <Text style={style.textStyle}>{props.section}</Text>
            </View>
          ) : (
            <View style={style.textContainer}>
              <Text style={style.textStyle}>{props.section}</Text>
              <Text style={style.textStyle}>
                {findWord(dynamicDictionary, 'Section')
                  ? findWord(dynamicDictionary, 'Section')
                  : 'Section'}
                :{' '}
              </Text>
            </View>
          )}
        </View>
      ) : (
        <View>
          {props.section != props.previousSections &&
            props.previousSections != undefined && (
              <View>
                {selectedDirection === 'left' ? (
                  <View style={style.textContainer}>
                    <Text style={style.textStyle}>
                      {findWord(dynamicDictionary, 'Section')
                        ? findWord(dynamicDictionary, 'Section')
                        : 'Section'}
                      :{' '}
                    </Text>
                    <Text style={style.textStyle}>{props.section}</Text>
                  </View>
                ) : (
                  <View style={style.textContainer}>
                    <Text style={style.textStyle}>{props.section}</Text>
                    <Text style={style.textStyle}>
                      {findWord(dynamicDictionary, 'Section')
                        ? findWord(dynamicDictionary, 'Section')
                        : 'Section'}
                      :{' '}
                    </Text>
                  </View>
                )}
              </View>
            )}
        </View>
      )}

      <View style={style.outerContainer}>
        {selectedDirection === 'left' ? (
          <View style={style.questionContainer}>
            <Text numberOfLines={1} style={style.headText}>
              {props.question.head}
            </Text>
            <Text style={style.questionText}>{optionsQuestion[0]}</Text>
          </View>
        ) : (
          <View
            style={[style.questionContainer, { justifyContent: 'flex-end' }]}>
            <Text style={[style.questionText, , { textAlign: 'right' }]}>
              {props.question.question}
            </Text>
            <Text
              numberOfLines={1}
              style={[style.headText, { textAlign: 'right', marginRight: 10 }]}>
              {props.question.head}
            </Text>
          </View>
        )}

        {props.question.type === 'M' && (
          <View>
            {Object.entries(props.question.choices).map(
              ([choiceKey, choiceValue]) => (
                <TouchableOpacity
                  key={choiceKey}
                  onPress={() => handleChoicePress(choiceKey)}
                  style={[
                    style.choice,
                    props.singleChoice === choiceKey && style.selectedChoice
                  ]}>
                  <Text style={style.textchoice}>{choiceValue}</Text>
                </TouchableOpacity>
              )
            )}
            {props.myindex === props.index && (
              <Text style={style.error}>
                {findWord(dynamicDictionary, 'Please select your choice')
                  ? findWord(dynamicDictionary, 'Please select your choice')
                  : 'Please select your choice'}
              </Text>
            )}
            {props.error && (
              <Text style={style.error}>
                {findWord(dynamicDictionary, 'Please select your choice')
                  ? findWord(dynamicDictionary, 'Please select your choice')
                  : 'Please select your choice'}
              </Text>
            )}
          </View>
        )}

        {props.question.type === 'C' && (
          <View>
            {Object.entries(props.question.choices).map(
              ([choiceKey, choiceValue]) => (
                <TouchableOpacity
                  key={choiceKey}
                  onPress={() => MhandleChoicePress(choiceKey)}
                  style={[
                    style.choice,
                    props.multipleChoices[props.index].includes(choiceKey) &&
                      style.selectedChoice
                  ]}>
                  <Text style={style.textchoice}>{choiceValue}</Text>
                </TouchableOpacity>
              )
            )}
            {props.myindex === props.index && (
              <Text style={style.error}>
                {findWord(dynamicDictionary, 'Please select your choice')
                  ? findWord(dynamicDictionary, 'Please select your choice')
                  : 'Please select your choice'}
              </Text>
            )}
            {props.error && (
              <Text style={style.error}>
                {findWord(dynamicDictionary, 'Please select your choice')
                  ? findWord(dynamicDictionary, 'Please select your choice')
                  : 'Please select your choice'}
              </Text>
            )}
          </View>
        )}

        {props.question.type === 'T' && (
          <View>
            <TextInput
              value={props.text}
              onChangeText={handleAnswerChange}
              placeholder="Type your answer here..."
              style={[
                style.answerInput,
                selectedDirection != 'left' ? { textAlign: 'right' } : {}
              ]}
            />
            {props.myindex === props.index && (
              <Text style={style.error}>
                {findWord(dynamicDictionary, 'Please enter you answer')
                  ? findWord(dynamicDictionary, 'Please enter you answer')
                  : 'Please enter you answer'}
              </Text>
            )}
            {props.error && (
              <Text style={style.error}>
                {findWord(dynamicDictionary, 'Please enter you answer')
                  ? findWord(dynamicDictionary, 'Please enter you answer')
                  : 'Please enter you answer'}
              </Text>
            )}
          </View>
        )}
        {props.question.type === 'P' && (
          <View>
            <TextInput
              value={props.para}
              onChangeText={handleParaAnswerChange}
              placeholder={
                findWord(dynamicDictionary, 'Type your answer here...')
                  ? findWord(dynamicDictionary, 'Type your answer here...')
                  : 'Type your answer here...'
              }
              style={[
                style.answerInput,
                selectedDirection != 'left' ? { textAlign: 'right' } : {}
              ]}
            />
            {props.myindex === props.index && (
              <Text style={style.error}>
                {findWord(dynamicDictionary, 'Please enter you answer')
                  ? findWord(dynamicDictionary, 'Please enter you answer')
                  : 'Please enter you answer'}
              </Text>
            )}
            {props.error && (
              <Text style={style.error}>
                {findWord(dynamicDictionary, 'Please enter you answer')
                  ? findWord(dynamicDictionary, 'Please enter you answer')
                  : 'Please enter you answer'}
              </Text>
            )}
          </View>
        )}
        {props.question.type === 'L' && (
          <View>
            <Dropdown
              inputSearchStyle={style.inputSearchStyle}
              style={[
                style.dropdown,
                props.focus && { borderColor: '#14B8A6' }
              ]}
              labelField="label"
              valueField="value"
              placeholderStyle={style.placeholderStyle}
              selectedTextStyle={style.selectedTextStyle}
              onFocus={() => props.setFocus(true)}
              onBlur={() => props.setFocus(false)}
              data={Object.entries(props.question.choices).map(
                ([choiceKey, choiceValue]) => ({
                  label: choiceValue,
                  value: choiceKey
                })
              )}
              value={props.listChoice}
              onChangeText={(choiceKey: string) =>
                handleChoicePressL(choiceKey)
              }
              onChange={item => {
                handleChoicePressL(item.value);
                props.setFocus(false);
              }}
            />
            {props.myindex === props.index && (
              <Text style={style.error}>
                {findWord(dynamicDictionary, 'Please select your choice')
                  ? findWord(dynamicDictionary, 'Please select your choice')
                  : 'Please select your choice'}
              </Text>
            )}
            {props.error && (
              <Text style={style.error}>
                {findWord(dynamicDictionary, 'Please select your choice')
                  ? findWord(dynamicDictionary, 'Please select your choice')
                  : 'Please select your choice'}
              </Text>
            )}
          </View>
        )}
        {props.question.type === 'G' ? (
          <ScrollView horizontal>
          <View style={{ flexDirection: 'row',  marginTop:10, marginBottom:10}}>
          <View style={{ flexDirection: 'column', marginTop:18 }}>
            {options.map(option => (
              <Text key={option} style={{ marginTop: 2 }}>{option}</Text>
            ))}
          </View>
            <View style={{ flexDirection: 'row' }}>
              {Object.entries(props.question.choices).map(
                ([choiceKey, choiceValue]) => (
                  <View key={choiceKey} style={{ marginLeft: 20 }}>
                    <Text style={style.textchoice}>{choiceValue} </Text>
                    {options.map(option => (
                      <View
                        key={option}
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 8
                        }}>
                        <TouchableOpacity
                          onPress={() => handleOptionSelect(option, choiceKey)}
                          style={{
                            borderWidth: 1,
                            borderRadius: 10,
                            padding: 5,
                            alignItems: 'center',
                            backgroundColor: props.selectedChoices[option] === choiceKey ? '#14B8A6' : 'white',
                            marginLeft: 10
                          }}></TouchableOpacity>
                      </View>
                    ))}
                  </View>
                )
              )}
            </View>
          </View>
          </ScrollView>
        ) : null}

        {props.question.type === 'N' && (
          <View>
            <TextInput
              placeholder={
                findWord(dynamicDictionary, 'Type your answer here...')
                  ? findWord(dynamicDictionary, 'Type your answer here...')
                  : 'Type your answer here...'
              }
              value={props.numberChoice}
              onChangeText={handleNumberChange}
              keyboardType="numeric"
              style={style.answerInput}
            />
            {props.myindex === props.index && (
              <Text style={style.error}>
                {findWord(dynamicDictionary, 'Please enter you answer')
                  ? findWord(dynamicDictionary, 'Please enter you answer')
                  : 'Please enter you answer'}
              </Text>
            )}
            {props.error && (
              <Text style={style.error}>
                {findWord(dynamicDictionary, 'Please enter you answer')
                  ? findWord(dynamicDictionary, 'Please enter you answer')
                  : 'Please enter you answer'}
              </Text>
            )}
          </View>
        )}
        {props.totalQuestion - 1 === props.index && (
          <TouchableOpacity
            onPress={() => {
              props.setisClicked(true);
            }}
            style={style.submitButton}>
            <View style={style.button}>
              <Text style={style.textStyle}>
                {findWord(dynamicDictionary, 'Submit Survey')
                  ? findWord(dynamicDictionary, 'Submit Survey')
                  : 'Submit Survey'}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default SurveyQuestion;
