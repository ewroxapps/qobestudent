import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BackHandler, Image, Text, TouchableOpacity, View } from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger
} from 'react-native-popup-menu';
import { Logout, PasswordInput } from '../../Assets/SVGs';
import Translator from '../../Assets/SVGs/Translator';
import { BASE_URL } from '../../Config/Api';
import CustomRadioButton from '../../Containers/Quiz/components/CustomRadioButton';
import { useAppSelector } from '../../Hooks';
import { useLogoutMutation } from '../../RTK/Api/AuthApi';
import { useTranslationQuery } from '../../RTK/Api/CourseApi';
import { userInfoSelector } from '../../Selectors/UserSelector';
import { Images } from '../../Themes';
import { findWord } from '../../Utils/ParsingUtils';
import Spinner from '../Spinner';
import { useLanguage } from './../../Types/LanguageContext';
import styles from './styles';
import { headerProps } from './types';
const HeaderRight = (props: headerProps) => {
  const userInfo = useAppSelector(userInfoSelector);
  const navigation = useNavigation<IHomeNavigationProp>();
  const [menuOpen, setMenuOpen] = useState(false);
  const [translator, setTranslator] = useState(false);
  const { t } = useTranslation('home');
  const [logout] = useLogoutMutation();
  const {
    selectedLanguage,
    updateDynamicDictionary,
    setLanguage,
    selectedDirection,
    dynamicDictionary
  } = useLanguage();

  const radioButtons = Object.values(props?.data).map(language => ({
    label: language?.name,
    id: language?.id,
    directiom: language.direction
  }));

  const { data, refetch, isFetching } = useTranslationQuery({
    id: selectedLanguage
  });

  useEffect(() => {
    const backAction = () => {
      if (menuOpen || translator) {
        setMenuOpen(false);
        setTranslator(false);
        return true;
      }
      return false;
    };

    updateDynamicDictionary(data != undefined ? data : []);

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [selectedLanguage, isFetching]);

  const handleRadioButtonChange = (newValue: string) => {
    const language = radioButtons.find(lang => lang.label === newValue);
    if (language) {
      if (language.directiom === 'L') {
        setLanguage(language?.id, 'left');
      } else {
        setLanguage(language?.id, 'right');
      }
    }

    setTranslator(false);
  };

  const renderImage = () => {
    return (
      <Menu opened={menuOpen} onBackdropPress={() => setMenuOpen(false)}>
        <MenuTrigger
          onPress={() => setMenuOpen(true)}
          customStyles={{
            TriggerTouchableComponent: TouchableOpacity
          }}>
          <TouchableOpacity onPress={() => setMenuOpen(true)}>
            {userInfo?.dp ? (
              <Image
                source={{ uri: `${BASE_URL}${userInfo?.dp}` }}
                style={styles.profile}
              />
            ) : (
              <Image
                source={Images.profilePlaceholder}
                style={styles.profile}
              />
            )}
          </TouchableOpacity>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>
          <MenuOption
            style={styles.menuOptionContainer}
            onSelect={() => navigation.navigate('ChangePasswordPage')}>
            {selectedDirection === 'left' ? (
              <View style={{ flexDirection: 'row' }}>
                <PasswordInput width={20} height={20} />
                <Text style={[styles.text]}>{t('changePassword')}</Text>
              </View>
            ) : (
              <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.text]}>
                  {findWord(dynamicDictionary, 'Change Password')
                    ? findWord(dynamicDictionary, 'Change Password')
                    : 'Change Password'}
                </Text>
                <PasswordInput width={20} height={20} />
              </View>
            )}
          </MenuOption>
          <MenuOption style={styles.menuOptionContainer} onSelect={logout}>
            {selectedDirection === 'left' ? (
              <View style={{ flexDirection: 'row' }}>
                <Logout width={20} height={20} />
                <Text style={[styles.text, styles.logoutText]}>
                  {t('signOut')}
                </Text>
              </View>
            ) : (
              <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                <Text style={[styles.text]}>
                  {findWord(dynamicDictionary, 'Sign out')
                    ? findWord(dynamicDictionary, 'Sign out')
                    : 'Sign out'}
                </Text>
                <Logout width={20} height={20} />
              </View>
            )}
          </MenuOption>
        </MenuOptions>
      </Menu>
    );
  };

  const renderLang = () => {
    return (
      <Menu opened={translator} onBackdropPress={() => setTranslator(false)}>
        <MenuTrigger
          onPress={() => setTranslator(true)}
          customStyles={{
            TriggerTouchableComponent: TouchableOpacity
          }}>
          <TouchableOpacity
            onPress={() => {
              props.refetch();
              setTranslator(true);
            }}>
            {radioButtons.length > 0 ? (
              <Translator
                style={{
                  marginTop: 5,
                  marginRight: 10,
                  marginLeft: 10
                }}
              />
            ) : null}
          </TouchableOpacity>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>
          {radioButtons.map((item, index) => (
            <CustomRadioButton
              key={index}
              label={item.label}
              selected={item.id.includes(selectedLanguage)}
              onSelect={handleRadioButtonChange}
              disabled={false}
            />
          ))}
          {isFetching ? <Spinner /> : null}
        </MenuOptions>
      </Menu>
    );
  };

  return (
    <View style={styles.headerRight}>
      {props.direction === 'left' ? (
        <View style={{ flexDirection: 'row' }}>
          {renderLang()}
          {renderImage()}
        </View>
      ) : (
        <View style={{ marginLeft: 30, flexDirection: 'row' }}>
          {renderImage()}
          {renderLang()}
        </View>
      )}
    </View>
  );
};

export default HeaderRight;
