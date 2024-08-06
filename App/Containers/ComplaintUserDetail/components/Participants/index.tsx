import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { BASE_URL } from '../../../../Config/Api';
import { useAppSelector } from '../../../../Hooks';
import { userInfoSelector } from '../../../../Selectors/UserSelector';
import { Images } from '../../../../Themes';
import { useLanguage } from '../../../../Types/LanguageContext';
import {
  convertNumberToArabic,
  findWord
} from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { HeaderProps } from './types';
const Participants = (props: HeaderProps) => {
  const userInfo: any = useAppSelector(userInfoSelector);
  const [visibleItems, setVisibleItems] = useState(false);
  const usersAndDpsDictionary: Record<string, string> = {}; // Define the type here
  props.data.chat.forEach(chatItem => {
    const user = chatItem.user;
    const dp = chatItem.dp;
    if (!usersAndDpsDictionary[user]) {
      usersAndDpsDictionary[user] = dp;
    }
  });

  const { selectedDirection, dynamicDictionary } = useLanguage();

  // Convert the dictionary to an array of objects
  const uniqueUsersAndDps = Object.entries(usersAndDpsDictionary).map(
    ([user, dp]) => ({
      user,
      dp
    })
  );

  console.log(uniqueUsersAndDps);

  return (
    <View style={styles.container}>
      <View style={styles.justifyView}>
        <Text style={styles.userTxt}>
          {convertNumberToArabic(dynamicDictionary, uniqueUsersAndDps.length)
            ? convertNumberToArabic(dynamicDictionary, uniqueUsersAndDps.length)
            : uniqueUsersAndDps.length}{' '}
          {findWord(dynamicDictionary, 'Participants')
            ? findWord(dynamicDictionary, 'Participants')
            : 'Participants'}
        </Text>
      </View>
      {uniqueUsersAndDps.map((medias, index) => {
        return (
          <View style={styles.participantView} key={index}>
            <View style={styles.viewImage}>
              <Image
                source={{
                  uri: `${BASE_URL}${medias.dp}`
                }}
                defaultSource={Images.profilePlaceholder}
                style={styles.profile}
              />
              <Text>{medias.user}</Text>
            </View>
            {userInfo.name === medias.user ? (
              <View style={styles.createrView}>
                <Text style={styles.textColor}>
                  {findWord(dynamicDictionary, 'Creator')
                    ? findWord(dynamicDictionary, 'Creator')
                    : 'Creator'}
                </Text>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

export default Participants;
