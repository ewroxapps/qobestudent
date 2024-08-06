import { StyleProp, TextInputProps, TextStyle } from 'react-native';

export interface InputFieldProps extends TextInputProps {
  value?: string;
  label: string;
  style?: StyleProp<TextStyle>;
  onTextChange?: (text: string) => void;
  isError?: boolean;
  error?: string;
  selectedDirection:string
}
