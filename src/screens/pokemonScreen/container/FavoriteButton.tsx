import React from 'react';
import {EmptyHeart} from '../../../assets/svg/emptyHeart';
import {Heart} from '../../../assets/svg/heart';
import {useFavoriteButton} from '../useFavoriteButton';

import {FavoriteIconButton, HeartIconContainer} from './styles';

interface FavoriteButtonProps {
  id: number;
  name: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({id, name}) => {
  const {isFavorite, onAddFavorite, onRemoveFavorite} = useFavoriteButton({
    id,
    name,
  });

  return (
    <FavoriteIconButton onPress={isFavorite ? onRemoveFavorite : onAddFavorite}>
      <HeartIconContainer>
        {isFavorite ? (
          <Heart width={28} height={24} />
        ) : (
          <EmptyHeart width={28} height={24} />
        )}
      </HeartIconContainer>
    </FavoriteIconButton>
  );
};
