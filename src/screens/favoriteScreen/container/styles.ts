import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
`;

export const TitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 84px;
`;

export const ScreenTitle = styled.Text`
  font-size: 18px;
  font-family: ${({theme}) => theme.fonts.family.regular};
  color: ${({theme}) => theme.colors.secondary};
  padding-left: 12px;
`;
