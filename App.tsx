import React from 'react';
import {StatusBar} from 'react-native';

import {AppThemeProvider} from './src/hooks/useAppTheme';
import Routes from './src/routes';

export default function App() {
  return (
    <AppThemeProvider>
      <StatusBar barStyle="light-content" />
      <Routes />
    </AppThemeProvider>
  );
}
