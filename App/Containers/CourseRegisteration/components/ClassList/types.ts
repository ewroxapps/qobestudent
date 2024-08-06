export interface classListProps{
    selected: boolean | null;


    courseID:number
    
    data:Classroom
    toggleRadioValue: () => void

    selectedRadioButtons:MyClassroom[]
    setSelectedRadioButtons:  React.Dispatch<React.SetStateAction<MyClassroom[]>>

    checkpoint:number | null

    singlePick:boolean
}