import {useCallback, useEffect, useState} from 'react';
import {AxiosResponse} from 'axios';

// services
import api from '../../services/api';

//  types
import {Pokemon} from '../../types/types';

interface ReturnType {
  pokeList: Pokemon[];
  onListEnd: () => void;
}

export function useSearchScreen(): ReturnType {
  const [pokeList, setPokeList] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(20);

  const onPokeListRequest = useCallback(async () => {
    const pokemons: AxiosResponse<{results: Pokemon[]}> = await api.get(
      `pokemon?offset=${offset}`,
    );

    setPokeList(prev => [...prev, ...pokemons?.data?.results]);
  }, [offset]);

  const onListEnd = useCallback(() => setOffset(prev => prev + 20), []);

  useEffect(() => {
    (async () => {
      const pokemons: AxiosResponse<{results: Pokemon[]}> = await api.get(
        'pokemon?offset=20',
      );

      setPokeList(prev => [...prev, ...pokemons?.data?.results]);
    })();
  }, []);

  useEffect(() => {
    onPokeListRequest();
  }, [onPokeListRequest]);

  return {
    onListEnd,
    pokeList,
  };
}
