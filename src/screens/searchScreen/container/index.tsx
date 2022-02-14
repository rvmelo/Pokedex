import React from 'react';
import {Switch} from 'react-native';
import {useTheme} from 'styled-components';
import {useAppTheme} from '../../../hooks/useAppTheme';

import {Container, SwitchWrapper} from './styles';

const SearchScreen: React.FC = () => {
  const {isDarkTheme, toggleTheme} = useAppTheme();

  const theme = useTheme();

  return (
    <Container>
      <SwitchWrapper>
        <Switch
          trackColor={{false: 'transparent', true: 'transparent'}}
          thumbColor={isDarkTheme ? theme.colors.secondary : '#8D8B92'}
          onValueChange={toggleTheme}
          value={isDarkTheme}
        />
      </SwitchWrapper>
    </Container>
  );
};

export default SearchScreen;
