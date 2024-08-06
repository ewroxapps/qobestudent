import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import AzureAuth from 'react-native-azure-auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Lock, User } from '../../Assets/SVGs';
import Group from '../../Assets/SVGs/Group';
import { InputField, RoundedButton, Spinner } from '../../Components';
import { useLoginMutation } from '../../RTK/Api/AuthApi';
import { useUniInfoQuery } from '../../RTK/Api/CourseApi';
import images from '../../Themes/Images';
import { findWord } from '../../Utils/ParsingUtils';
import { useLanguage } from './../../Types/LanguageContext';
import { UniModal } from './components';
import styles from './styles';

const LoginPage = () => {
  const { t } = useTranslation('login');
  const { t: loginErrors } = useTranslation('errors');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [modal, setModal] = useState(true);
  const [createMutation, { isLoading, isError, data }] = useLoginMutation();
  const [userInfo, setUserInfo] = useState(null);

  const {
    selectedLanguage,
    selectedDirection,
    dynamicDictionary,
    university,
    setCloName,
    setCloPName,
    setPeoName,
    setPeoPName,
    setPloName,
    setPloPName,
    setCourseRegSingleChoice,
    setUniversity,
  } = useLanguage();
  useEffect(() => {
    if (isError) {
      var msg = 'Incorrect credentials';
      var convertmsg = findWord(dynamicDictionary, msg);
      setPasswordError(convertmsg ?? msg);
    }
  }, [isError, selectedLanguage, dynamicDictionary, data,university]);

  const onUsernameChanged = useCallback((value: string) => {
    setUsernameError('');
    setUsername(value);
  }, []);

  const onPasswordChanged = useCallback((value: string) => {
    setPasswordError('');
    setPassword(value);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (username.length == 0 || password.length == 0) {
      if (username.length == 0) {
        var msg = 'Please enter your username';
        var convertmsg = findWord(dynamicDictionary, msg);
        setUsernameError(convertmsg ?? msg);
      }
      if (password.length == 0) {
        var msg = 'Please enter your password';
        var convertmsg = findWord(dynamicDictionary, msg);
        setPasswordError(convertmsg ?? msg);
      }
      return;
    }
    await createMutation({ username, password });
  }, [username, password, isError]);

  if (data != undefined) {
    setCloName(data.cloName)
    setCloPName(data.cloPName)
    setCourseRegSingleChoice(data.courseRegSingleChoice)
    setPloName(data.ploName)
    setPloPName(data.ploPName)
    setPeoName(data.peoName)
    setPeoPName(data.peoPName)
  }

  console.debug(university)
  const {  refetch, isFetching,data:Unidata } = useUniInfoQuery({
    uuid: university?.uuid
  });

  

  const handleAzure = async () => {
    console.debug(Unidata);
 
    const azureAuth = new AzureAuth({
      clientId: "fa54655d-047c-4a6a-8694-82e5c20c7667",
      redirectUri: 'msalfa54655d-047c-4a6a-8694-82e5c20c7667://auth',
     
    });
  
    try {
      const authResult = await azureAuth.webAuth.authorize({ scope: 'openid profile User.Read' });
      console.log('Auth Result:', authResult);
  
 
    } catch (error) {
      console.log('Authentication Error:', error);
     
    }
  };




  return (
    <SafeAreaView style={styles.container}>
      {university == undefined ? (
        <UniModal
          modalVisible={true}
          setModalVisible={setModal}
          university={university}
          setUniversity={setUniversity}
        />
      ):( 
         <KeyboardAwareScrollView
          style={{
          flex: 1,
          marginBottom: 70
        }}
        extraHeight={50}>
        <Image
          source={images.loginBg}
          style={styles.backgroundImage}
          resizeMode="contain"
        />
        <View style={styles.logoContainer}>
          <Image source={images.appLogo} />
          <Text style={styles.qobe}>{t('qobe')}</Text>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.headingContainer}>
          
            {selectedLanguage != 'en' ? (
              <View>
                 
                <Text style={styles.headingText}>
                  {findWord(dynamicDictionary, 'Learner Login')
                    ? findWord(dynamicDictionary, 'Learner Login')
                    : 'Learner Login'}
                </Text>
                <Text style={styles.bodyText}>
                  {findWord(
                    dynamicDictionary,
                    'Please fill out the following fields to log in'
                  )
                    ? findWord(
                        dynamicDictionary,
                        'Please fill out the following fields to log in'
                      )
                    : 'Please fill out the following fields to log in'}
                </Text>
              </View>
            ) : (
              <View>
                  <TouchableOpacity 
                  onPress={()=>{
                    setModal(false)
                    AsyncStorage.removeItem('university')
                    .then(() => {
                      console.log('University reset successfully');
                      // Update the state in your LanguageContext as well if necessary
                      setUniversity(undefined);
                    })
                    .catch(error => console.error('Error resetting university:', error));
                  
                  
                  }}
                  style={{width:"100%", alignSelf:'flex-end'}}>
                   <Group width={20} height={20}/>
                 </TouchableOpacity>
                <Text style={styles.headingText}>Learners Login</Text>
                <Text style={styles.bodyText}>{t('fillFields')}</Text>
              </View>
            )}
          </View>
          {selectedDirection === 'right' ? (
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <User width={20} height={20} />
            </View>
          ) : (
            <User width={20} height={20} />
          )}

          <View style={{ flex: 1 }}>
            <InputField
              selectedDirection={selectedDirection}
              label={'Username'}
              style={styles.inputField}
              onTextChange={value => onUsernameChanged(value)}
              value={username}
              error={usernameError}
              isError
            />
            <View style={styles.passwordInputContainer}>
              {selectedDirection === 'right' ? (
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <Lock height={20} width={20} />
                </View>
              ) : (
                <Lock height={20} width={20} />
              )}

              <InputField
                selectedDirection={selectedDirection}
                value={password}
                label={'Password'}
                style={styles.inputField}
                onTextChange={value => onPasswordChanged(value)}
                error={passwordError}
                isError
                secureTextEntry={true}
              />
            </View>
          </View>

          <View style={{justifyContent:"space-between", flex:1,flexDirection:'row'}}>
          <View style={{ flex: 1 }}>
            <RoundedButton
              label={t('login')}
              onPress={handleSubmit}
              style={styles.loginButton}
            />
          </View>

          {Unidata?.allow_azure ?(
              <View style={{ flex: 1, marginLeft:10 }}>
                  <TouchableOpacity 
                    onPress={()=>{
                     handleAzure()
                     }}
                    style={styles.loginButtons}>
                  <Text style={styles.texts}>Azure</Text>
                 </TouchableOpacity>
              </View> 
          ):null
          }

      
          </View>
        
        </View>
        {isLoading && <Spinner />}
      </KeyboardAwareScrollView>
     
      )}

      <View style={styles.alfozeLogoContainer}>
        <Image
          source={images.creatorLogo}
          resizeMode="contain"
          style={{ width: 120 }}
        />
      </View>
      

     
    </SafeAreaView>
  );
};

export default LoginPage;
