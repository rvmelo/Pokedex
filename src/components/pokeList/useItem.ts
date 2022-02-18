import {useCallback, useEffect, useRef, useState} from 'react';

import {AxiosResponse} from 'axios';

//  navigation
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../routes/types';

//  redux
import {useDispatch} from 'react-redux';
import {addSelectedPokemon} from '../../redux/slices/pokemon';

//  services
import api from '../../services/api';
import {PokemonState} from '../../types/types';

type NavigationProps = NativeStackNavigationProp<
  AppStackParamList,
  'PokemonScreen'
>;

interface HookProps {
  url: string;
}

interface ReturnType {
  item: PokemonState['selectedPokemon'];
  onNavigation: () => void;
}

export function useItem({url}: HookProps): ReturnType {
  const [item, setItem] = useState<PokemonState['selectedPokemon']>(
    {} as PokemonState['selectedPokemon'],
  );

  const isMounted = useRef<boolean | null>(null);

  const dispatch = useDispatch();

  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onNavigation = useCallback(() => {
    try {
      dispatch(addSelectedPokemon({selectedPokemon: {...item}}));

      navigation.navigate('PokemonScreen');
    } catch {
      // failed to retrieve pokemon data
    }
  }, [dispatch, navigation, item]);

  const onPokemonDataRequest = useCallback(async () => {
    try {
      const response: AxiosResponse<PokemonState['selectedPokemon']> =
        await api.get(url);

      isMounted.current && setItem({...response.data});
    } catch {
      // request failed
    }
  }, [url]);

  useEffect(() => {
    onPokemonDataRequest();
  }, [onPokemonDataRequest]);

  return {
    item,
    onNavigation,
  };
}
