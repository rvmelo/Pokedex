import React from 'react';

//  styles
import {InputLabel, InputWrapper, StyledInput} from './styles';

//  svg
import {MagnifyingGlass} from '../../../assets/svg/magnifyingGlass';

export const SearchInput: React.FC = () => {
  return (
    <InputWrapper>
      <InputLabel>Buscar</InputLabel>
      <StyledInput />
      <MagnifyingGlass width={17} height={17} />
    </InputWrapper>
  );
};
