import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { BASE_URL } from '../../../../Config/Api';
import { Images } from '../../../../Themes';
import Details from '../Details';
import styles from './styles';
import { HeaderProps } from './types';
const Header = (props: HeaderProps) => {
  const [touchable, setTouchable] = useState(false);
  const navigation = useNavigation<ICoursesNavigationProp>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setTouchable(!touchable);
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

        <Text style={[styles.time]}>{props.name}</Text>
      </View>
      {touchable ? (
        <Details
          date={props.date}
          name={props.name}
          dp={props.dp}
          title={props.title}
          details={props.detail}
          modalVisible={touchable}
          setModalVisible={setTouchable}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default Header;
