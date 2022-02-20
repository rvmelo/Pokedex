export interface Pokemon {
  name: string;
  url: string;
}

export interface StatsTypes {
  types:
    | 'hp'
    | 'attack'
    | 'defense'
    | 'special-attack'
    | 'special-defense'
    | 'speed';
}

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
export interface PokemonState {
  selectedPokemon: {
    id: number;
    name: string;
    weight: number;
    height: number;
    types: {
      type: {
        name: PokemonTypes['types'];
        url: string;
      };
    }[];
    moves: {
      move: {
        name: string;
      };
    }[];
    stats: {
      base_stat: number;
      stat: {
        name: StatsTypes['types'];
      };
    }[];
  };
}
