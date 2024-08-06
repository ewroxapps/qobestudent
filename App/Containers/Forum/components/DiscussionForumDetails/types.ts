export interface DetailsModalProps {
    posted_by:String,
    posted_when:String,
    id:number,
    posted_dp:String,
    allow_update:Boolean,
    allow_comment:string,
    title:String,
    detail:String,
    img:String,
    comments:number,
    classID:number,
    courseName:String,
    click:Boolean
    setClick: (value: boolean) => void;
   }
   