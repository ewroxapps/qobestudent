import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { BASE_URL } from '../../../../Config/Api';
import { Images } from '../../../../Themes';
import styles from './styles';
import { HeaderProps } from './types';
const Header = (props: HeaderProps) => {
  const [touchable, setTouchable] = useState(false);
  const navigation = useNavigation<IHomeNavigationProp>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('ComplaintUserDetail', {
          data: props.data,
          name: props.name,
          dp: props.dp
        });
      }}>
      <View style={styles.innerProfileView}>
        {props.dp ? (
          <Image
            source={{
              uri: `${BASE_URL}${props.dp}`
            }}
            defaultSource={Images.profilePlaceholder}
            style={styles.profile}
          />
        ) : (
          <Image source={Images.profilePlaceholder} style={styles.profile} />
        )}
        <View style={{ width: '90%', alignItems: 'flex-start', top: 15 }}>
          <Text style={[styles.time]}>{props.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Header;
