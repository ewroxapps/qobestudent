export interface SlosProps {
    data:ICLOs
    previousdata:ICLOs
    index:number
 
    clicked?: boolean;
    setClicked: (visible: boolean) => void;
 
    clickedBack?: boolean;
    setClickedBack: (visible: boolean) => void;
 
    header:string
    setHeader: (visible: string) => void;
    
    }