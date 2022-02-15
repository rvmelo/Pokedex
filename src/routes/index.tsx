import React from 'react';
import {StatusBar} from 'react-native';

import {ThemeProvider} from 'styled-components';
import {useAppTheme} from '../hooks/useAppTheme';

import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const {theme} = useAppTheme();

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.secondary}
      />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default Routes;
