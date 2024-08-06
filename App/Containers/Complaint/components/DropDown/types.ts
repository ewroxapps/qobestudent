export interface DropDownProps {
    containerName:string,
    
    height:number | null
    options:IGetComplaint[]

    value?: IGetComplaint;
    setValue: (value: IGetComplaint) => void;

    error?: Boolean ;
    setError: (value: boolean) => void;
   }
   