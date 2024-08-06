import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Surface } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Lock } from '../../Assets/SVGs';
import TickCircle from '../../Assets/SVGs/TickCircle';
import { InputField, RoundedButton, Spinner } from '../../Components';
import { useChangePasswordMutation } from '../../RTK/Api/AuthApi';
import images from '../../Themes/Images';
import { useLanguage } from '../../Types/LanguageContext';
import { findWord } from '../../Utils/ParsingUtils';
import styles from './styles';

const ChangePasswordPage = () => {
  const { dynamicDictionary, selectedDirection } = useLanguage();

  const { t } = useTranslation('login');
  const { t: loginErrors } = useTranslation('errors');
  const navigation = useNavigation<IHomeNavigationProp>();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [oldPasswordError, setOldPasswordError] = useState('');
  const [newPasswordConfirmationError, setNewPasswordConfirmationError] =
    useState('');
  const [changePassword, { isLoading, isError, isSuccess }] =
    useChangePasswordMutation();
  useEffect(() => {
    if (isError) {
      setNewPasswordConfirmationError(loginErrors('errorChangingPassword'));
    }
  }, [isError]);

  const onNewPasswordChanged = useCallback((value: string) => {
    setNewPasswordError('');
    setNewPassword(value);
  }, []);

  const onNewPasswordConfirmationChanged = useCallback((value: string) => {
    setNewPasswordConfirmationError('');
    setNewPasswordConfirmation(value);
  }, []);

  const onOldPasswordChanged = useCallback((value: string) => {
    setOldPasswordError('');
    setOldPassword(value);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (
      newPassword.length === 0 ||
      newPasswordConfirmation.length === 0 ||
      oldPassword.length === 0
    ) {
      if (newPassword.length === 0) {
        setNewPasswordError(loginErrors('emptyField'));
      }
      if (newPasswordConfirmation.length === 0) {
        setNewPasswordConfirmationError(loginErrors('emptyField'));
      }
      if (oldPassword.length === 0) {
        setOldPasswordError(loginErrors('emptyField'));
      }
      return;
    }
    if(newPassword.length < 8  ||
      newPasswordConfirmation.length < 8){

        if (newPassword.length < 8) {
          setNewPasswordError('Password cannot be less than 8 character');
        }
        if (newPasswordConfirmation.length === 0) {
          setNewPasswordConfirmationError('Password cannot be less than 8 character');
        }

      }
    if (newPassword !== newPasswordConfirmation) {
      setNewPasswordConfirmationError('passwordNotMatched');
    }
    await changePassword({ oldPassword, newPassword, newPasswordConfirmation });
  }, [newPassword, newPasswordConfirmation, isError]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <SafeAreaView style={styles.container}>
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
        <Surface style={styles.innerContainer} elevation={1}>
          {isSuccess ? (
            <View
              style={{
                flex: 1,
                paddingVertical: 100,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000
              }}>
              <TickCircle />
              <Text style={styles.successText}>
                {t('passwordChangedSuccessfully')}
              </Text>
              <RoundedButton
                label={t('done')}
                onPress={() => navigation.navigate('Home')}
                style={styles.loginButton}
              />
            </View>
          ) : (
            <>
              <View style={styles.headingContainer}>
                <Text style={styles.headingText}>
                  {findWord(dynamicDictionary, 'Create new Password') ??
                    'Create new Password'}
                </Text>
                <Text style={styles.bodyText}>
                  {findWord(
                    dynamicDictionary,'Please create a new password'
                  ) ?? 'Please create a new password'}
                </Text>
              </View>
              <View
                style={[
                  styles.passwordConfirmationContainer,
                  oldPasswordError ? { marginBottom: 10 } : {}
                ]}>
                <Text style={styles.label}>
                  {findWord(dynamicDictionary, 'Old Password') ??
                    'Old Password'}
                </Text>
                <InputField
                  value={oldPassword}
                  label={'Old Password'}
                  style={styles.inputField}
                  onTextChange={value => onOldPasswordChanged(value)}
                  error={oldPasswordError}
                  isError
                  selectedDirection={selectedDirection}
                  secureTextEntry={true}
                />
              </View>
              <View
                style={[
                  styles.labelContainer,
                  selectedDirection != 'left' ? { alignSelf: 'flex-end' } : {}
                ]}>
                {selectedDirection === 'left' ? (
                  <Lock height={20} width={20} />
                ) : null}

                <Text style={[styles.label, styles.labelSpacing]}>
                  {findWord(dynamicDictionary, 'Create Password') ??
                    'Create Password'}
                </Text>
                {selectedDirection != 'left' ? (
                  <Lock height={20} width={20} />
                ) : null}
              </View>
              <InputField
                style={styles.inputField}
                label={'Create Password'}
                onTextChange={value => onNewPasswordChanged(value)}
                value={newPassword}
                error={newPasswordError}
                selectedDirection={selectedDirection}
                isError
                secureTextEntry={true}
              />
              <View style={styles.passwordConfirmationContainer}>
                <Text style={styles.label}>
                  {findWord(dynamicDictionary, 'Confirm Password') ??
                    'Confirm Password'}
                </Text>
                <InputField
                  value={newPasswordConfirmation}
                  label={'Confirm Password'}
                  selectedDirection={selectedDirection}
                  style={styles.inputField}
                  onTextChange={value =>
                    onNewPasswordConfirmationChanged(value)
                  }
                  error={newPasswordConfirmationError}
                  isError
                  secureTextEntry={true}
                />
              </View>

              <RoundedButton
                label={t('create')}
                onPress={handleSubmit}
                style={styles.loginButton}
              />

              <TouchableOpacity
                onPress={navigation.goBack}
                style={styles.backButtonContainer}
                hitSlop={styles.hitSlop}>
                <Text style={styles.backButtonText}>
                  {findWord(dynamicDictionary, 'Back') ?? 'Back'}
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Surface>
        {isLoading && <Spinner />}
      </KeyboardAwareScrollView>
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

export default ChangePasswordPage;
