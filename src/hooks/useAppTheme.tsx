import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {DefaultTheme} from 'styled-components';

import light from '../global/styles/themes/light';
import dark from '../global/styles/themes/dark';

interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const AppThemeProvider: React.FC = ({children}) => {
  const [theme, setTheme] = useState<DefaultTheme>(light);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsDarkTheme(prev => !prev);
  }, []);

  const onThemeRetrieval = useCallback(async () => {
    try {
      const storedIsDarkTheme = await AsyncStorage.getItem('@pokedex:theme');
      const parsedIsDarkTheme = storedIsDarkTheme
        ? JSON.parse(storedIsDarkTheme)
        : false;

      setIsDarkTheme(parsedIsDarkTheme);
    } catch {
      // failed to retrieve theme
    }
  }, []);

  const onThemeSetting = useCallback(async () => {
    try {
      await AsyncStorage.setItem('@pokedex:theme', JSON.stringify(isDarkTheme));
      setTheme(isDarkTheme ? dark : light);
    } catch {
      // failed to set theme
    }
  }, [isDarkTheme]);

  useEffect(() => {
    onThemeRetrieval();
  }, [onThemeRetrieval]);

  useEffect(() => {
    onThemeSetting();
  }, [onThemeSetting]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme, isDarkTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

function useAppTheme(): ThemeContextData {
  const context = useContext(ThemeContext);
  return context;
}
export {AppThemeProvider, useAppTheme};
