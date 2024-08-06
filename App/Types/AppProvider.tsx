import React, { ReactNode, createContext, useContext, useState } from 'react';

type AppData = {
  cloName: string;
  cloPName: string;
  courseRegSingleChoice: boolean;
  // Add other properties with their types here
};

interface AppContextProps {
  appData: AppData;
  setAppDataProperty: (property: keyof AppData, value: any) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [appData, setAppData] = useState<AppData>({
    cloName: '',
    cloPName: '',
    courseRegSingleChoice: false,
    // Add other default values
  });

  const setAppDataProperty = (property: keyof AppData, value: any) => {
    setAppData((prevData) => ({
      ...prevData,
      [property]: value,
    }));
  };

  return (
    <AppContext.Provider value={{ appData, setAppDataProperty }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
