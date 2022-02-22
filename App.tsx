import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from 'react-native-splash-screen';

import {AppThemeProvider} from './src/hooks/useAppTheme';
import Routes from './src/routes';

//  redux
import store from './src/redux/store';
import {Provider} from 'react-redux';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

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
