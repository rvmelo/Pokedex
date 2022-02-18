import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppThemeProvider} from './src/hooks/useAppTheme';
import Routes from './src/routes';

//  redux
import store from './src/redux/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppThemeProvider>
          <Routes />
        </AppThemeProvider>
      </NavigationContainer>
    </Provider>
  );
}
