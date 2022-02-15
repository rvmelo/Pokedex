import React from 'react';

import {ThemeProvider} from 'styled-components';
import {useAppTheme} from '../hooks/useAppTheme';

import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const {theme} = useAppTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default Routes;
