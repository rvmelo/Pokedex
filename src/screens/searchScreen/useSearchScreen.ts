import {useCallback, useEffect, useRef, useState} from 'react';
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

  const isMounted = useRef<boolean | null>(null);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onPokeListRequest = useCallback(async () => {
    const pokemons: AxiosResponse<{results: Pokemon[]}> = await api.get(
      `pokemon?offset=${offset}`,
    );

    isMounted.current &&
      setPokeList(prev => [...prev, ...pokemons?.data?.results]);
  }, [offset]);

  const onListEnd = useCallback(
    () => isMounted.current && setOffset(prev => prev + 20),
    [],
  );

  useEffect(() => {
    (async () => {
      const pokemons: AxiosResponse<{results: Pokemon[]}> = await api.get(
        'pokemon?offset=0',
      );

      isMounted.current &&
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
