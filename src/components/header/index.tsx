import React from 'react';

import {ThemeSwitch} from './themeSwitch';

import {Logo} from '../../assets/svg/logo';

import {HeaderContainer, HeaderText} from './styles';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo width={27} height={21} />
      <HeaderText>ioasys pokédex</HeaderText>
      <ThemeSwitch />
    </HeaderContainer>
  );
};
