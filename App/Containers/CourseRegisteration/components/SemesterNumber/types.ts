export interface semesterProps{
    semester:string
    registerationId:number
    
    reg:MyCourseRegistration[]
    setReg:React.Dispatch<React.SetStateAction<MyCourseRegistration[]>>
    
    courseId:Course
    
    check:Course[]
    setCheck:React.Dispatch<React.SetStateAction<Course[]>>

    uncheck:Course[]
    setUnCheck:React.Dispatch<React.SetStateAction<Course[]>>

    unReg:MyCourseRegistration[]
    setUnReg:React.Dispatch<React.SetStateAction<MyCourseRegistration[]>>
    
    selectedRadioButtons:MyClassroom[]
    setSelectedRadioButtons: React.Dispatch<React.SetStateAction<MyClassroom[]>>

    singlePick:boolean

}