import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { BASE_URL } from '../../../../Config/Api';
import { useAppSelector } from '../../../../Hooks';
import { userInfoSelector } from '../../../../Selectors/UserSelector';
import { Images } from '../../../../Themes';
import { VectorIcons } from './../../../../Components/VectorIcons';
import { ICON_TYPES } from './../../../../Components/VectorIcons/VectorIcons';
import styles from './styles';
import { HeaderProps } from './types';
const Header = (props: HeaderProps) => {
  const navigation = useNavigation();
  const userInfo: any = useAppSelector(userInfoSelector);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backContainer} onPress={()=>{
        navigation.goBack()
      }}>
        <VectorIcons
          name="arrow-back"
          iconType={ICON_TYPES.Ionicons}
          size={24}
        />
      </TouchableOpacity>
      <View style={styles.innerProfileView}>
        {userInfo.dp ? (
          <Image
            source={{
              uri: `${BASE_URL}${userInfo.dp}`
            }}
            defaultSource={Images.profilePlaceholder}
            style={styles.profile}
          />
        ) : (
          <Image source={Images.profilePlaceholder} style={styles.profile} />
        )}
      </View>
      <View style={styles.userDetailView}>
        <Text style={styles.userTxt}>{userInfo.name}</Text>
        <Text style={styles.userTxt}>{userInfo.reg_no}</Text>
      </View>
    </View>
  );
};

export default Header;
