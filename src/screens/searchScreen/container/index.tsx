import React from 'react';

//  components
import {Header} from '../../../components/header';
import {IconButton} from './iconButton';
import {SearchInput} from './searchInput';

//  styles
import {Container, SearchContainer} from './styles';

const SearchScreen: React.FC = () => {
  return (
    <Container>
      <Header />
      <SearchContainer>
        <SearchInput />
        <IconButton />
      </SearchContainer>
    </Container>
  );
};

export default SearchScreen;
