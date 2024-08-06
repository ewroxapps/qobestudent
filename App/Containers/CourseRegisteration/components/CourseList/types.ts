export interface courseListProps{
    data:Course
    selectedCheckboxes: number | null;

    registerationId:number

    
    reg:MyCourseRegistration[]
    setReg:React.Dispatch<React.SetStateAction<MyCourseRegistration[]>>

    unReg:MyCourseRegistration[]
    setUnReg:React.Dispatch<React.SetStateAction<MyCourseRegistration[]>>

    handleCheckboxChange: (index: number,course:Course) => void
    
    check:Course[]
    setCheck:React.Dispatch<React.SetStateAction<Course[]>>

    uncheck:Course[]
    setUnCheck:React.Dispatch<React.SetStateAction<Course[]>>
    
    selectedRadioButtons:MyClassroom[]
    setSelectedRadioButtons: React.Dispatch<React.SetStateAction<MyClassroom[]>>

    singlePick:boolean
   
}