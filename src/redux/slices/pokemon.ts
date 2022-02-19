import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PokemonState} from '../../types/types';

//  redux
import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {RootState} from '../store';

const initialState = {} as PokemonState;

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addSelectedPokemon(state, action: PayloadAction<PokemonState>) {
      state.selectedPokemon = {...action.payload.selectedPokemon};
    },
  },
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const {addSelectedPokemon} = pokemonSlice.actions;
export default pokemonSlice.reducer;
