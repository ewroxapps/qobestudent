export interface ActivityActionButtonProps {
  label: string;
  icon?: () => JSX.Element;
  color: string;
  onPress: () => void;
  disabled?: boolean;
}
