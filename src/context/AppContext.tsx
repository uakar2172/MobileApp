import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Theme, Language, AppSettings } from '../types';

interface AppContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  setLanguage: (language: Language) => void;
  getTranslation: (key: string) => string;
}

const defaultTheme: Theme = {
  isDark: false,
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    background: '#FFFFFF',
    surface: '#F2F2F7',
    text: '#000000',
    textSecondary: '#8E8E93',
    border: '#C6C6C8',
  },
};

const darkTheme: Theme = {
  isDark: true,
  colors: {
    primary: '#0A84FF',
    secondary: '#5E5CE6',
    background: '#000000',
    surface: '#1C1C1E',
    text: '#FFFFFF',
    textSecondary: '#8E8E93',
    border: '#38383A',
  },
};

const defaultLanguage: Language = {
  code: 'tr',
  name: 'Türkçe',
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [language, setLanguageState] = useState<Language>(defaultLanguage);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const settingsJson = await AsyncStorage.getItem('appSettings');
      if (settingsJson) {
        const settings: AppSettings = JSON.parse(settingsJson);
        setTheme(settings.theme);
        setLanguageState(settings.language);
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  };

  const saveSettings = async (newTheme: Theme, newLanguage: Language) => {
    try {
      const settings: AppSettings = {
        theme: newTheme,
        language: newLanguage,
      };
      await AsyncStorage.setItem('appSettings', JSON.stringify(settings));
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme.isDark ? defaultTheme : darkTheme;
    setTheme(newTheme);
    saveSettings(newTheme, language);
  };

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    saveSettings(theme, newLanguage);
  };

  const getTranslation = (key: string): string => {
    const { translations } = require('../utils/translations');
    return translations[language.code][key] || key;
  };

  const value: AppContextType = {
    theme,
    language,
    toggleTheme,
    setLanguage,
    getTranslation,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
