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
  margin-top: 9%;
`;

export const ScreenTitle = styled.Text`
  font-size: 18px;
  font-family: ${({theme}) => theme.fonts.family.regular};
  color: ${({theme}) => theme.colors.secondary};
  padding-left: 12px;
`;

export const FooterContainer = styled.View`
  width: 100%;
  align-items: center;
  padding-bottom: 10%;
`;

export const FooterButton = styled.TouchableWithoutFeedback``;

export const FooterButtonContainer = styled.View`
  align-items: center;
`;

export const FooterText = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.m}px;
  font-family: ${({theme}) => theme.fonts.family.regular};
  color: #b3b3b3;
`;
