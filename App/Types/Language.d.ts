type Language ={
    id: string ;
    name: string ;
    direction: string;
  }
  
  type LanguageData ={
    [key: string]: Language;
  }

  type DynamicDictionary = {
    [key: string]: string;
  };