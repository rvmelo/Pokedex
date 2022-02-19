import {useCallback, useEffect, useRef, useState} from 'react';
import {AxiosResponse} from 'axios';

// constants
import {species_url} from '../../constants/api';

//  services
import api from '../../services/api';

interface APIResponse {
  flavor_text_entries: {
    flavor_text: string;
  }[];
}

interface PokemonProps {
  id: number;
}

interface ReturnType {
  phrase: string;
}

export function useBoard({id}: PokemonProps): ReturnType {
  const [phrase, setPhrase] = useState('');

  const isMounted = useRef<boolean | null>(null);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onPokemonSpeciesRequest = useCallback(async () => {
    try {
      const response: AxiosResponse<APIResponse> = await api.get(
        `${species_url}/${id}`,
      );

      const {flavor_text_entries} = response?.data || {};

      isMounted.current && setPhrase(flavor_text_entries[0]?.flavor_text);
    } catch {
      // failed to retrieve pokemon flavor text
    }
  }, [id]);

  useEffect(() => {
    onPokemonSpeciesRequest();
  }, [onPokemonSpeciesRequest]);

  return {
    phrase,
  };
}
