export interface AlertProps {
   label:string
   backgroundColor:string
   alertCount:number
   alertData:any
   refetch:() => void;
   isFetching:boolean
  }
  