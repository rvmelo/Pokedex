import styled from 'styled-components/native';
import {SCREEN_WIDTH} from '../../constants/dimensions';

export const ItemContainer = styled.View`
  width: ${0.24 * SCREEN_WIDTH}px;
  height: ${1.08 * (0.24 * SCREEN_WIDTH)}px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.secondary};
  overflow: hidden;
  margin: 0 9px;
  margin-bottom: 22px;
  justify-content: flex-end;
`;

export const ItemPhoto = styled.Image.attrs(({source}) => {
  source;
})`
  width: 100%;
  height: 100%;
`;

export const ItemLabel = styled.View`
  height: ${0.21 * 1.08 * (0.24 * SCREEN_WIDTH)}px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.secondary};
`;

export const ItemText = styled.Text`
  font-family: ${({theme}) => theme.fonts.family.regular};
  font-size: ${({theme}) => theme.fonts.sizes.sm}px;
  color: ${({theme}) => theme.colors.primary};
`;
