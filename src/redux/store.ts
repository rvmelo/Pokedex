import {configureStore} from '@reduxjs/toolkit';
import pokemonReducer from './slices/pokemon';

const store = configureStore({
  reducer: {
    pokemonReducer,
  },
});

export default store;
