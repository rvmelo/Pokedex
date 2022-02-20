import React from 'react';
import {ArrowDown} from '../../../assets/svg/arrow-down';

import {ListFooterContainer} from './styles';

export const ListFooterComponent: React.FC = () => {
  return (
    <ListFooterContainer>
      <ArrowDown width={14} height={24} />
    </ListFooterContainer>
  );
};
