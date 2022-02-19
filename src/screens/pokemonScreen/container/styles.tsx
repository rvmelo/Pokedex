import styled from 'styled-components/native';
import {PokemonTypes} from '../../../types/types';

interface TypeProps {
  type: PokemonTypes['types'];
}

export const Container = styled.View<TypeProps>`
  flex: 1;
  background: ${({theme, type}) => theme.colors[type]};
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 9.3%;
  margin-top: 16px;
`;

export const HeaderLeftContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.xl}px;
  font-family: ${({theme}) => theme.fonts.family.bold};
  color: ${({theme}) => theme.colors.primary};
  padding-left: 4.5%;
  margin-top: 2px;
`;

export const IdText = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.m}px;
  font-family: ${({theme}) => theme.fonts.family.bold};
  color: ${({theme}) => theme.colors.primary};
`;
