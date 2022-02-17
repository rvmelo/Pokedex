import React from 'react';

//  hooks
import {useSearchScreen} from '../useSearchScreen';

//  components
import {Header} from '../../../components/header';
import {PokeList} from '../../../components/pokeList';
import {IconButton} from './iconButton';
import {SearchInput} from './searchInput';

//  styles
import {Container, SearchContainer} from './styles';

const SearchScreen: React.FC = () => {
  const {pokeList, onListEnd} = useSearchScreen();

  return (
    <Container>
      <Header />
      <SearchContainer>
        <SearchInput />
        <IconButton />
      </SearchContainer>
      <PokeList list={pokeList} onListEnd={onListEnd} />
    </Container>
  );
};

export default SearchScreen;
