export interface facultyProps{
    data:Registration
    courses:Course[]
    
    check:Course[]
    setCheck:React.Dispatch<React.SetStateAction<Course[]>>

    uncheck:Course[]
    setUnCheck:React.Dispatch<React.SetStateAction<Course[]>>

    reg:MyCourseRegistration[]
    setReg:React.Dispatch<React.SetStateAction<MyCourseRegistration[]>>

    unReg:MyCourseRegistration[]
    setUnReg:React.Dispatch<React.SetStateAction<MyCourseRegistration[]>>

    selectedRadioButtons:MyClassroom[]
    setSelectedRadioButtons: React.Dispatch<React.SetStateAction<MyClassroom[]>>

    filteredData: Record<string, Record<string, Course[]>>
}