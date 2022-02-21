import React from 'react';
import {Heart} from '../../../assets/svg/heart';
import {Header} from '../../../components/header';
import {PokeList} from '../../../components/pokeList';
import {useFavoriteScreen} from '../useFavoriteScreen';
import {FooterComponent} from './footerComponent';

import {Container, ScreenTitle, TitleContainer} from './styles';

const FavoriteScreen: React.FC = () => {
  const {list} = useFavoriteScreen();
  return (
    <Container>
      <Header />
      <TitleContainer>
        <Heart width={21} height={18} />
        <ScreenTitle>Meus Favoritos</ScreenTitle>
      </TitleContainer>
      <PokeList list={list} />
      <FooterComponent />
    </Container>
  );
};

export default FavoriteScreen;
