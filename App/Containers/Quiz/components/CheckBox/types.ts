export interface checkboxProps {
  selectedCheckboxes: { [label: string]: boolean }
  handleCheckboxChange: (index: string) => void
  data:IQuizDetailsResponse
  pageCount:number
  }
  