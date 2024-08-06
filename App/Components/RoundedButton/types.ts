import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface RoundedButtonProps {
  label: string;
  onPress: () => void;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}
