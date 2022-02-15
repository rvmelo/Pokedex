import styled from 'styled-components/native';

export const SwitchWrapper = styled.View`
  border-width: 1px;
  border-radius: 40px;
  border-color: ${({theme}) => theme.colors.secondary};
  width: 39px;
  height: 27px;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  padding: 50px 32px 0 48px;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.xl}px;
  font-family: ${({theme}) => theme.fonts.family.bold};
  color: ${({theme}) => theme.colors.secondary};
  margin-left: 3%;
  margin-right: 18%;
`;
