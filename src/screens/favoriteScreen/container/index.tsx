import React from 'react';
import {Heart} from '../../../assets/svg/heart';
import {Header} from '../../../components/header';

import {Container, ScreenTitle, TitleContainer} from './styles';

const FavoriteScreen: React.FC = () => {
  return (
    <Container>
      <Header />
      <TitleContainer>
        <Heart width={21} height={18} />
        <ScreenTitle>Meus Favoritos</ScreenTitle>
      </TitleContainer>
    </Container>
  );
};

export default FavoriteScreen;
