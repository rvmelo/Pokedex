import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.background};
`;

export const SwitchWrapper = styled.View`
  border-width: 1px;
  border-radius: 40px;
  border-color: ${({theme}) => theme.colors.secondary};
`;
