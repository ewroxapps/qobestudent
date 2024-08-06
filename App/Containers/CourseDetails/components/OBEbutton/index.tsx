import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { ActionButtonProps } from './types';

const OBEbutton = (props: ActionButtonProps) => {
  const { color, textColor, label, icon } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <View
      // @ts-ignore
      elevation={3}
      style={[styles.container, { backgroundColor: color }]}>
      <View  style={styles.innerContainer}>
        {icon()}
        <Text style={[styles.label, { color: textColor }]}>{label}</Text>
      </View>
    </View>
  );
};
export default OBEbutton;
