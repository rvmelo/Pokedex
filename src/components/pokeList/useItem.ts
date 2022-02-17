import {useCallback, useEffect, useRef, useState} from 'react';

import {AxiosResponse} from 'axios';

//  services
import api from '../../services/api';

export interface PokemonTypes {
  types:
    | 'rock'
    | 'ghost'
    | 'steel'
    | 'water'
    | 'grass'
    | 'psychic'
    | 'ice'
    | 'dark'
    | 'fairy'
    | 'normal'
    | 'fighting'
    | 'flying'
    | 'poison'
    | 'ground'
    | 'bug'
    | 'fire'
    | 'electric'
    | 'dragon';
}

interface HookProps {
  url: string;
}

interface ItemData {
  id: number;
  type: PokemonTypes['types'];
}

interface PokemonType {
  name: PokemonTypes['types'];
  url: string;
}

interface ResponseData {
  id: number;
  types: {
    type: PokemonType;
  }[];
}

interface ReturnType {
  itemData: ItemData;
}

export function useItem({url}: HookProps): ReturnType {
  const [itemData, setItemData] = useState<ItemData>({} as ItemData);

  const isMounted = useRef<boolean | null>(null);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onPokemonDataRequest = useCallback(async () => {
    try {
      const response: AxiosResponse<ResponseData> = await api.get(url);

      const {id, types} = response.data || {};

      isMounted.current && setItemData({id, type: types[0]?.type?.name});
    } catch {
      // request failed
    }
  }, [url]);

  useEffect(() => {
    onPokemonDataRequest();
  }, [onPokemonDataRequest]);

  return {
    itemData,
  };
}
