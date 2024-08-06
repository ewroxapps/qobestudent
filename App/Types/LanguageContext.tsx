import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface LanguageContextProps {
  selectedLanguage: string;
  selectedDirection: 'left' | 'right';
  setLanguage: (newLanguage: string, newDirection: 'left' | 'right') => void;
  dynamicDictionary: { [key: string]: string };
  updateDynamicDictionary: (newDictionary: { [key: string]: string }) => void;
  cloName: string;
  cloPName: string;
  courseRegSingleChoice: boolean;
  peoName: string;
  peoPName: string;
  ploName: string;
  ploPName: string;
  setCloName: (newCloName: string) => void;
  setCloPName: (newCloPName: string) => void;
  setCourseRegSingleChoice: (newCourseRegSingleChoice: boolean) => void;
  setPeoName: (newPeoName: string) => void;
  setPeoPName: (newPeoPName: string) => void;
  setPloName: (newPloName: string) => void;  
  setPloPName: (newPloPName: string) => void;
  university: University | undefined; // New property to store the selected university
  setUniversity: (newUniversity: University | undefined) => void; 
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedDirection, setSelectedDirection] = useState<'left' | 'right'>('left');
  const [dynamicDictionary, setDynamicDictionary] = useState<{ [key: string]: string }>({});
  const [university, setUniversity] = useState<University | undefined>();
  const [cloName, setCloName] = useState('');
  const [cloPName, setCloPName] = useState('');
  const [courseRegSingleChoice, setCourseRegSingleChoice] = useState(false);
  const [peoName, setPeoName] = useState('');
  const [peoPName, setPeoPName] = useState('');
  const [ploName, setPloName] = useState('');
  const [ploPName, setPloPName] = useState('');


  useEffect(() => {
    const loadPersistedLanguage = async () => {
      try {
        const storedLanguage = await AsyncStorage.getItem('selectedLanguage');
        const storedDirection = await AsyncStorage.getItem('selectedDirection');
        const storedDynamicDictionary = await AsyncStorage.getItem('dynamicDictionary');
        const storedcourseRegSingleChoice = await AsyncStorage.getItem('courseRegSingleChoice');
        const storedUniversity = await AsyncStorage.getItem('university');


        const storedCloName = await AsyncStorage.getItem('cloName');
        setCloName(storedCloName || '');

        const storedCloPName = await AsyncStorage.getItem('cloPName');
        setCloPName(storedCloPName || '');

        const storedPloName = await AsyncStorage.getItem('ploName');
        setPloName(storedPloName || '');

        const storedPloPName = await AsyncStorage.getItem('ploPName');
        setPloPName(storedPloPName || '');

        const storedPeoName = await AsyncStorage.getItem('peoName');
        setPeoName(storedPeoName || '');

        const storedPeoPName = await AsyncStorage.getItem('peoPName');
        setPeoPName(storedPeoPName || '');

        if (storedcourseRegSingleChoice !== null) {
          const parsedCourseRegSingleChoice = JSON.parse(storedcourseRegSingleChoice);
          setCourseRegSingleChoice(parsedCourseRegSingleChoice);
        }

        if (storedLanguage && storedDirection) {
          setSelectedLanguage(storedLanguage);
          setSelectedDirection(storedDirection as 'left' | 'right');
        }

        if (storedDynamicDictionary) {
          const parsedDynamicDictionary = JSON.parse(storedDynamicDictionary);
          setDynamicDictionary(parsedDynamicDictionary);
        }

        if (storedUniversity) {
          const parsedUniversity: University = JSON.parse(storedUniversity);
          setUniversity(parsedUniversity);
        }

      } catch (error) {
        console.error('Error loading persisted language:', error);
      }
    };

    loadPersistedLanguage();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const setLanguage = (newLanguage: string, newDirection: 'left' | 'right') => {
    setSelectedLanguage(newLanguage);
    setSelectedDirection(newDirection);

    // Persist the selected language and direction
    AsyncStorage.setItem('selectedLanguage', newLanguage);
    AsyncStorage.setItem('selectedDirection', newDirection);
  };

  const updateDynamicDictionary = (newDictionary: { [key: string]: string }) => {
    if (newDictionary) {
      setDynamicDictionary(newDictionary)
      AsyncStorage.setItem('dynamicDictionary', JSON.stringify(newDictionary))
        .catch(error => console.error('Error storing dynamic dictionary:', error));
    } else {
      console.error('Error storing dynamic dictionary: newDictionary is undefined');
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        selectedLanguage,
        selectedDirection,
        setLanguage,
        dynamicDictionary,
        updateDynamicDictionary,
        cloName,
        cloPName,
        peoName,
        peoPName,
        ploName,
        ploPName,
        courseRegSingleChoice,
        setCloName,
        setCloPName,
        setCourseRegSingleChoice,
        setPeoName,
        setPeoPName,
        setPloName,
        setPloPName,
        university,
        setUniversity,
      }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
