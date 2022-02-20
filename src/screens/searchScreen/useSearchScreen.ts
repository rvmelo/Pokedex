import {useCallback, useEffect, useRef, useState} from 'react';
import {AxiosResponse} from 'axios';

// services
import api from '../../services/api';

//  types
import {Pokemon} from '../../types/types';
import {base_url} from '../../constants/api';

interface ReturnType {
  pokeList: Pokemon[];
  searchList: Pokemon[];
  onListEnd: () => void;
  onPokemonSearch: () => Promise<void>;
  onSearchReset: () => void;
  setSearchInput: (searchInput: string) => void;
  isSearch: boolean;
}

export function useSearchScreen(): ReturnType {
  const [pokeList, setPokeList] = useState<Pokemon[]>([]);
  const [searchList, setSearchList] = useState<Pokemon[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [offset, setOffset] = useState(0);

  const isMounted = useRef<boolean | null>(null);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onPokemonSearch = useCallback(async () => {
    try {
      isMounted.current && setIsSearch(true);

      const response: AxiosResponse<{name: string}> = await api.get(
        `pokemon/${searchInput.toLowerCase()}`,
      );

      const {name} = response?.data || {};

      const searchUrl = `${base_url}pokemon/${name}`;

      const foundPokemon = {name, url: searchUrl};

      if (!name) {
        throw new Error();
      }

      isMounted.current && setSearchList([foundPokemon]);
    } catch {
      // failed to search pokemon
      isMounted.current && setSearchList([]);
    }
  }, [searchInput]);

  const onPokeListRequest = useCallback(async () => {
    try {
      const pokemons: AxiosResponse<{results: Pokemon[]}> = await api.get(
        `pokemon?offset=${offset}`,
      );

      isMounted.current &&
        setPokeList(prev => [...prev, ...pokemons?.data?.results]);
    } catch {
      // failed to load list
    }
  }, [offset]);

  useEffect(() => {
    onPokeListRequest();
  }, [onPokeListRequest]);

  const onSearchReset = useCallback(async () => {
    isMounted.current && setSearchInput('');
    isMounted.current && setSearchList([]);
    isMounted.current && setIsSearch(false);
  }, []);

  const onListEnd = useCallback(() => {
    if (searchInput) {
      return;
    }
    isMounted.current && setOffset(prev => prev + 20);
  }, [searchInput]);

  return {
    onListEnd,
    pokeList,
    searchList,
    onPokemonSearch,
    onSearchReset,
    setSearchInput,
    isSearch,
  };
}
