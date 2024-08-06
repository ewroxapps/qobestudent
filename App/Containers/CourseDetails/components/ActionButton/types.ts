export interface ActionButtonProps {
  color: string;
  label: string;
  icon: () => JSX.Element;
  textColor: string;
  onPress: () => void;
}
