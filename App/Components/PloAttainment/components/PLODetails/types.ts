export interface PlosProps {
    data:PlosDetails
    previousdata:PlosDetails
    index:number
    clicked?: boolean;
    setClicked: (visible: boolean) => void;
 
    clickedBack?: boolean;
    setClickedBack: (visible: boolean) => void;
 
    header:string
    setHeader: (visible: string) => void;
    
    }