import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  margin-top: 50px;
  padding: 0 40px;
  align-items: center;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${({theme}) => theme.colors.secondary};
  height: 54px;
  align-items: center;
  justify-content: space-between;
  padding: 0 19px 0 46px;
  max-width: 303px;
  width: 100%;
`;

export const StyledInput = styled.TextInput.attrs(({theme}) => ({
  placeholder: 'Buscar Pokemon',
  placeholderTextColor: theme.colors.mediumGray,
  selectionColor: theme.colors.mediumGray,
}))`
  padding: 0;
  color: ${({theme}) => theme.colors.mediumGray};
`;

export const InputLabel = styled.Text`
  background: ${({theme}) => theme.colors.background};
  color: ${({theme}) => theme.colors.secondary};
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.family.bold};
  position: absolute;
  left: 41px;
  bottom: 38px;
  padding: 0 10px 0 5px;
`;

export const HeartIconContainer = styled.View`
  height: 54px;
  width: 100%;
  justify-content: center;
  padding-left: 5.4%;
`;

export const SVGContainer = styled.View``;

export const ListFooterContainer = styled.View`
  width: 100%;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

//  empty component

export const EmptyContainer = styled.View`
  align-items: center;
`;

export const EmptyTitleText = styled.Text`
  font-size: 148px;
  color: #bdbdbd;
  font-family: ${({theme}) => theme.fonts.family.regular};
`;

export const EmptyText = styled.Text`
  font-size: 22px;
  color: #bdbdbd;
  font-family: ${({theme}) => theme.fonts.family.regular};
`;
