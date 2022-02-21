import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCallback} from 'react';

interface FavoriteProps {
  id: number;
  name: string;
}

interface ReturnType {
  onAddToLocalStorage: (value: FavoriteProps) => Promise<void>;
  onRemoveFromLocalStorage: (value: FavoriteProps) => Promise<void>;
  onFindFromLocalStorage: (
    value: FavoriteProps,
  ) => Promise<FavoriteProps | undefined>;
}

export function useLocalStorage(): ReturnType {
  const onAddToLocalStorage = useCallback(async ({id, name}: FavoriteProps) => {
    const data = await AsyncStorage.getItem('@pokedex:list');

    const parsedList = data ? JSON.parse(data) : [];

    parsedList.push({id, name});

    await AsyncStorage.setItem('@pokedex:list', JSON.stringify(parsedList));
  }, []);

  const onRemoveFromLocalStorage = useCallback(async ({id}: FavoriteProps) => {
    const data = await AsyncStorage.getItem('@pokedex:list');

    const parsedList: FavoriteProps[] = data ? JSON.parse(data) : [];

    const newList = parsedList.filter(element => element.id !== id);

    await AsyncStorage.setItem('@pokedex:list', JSON.stringify(newList));
  }, []);

  const onFindFromLocalStorage = useCallback(
    async ({id}: FavoriteProps): Promise<FavoriteProps | undefined> => {
      const data = await AsyncStorage.getItem('@pokedex:list');

      const parsedList: FavoriteProps[] = data ? JSON.parse(data) : [];

      const isFound = parsedList.find(element => element.id === id);

      return isFound;
    },
    [],
  );

  return {
    onAddToLocalStorage,
    onRemoveFromLocalStorage,
    onFindFromLocalStorage,
  };
}
