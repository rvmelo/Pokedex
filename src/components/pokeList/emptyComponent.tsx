import React from 'react';

import {EmptyContainer, EmptyText, EmptyTitleText} from './styles';

export const EmptyComponent: React.FC = () => {
  return (
    <EmptyContainer>
      <EmptyTitleText>Ops</EmptyTitleText>
      <EmptyText>Este pokemon não está aqui ;(</EmptyText>
    </EmptyContainer>
  );
};
