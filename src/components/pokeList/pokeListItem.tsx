import React from 'react';

//  types
import {Pokemon} from '../../types/types';
import {ItemContainer, ItemLabel, ItemPhoto, ItemText} from './styles';

export const PokeListItem: React.FC<Pokemon> = ({name, url}) => {
  console.log(url);
  return (
    <ItemContainer>
      <ItemPhoto
        source={{
          uri: 'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg',
        }}
      />
      <ItemLabel>
        <ItemText>{name}</ItemText>
      </ItemLabel>
    </ItemContainer>
  );
};
