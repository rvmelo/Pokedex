import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

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

  useEffect(() => {
    setTheme(isDarkTheme ? dark : light);
  }, [isDarkTheme]);

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
