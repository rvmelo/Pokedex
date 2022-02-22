import React, {useMemo} from 'react';
import {SvgUri} from 'react-native-svg';

//  constants
import {SCREEN_WIDTH} from '../../../constants/dimensions';
import {sprite_url} from '../../../constants/api';

//  redux
import {useAppSelector} from '../../../redux/hooks';
import Board from './board';
import {Header} from './header';

//  styles
import {
  Container,
  PokeballWrapper,
  PokemonImageWrapper,
  StyledScroll,
} from './styles';
import {Pokeball} from '../../../assets/svg/pokeball';

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
    <StyledScroll type={typeName}>
      <Container type={typeName}>
        <Header name={formattedName} id={formattedId} />
        <Board pokemon={selectedPokemon} />
        <PokeballWrapper>
          <Pokeball width={0.35 * SCREEN_WIDTH} height={0.35 * SCREEN_WIDTH} />
        </PokeballWrapper>
        <PokemonImageWrapper>
          <SvgUri
            width={SCREEN_WIDTH * 0.27}
            height={SCREEN_WIDTH * 0.27}
            uri={id ? `${sprite_url}/${id}.svg` : `${sprite_url}/1.svg`}
          />
        </PokemonImageWrapper>
      </Container>
    </StyledScroll>
  );
};

export default PokemonScreen;
