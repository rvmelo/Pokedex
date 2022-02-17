import styled from 'styled-components/native';
import {SCREEN_WIDTH} from '../../constants/dimensions';
import {PokemonTypes} from './useItem';

interface TypeProps {
  type: PokemonTypes['types'];
}

export const ItemContainer = styled.View<TypeProps>`
  width: ${0.24 * SCREEN_WIDTH}px;
  height: ${1.08 * (0.24 * SCREEN_WIDTH)}px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({theme, type}) => theme.colors[type]};
  overflow: hidden;
  margin: 0 9px;
  margin-bottom: 22px;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ItemLabel = styled.View<TypeProps>`
  height: ${0.21 * 1.08 * (0.24 * SCREEN_WIDTH)}px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({theme, type}) => theme.colors[type]};
`;

export const ItemText = styled.Text`
  font-family: ${({theme}) => theme.fonts.family.regular};
  font-size: ${({theme}) => theme.fonts.sizes.sm}px;
  color: ${({theme}) => theme.colors.primary};
`;

export const IdText = styled.Text<TypeProps>`
  font-size: ${({theme}) => theme.fonts.sizes.xs}px;
  font-family: ${({theme}) => theme.fonts.family.regular};
  color: ${({theme, type}) => (type ? theme.colors[type] : '#000')};
  margin-top: 3.6%;
  margin-right: 7.7%;
`;
