import {useEffect, useRef, useState} from 'react';
import {useLocalStorage} from '../../hooks/useLocalStorage';
import {Pokemon} from '../../types/types';

interface ReturnType {
  list: Pokemon[];
}

export function useFavoriteScreen(): ReturnType {
  const [list, setList] = useState<Pokemon[]>([]);

  const {onListRetrieve} = useLocalStorage();

  const isMounted = useRef<boolean | null>(null);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const newList = await onListRetrieve();
        isMounted.current && setList(newList);
      } catch {
        // failed to retrieve list
      }
    })();
  }, [onListRetrieve]);

  return {
    list,
  };
}
