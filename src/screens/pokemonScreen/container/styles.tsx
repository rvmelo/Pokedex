import styled from 'styled-components/native';
import {PokemonTypes} from '../../../types/types';

interface TypeProps {
  type: PokemonTypes['types'];
}

export const Container = styled.View<TypeProps>`
  flex: 1;
  background: ${({theme, type}) => theme.colors[type]};
  padding: 0 2%;
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

//  board
export const BoardContainer = styled.View`
  border-radius: 15px;
  background: ${({theme}) => theme.colors.background};
  overflow: hidden;
  margin-top: 18.9%;
`;

export const TypesContainer = styled.View`
  flex-direction: row;
  padding-left: 5.2%;
  padding-right: 7.5%;
  margin-top: 15.7%;
`;

export const TypeContainer = styled.View<TypeProps>`
  border-radius: 15px;
  padding: 0 8px;
  background: ${({theme, type}) => theme.colors[type]};
  margin-left: 2.3%;
`;

export const TypeText = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.m}px;
  font-family: ${({theme}) => theme.fonts.family.bold};
  color: ${({theme}) => theme.colors.primary};
`;

export const DataContainer = styled.View`
  flex-direction: row;
  margin-top: 7%;
  justify-content: space-between;
`;

export const AttributesWrapper = styled.View`
  flex-direction: row;
  margin-left: 8%;
`;

export const AttributesItemContainer = styled.View`
  align-items: center;
  margin-right: 7.3%;
`;

export const ItemValueContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemLabelText = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.m}px;
  font-family: ${({theme}) => theme.fonts.family.regular};
  color: #b3b3b3;
`;

export const ItemText = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: ${({theme}) => theme.fonts.sizes.lg}px;
  font-family: ${({theme}) => theme.fonts.family.regular};
  color: ${({theme}) => theme.colors.text};
  padding-top: 1%;
  padding-left: 8px;
`;

export const MovesContainer = styled.View`
  align-items: center;
  flex: 1;
`;

export const PhraseContainer = styled.View`
  margin: 6% 8%;
`;

export const StyledPhrase = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.lg}px;
  font-family: ${({theme}) => theme.fonts.family.regular};
  color: ${({theme}) => theme.colors.text};
  text-align: justify;
`;
