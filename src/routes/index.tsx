import React from 'react';

import {ThemeProvider} from 'styled-components';
import SearchScreen from '../screens/searchScreen/container';
import {useAppTheme} from '../hooks/useAppTheme';

const Routes: React.FC = () => {
  const {theme} = useAppTheme();

  return (
    <ThemeProvider theme={theme}>
      <SearchScreen />
    </ThemeProvider>
  );
};

export default Routes;
