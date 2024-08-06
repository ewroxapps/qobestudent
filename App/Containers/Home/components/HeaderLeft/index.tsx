import { Text, View } from 'react-native';
import styles from './styles';
import { leftProps } from './types';

const HeaderLeft = (props: leftProps) => {
  return (
    <View style={[styles.container]}>
      {props.direction === 'left' ? (
        <Text style={styles.textStyle}>{props.label}</Text>
      ) : (
        <Text style={styles.textStyle2}>{props.label}</Text>
      )}
    </View>
  );
};

export default HeaderLeft;
