import React from 'react';
import {Switch} from 'react-native';
import {useTheme} from 'styled-components';

import {useAppTheme} from '../hooks/useAppTheme';

//  styles
import {SwitchWrapper} from './styles';

export const ThemeSwitch: React.FC = () => {
  const {isDarkTheme, toggleTheme} = useAppTheme();

  const theme = useTheme();

  return (
    <SwitchWrapper>
      <Switch
        trackColor={{false: 'transparent', true: 'transparent'}}
        thumbColor={isDarkTheme ? theme.colors.secondary : '#8D8B92'}
        onValueChange={toggleTheme}
        value={isDarkTheme}
        style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
      />
    </SwitchWrapper>
  );
};
