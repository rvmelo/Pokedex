/* eslint-disable react-native/no-inline-styles */
import React, {useMemo} from 'react';
import {SvgUri} from 'react-native-svg';

//  constants
import {sprite_url} from '../../constants/api';

//  types
import {Pokemon} from '../../types/types';

//  styles
import {IdText, ItemContainer, ItemLabel, ItemText} from './styles';

//  hooks
import {useItem} from './useItem';

export const PokeListItem: React.FC<Pokemon> = ({name, url}) => {
  const {itemData} = useItem({url});

  const {id, type} = itemData || {};

  const formattedId = useMemo(() => {
    if (id < 10) {
      return `#00${id}`;
    }

    return id > 10 && id < 100 ? `#0${id}` : `#${id}`;
  }, [id]);

  return (
    <ItemContainer type={type}>
      <IdText type={type}>{formattedId}</IdText>
      {id && (
        <SvgUri
          width="60%"
          height="60%"
          uri={id ? `${sprite_url}/${id}.svg` : ''}
          style={{position: 'absolute', bottom: '25%', alignSelf: 'center'}}
        />
      )}
      <ItemLabel type={type}>
        <ItemText>{name}</ItemText>
      </ItemLabel>
    </ItemContainer>
  );
};
