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
  const {
    pokeList,
    onListEnd,
    setSearchInput,
    onPokemonSearch,
    onSearchReset,
    isSearchCompleted,
  } = useSearchScreen();

  return (
    <Container>
      <Header />
      <SearchContainer>
        <SearchInput
          setSearchInput={setSearchInput}
          onPokemonSearch={onPokemonSearch}
          onSearchReset={onSearchReset}
          isSearchCompleted={isSearchCompleted}
        />
        <IconButton />
      </SearchContainer>
      <PokeList list={pokeList} onListEnd={onListEnd} />
    </Container>
  );
};

export default SearchScreen;
