export interface CustomRadioButtonProps {
    label: string; // Specify the type as string
    selected: boolean;
    onSelect: (label: string) => void; // A function that accepts a string label
    disabled :boolean
  }