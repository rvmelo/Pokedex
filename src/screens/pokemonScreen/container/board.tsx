import React from 'react';
import {PokemonState} from '../../../types/types';

// components
import {AttributeItem} from './attributeItem';
import {PokemonStats} from './pokemonStats';
import {FavoriteButton} from './FavoriteButton';

//  hooks
import {useBoard} from '../useBoard';

//  styles
import {
  DataContainer,
  BoardContainer,
  TypeContainer,
  TypesContainer,
  TypeText,
  MovesContainer,
  ItemText,
  ItemLabelText,
  PhraseContainer,
  StyledPhrase,
  AttributesWrapper,
} from './styles';

interface BoardProps {
  pokemon: PokemonState['selectedPokemon'];
}

const Board: React.FC<BoardProps> = ({pokemon}) => {
  const {types, weight, height, moves, stats, id, name} = pokemon;

  const {phrase} = useBoard({id});

  const firstMove =
    moves && moves.length >= 1
      ? moves[0]?.move?.name[0].toUpperCase() +
        moves[0]?.move?.name.substring(1)
      : undefined;
  const secondMove =
    moves && moves.length > 1
      ? moves[1]?.move?.name[0].toUpperCase() +
        moves[1]?.move?.name.substring(1)
      : undefined;

  return (
    <BoardContainer>
      <FavoriteButton id={id} name={name} />
      <TypesContainer>
        {types.map(element => (
          <TypeContainer key={element.type.name} type={element?.type?.name}>
            <TypeText>
              {element.type?.name[0].toUpperCase() +
                element.type?.name.substring(1)}
            </TypeText>
          </TypeContainer>
        ))}
      </TypesContainer>
      <DataContainer>
        <AttributesWrapper>
          <AttributeItem weight={weight} />
          <AttributeItem height={height} />
        </AttributesWrapper>
        <MovesContainer>
          <ItemText>
            {moves.length > 1 ? `${firstMove}/${secondMove}` : `${firstMove}`}
          </ItemText>
          <ItemLabelText>Moves</ItemLabelText>
        </MovesContainer>
      </DataContainer>
      <PhraseContainer>
        <StyledPhrase>{phrase}</StyledPhrase>
      </PhraseContainer>
      <PokemonStats type={types[0]?.type?.name} stats={stats} />
    </BoardContainer>
  );
};

export default Board;
