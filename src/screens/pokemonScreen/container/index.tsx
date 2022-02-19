import React, {useMemo} from 'react';

//  redux
import {useAppSelector} from '../../../redux/slices/pokemon';
import Board from './board';
import {Header} from './header';

//  styles
import {Container} from './styles';

const PokemonScreen: React.FC = () => {
  const {selectedPokemon} = useAppSelector(state => state.pokemonReducer) || {};

  const {types, name, id} = selectedPokemon;

  const typeName = types ? types[0]?.type?.name : 'normal';

  const formattedId = useMemo(() => {
    if (id < 10) {
      return `#00${id}`;
    }

    return id > 10 && id < 100 ? `#0${id}` : `#${id}`;
  }, [id]);

  const formattedName = name[0].toUpperCase() + name.substring(1);

  return (
    <Container type={typeName}>
      <Header name={formattedName} id={formattedId} />
      <Board pokemon={selectedPokemon} />
    </Container>
  );
};

export default PokemonScreen;
