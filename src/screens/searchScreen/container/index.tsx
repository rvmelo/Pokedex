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
import {ListFooterComponent} from './listFooterComponent';
import {EmptyComponent} from './emptyComponent';

const SearchScreen: React.FC = () => {
  const {
    pokeList,
    searchList,
    onListEnd,
    setSearchInput,
    onPokemonSearch,
    onSearchReset,
    isSearch,
  } = useSearchScreen();

  return (
    <Container>
      <Header />
      <SearchContainer>
        <SearchInput
          setSearchInput={setSearchInput}
          onPokemonSearch={onPokemonSearch}
          onSearchReset={onSearchReset}
          isSearch={isSearch}
        />
        <IconButton />
      </SearchContainer>
      <PokeList
        list={isSearch ? searchList : pokeList}
        onListEnd={isSearch ? () => undefined : onListEnd}
        footerComponent={!isSearch ? ListFooterComponent : undefined}
        emptyComponent={EmptyComponent}
      />
    </Container>
  );
};

export default SearchScreen;
