import styled from 'styled-components/native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../constants/dimensions';
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
  padding-left: 8%;
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
  margin-top: ${0.1 * SCREEN_HEIGHT}px;
  margin-bottom: 50px;
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

export const StyledPhrase = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: ${({theme}) => theme.fonts.sizes.lg}px;
  font-family: ${({theme}) => theme.fonts.family.regular};
  color: ${({theme}) => theme.colors.text};
  text-align: justify;
`;

//  stats

export const StatsContainer = styled.View`
  margin: 0 8%;
`;

export const StatsTitle = styled.Text<TypeProps>`
  font-size: 18px;
  font-family: ${({theme}) => theme.fonts.family.bold};
  color: ${({theme, type}) => theme.colors[type]};
`;

export const StatsText = styled.Text<TypeProps>`
  font-size: ${({theme}) => theme.fonts.sizes.lg}px;
  font-family: ${({theme}) => theme.fonts.family.regular};
  color: ${({theme, type}) => theme.colors[type]};
`;

export const StatsWrapper = styled.View`
  margin-top: 4.8%;
  margin-bottom: 17%;
`;

export const StatItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StatsLabelWrapper = styled.View`
  width: 15%;
  border-right-width: 1px;
  border-color: ${({theme}) => theme.colors.lightGray};
`;

export const StatsValueText = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.m}px;
  font-family: ${({theme}) => theme.fonts.family.regular};
  color: ${({theme}) => theme.colors.text};
  padding: 0 3.4%;
`;

export const StatsBar = styled.View<TypeProps>`
  height: 6px;
  width: ${SCREEN_WIDTH * 0.6}px;
  background: ${({theme, type}) => theme.colors[type]};
  opacity: 0.2;
`;

interface BarIndicatorProps extends TypeProps {
  multiplyFactor: number;
}

export const StatsBarIndicator = styled.View<BarIndicatorProps>`
  height: 6px;
  width: ${SCREEN_WIDTH * 0.6}px;
  background: ${({theme, type}) => theme.colors[type]};
  width: ${({multiplyFactor}) => multiplyFactor * (SCREEN_WIDTH * 0.6)}px;
`;

export const PokemonImageWrapper = styled.View`
  position: absolute;
  top: ${0.15 * SCREEN_WIDTH}px;
  left: ${0.35 * SCREEN_WIDTH}px;
`;

export const PokeballWrapper = styled.View`
  position: absolute;
  top: ${0.03 * SCREEN_WIDTH}px;
  left: ${0.45 * SCREEN_WIDTH}px;
`;

export const HeartIconContainer = styled.View`
  position: absolute;
  right: 3.15%;
  top: 3.15%;
`;

export const FavoriteIconButton = styled.TouchableWithoutFeedback``;
