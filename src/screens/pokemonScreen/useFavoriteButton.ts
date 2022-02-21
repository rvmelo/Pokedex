import {useCallback, useEffect, useRef, useState} from 'react';
import {useLocalStorage} from '../../hooks/useLocalStorage';

interface FavoriteProps {
  id: number;
  name: string;
}

interface ReturnType {
  onAddFavorite: () => Promise<void>;
  onRemoveFavorite: () => Promise<void>;
  isFavorite: boolean;
}

export function useFavoriteButton({id, name}: FavoriteProps): ReturnType {
  const {
    onAddToLocalStorage,
    onRemoveFromLocalStorage,
    onFindFromLocalStorage,
  } = useLocalStorage();

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const isFound = await onFindFromLocalStorage({id, name});

        setIsFavorite(!!isFound);
      } catch {
        // failed to find from local storage
      }
    })();
  }, [id, name, onFindFromLocalStorage]);

  const isMounted = useRef<boolean | null>(null);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onAddFavorite = useCallback(async () => {
    try {
      await onAddToLocalStorage({id, name});
      isMounted.current && setIsFavorite(true);
    } catch {
      // failed to add to async storage
    }
  }, [onAddToLocalStorage, id, name]);

  const onRemoveFavorite = useCallback(async () => {
    try {
      await onRemoveFromLocalStorage({id, name});
      isMounted.current && setIsFavorite(false);
    } catch {
      // failed to remove from local storage
    }
  }, [onRemoveFromLocalStorage, id, name]);

  return {
    onAddFavorite,
    onRemoveFavorite,
    isFavorite,
  };
}
