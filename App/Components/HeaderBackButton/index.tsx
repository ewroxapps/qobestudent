import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { VectorIcons } from '../VectorIcons';
import { ICON_TYPES } from '../VectorIcons/VectorIcons';
import styles from './styles';

const HeaderBackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={navigation.goBack}
      hitSlop={styles.hitSlop}>
      <VectorIcons name="arrow-back" iconType={ICON_TYPES.Ionicons} size={24} />
    </TouchableOpacity>
  );
};
export default HeaderBackButton;
