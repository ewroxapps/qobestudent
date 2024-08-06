export interface amyprops{
    data:IActivities
    instructorProfile:String | undefined
    teacherName:String | undefined
    course: String | undefined
    name: String | undefined
    date:string
    activityname:string
    selectedCourse: ICourse | undefined
    refetch:() => void;
}