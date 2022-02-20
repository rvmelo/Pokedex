import React from 'react';
import {StatsContainer, StatsTitle, StatsWrapper} from './styles';

import {PokemonTypes, StatsTypes} from '../../../types/types';
import {StatItem} from './statItem';

interface StatsProps {
  stats: {
    base_stat: number;
    stat: {
      name: StatsTypes['types'];
    };
  }[];
  type: PokemonTypes['types'];
}

export const PokemonStats: React.FC<StatsProps> = ({stats, type}) => {
  return (
    <StatsContainer>
      <StatsTitle type={type}>Base Stats</StatsTitle>
      <StatsWrapper>
        {stats.map(element => (
          <StatItem
            key={element?.stat?.name}
            name={element?.stat?.name}
            value={element?.base_stat}
            type={type}
          />
        ))}
      </StatsWrapper>
    </StatsContainer>
  );
};
