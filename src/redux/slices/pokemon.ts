import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PokemonState} from '../../types/types';

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

export const {addSelectedPokemon} = pokemonSlice.actions;
export default pokemonSlice.reducer;
