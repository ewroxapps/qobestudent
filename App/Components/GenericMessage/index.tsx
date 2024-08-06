import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { VectorIcons } from '../VectorIcons';
import { ICON_TYPES } from '../VectorIcons/VectorIcons';
import styles from './styles';
import { GenericMessageProps } from './types';

const GenericMessage = (props: GenericMessageProps) => (
  
  
  <View style={styles.modalPosition}>
    <View style={styles.modalContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.message}>{props.title}</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={props.onClosePress}
            hitSlop={styles.hitSlop}>
            <VectorIcons
              name="close"
              iconType={ICON_TYPES.AntDesign}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

export default GenericMessage;
