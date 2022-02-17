/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SvgUri} from 'react-native-svg';

//  constants
import {sprite_url} from '../../constants/api';

//  types
import {Pokemon} from '../../types/types';

//  styles
import {ItemContainer, ItemLabel, ItemText} from './styles';

//  hooks
import {useItem} from './useItem';

export const PokeListItem: React.FC<Pokemon> = ({name, url}) => {
  const {itemData} = useItem({url});

  const {id, type} = itemData || {};

  return (
    <ItemContainer type={type}>
      <SvgUri
        width="100%"
        height="70%"
        uri={id ? `${sprite_url}/${id}.svg` : ''}
        style={{marginBottom: '3%'}}
      />
      <ItemLabel type={type}>
        <ItemText>{name}</ItemText>
      </ItemLabel>
    </ItemContainer>
  );
};
