import {useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Pokemon} from '../types/types';

interface ReturnType {
  onAddToLocalStorage: (value: Pokemon) => Promise<void>;
  onRemoveFromLocalStorage: (value: {name: string}) => Promise<void>;
  onFindFromLocalStorage: (value: {
    name: string;
  }) => Promise<string | undefined>;
  onListRetrieve: () => Promise<Pokemon[]>;
}

export function useLocalStorage(): ReturnType {
  const onAddToLocalStorage = useCallback(async ({url, name}: Pokemon) => {
    const data = await AsyncStorage.getItem('@pokedex:list');

    const parsedList = data ? JSON.parse(data) : [];

    if (parsedList.length >= 12) {
      return;
    }

    parsedList.push({name, url});

    await AsyncStorage.setItem('@pokedex:list', JSON.stringify(parsedList));
  }, []);

  const onRemoveFromLocalStorage = useCallback(
    async ({name}: {name: string}) => {
      const data = await AsyncStorage.getItem('@pokedex:list');

      const parsedList: Pokemon[] = data ? JSON.parse(data) : [];

      const newList = parsedList.filter(element => element.name !== name);

      await AsyncStorage.setItem('@pokedex:list', JSON.stringify(newList));
    },
    [],
  );

  const onFindFromLocalStorage = useCallback(
    async ({name}: {name: string}): Promise<string | undefined> => {
      const data = await AsyncStorage.getItem('@pokedex:list');

      const parsedList: Pokemon[] = data ? JSON.parse(data) : [];

      const isFound = parsedList.find(element => element.name === name);

      return isFound?.name;
    },
    [],
  );

  const onListRetrieve = useCallback(async () => {
    const data = await AsyncStorage.getItem('@pokedex:list');

    const parsedList: Pokemon[] = data ? JSON.parse(data) : [];

    return parsedList;
  }, []);

  return {
    onAddToLocalStorage,
    onRemoveFromLocalStorage,
    onFindFromLocalStorage,
    onListRetrieve,
  };
}
