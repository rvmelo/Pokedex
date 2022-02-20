import React, {useMemo} from 'react';
import {
  StatItemContainer,
  StatsBar,
  StatsBarIndicator,
  StatsLabelWrapper,
  StatsText,
  StatsValueText,
} from './styles';

import {PokemonTypes, StatsTypes} from '../../../types/types';

interface StatsFormattedTypes {
  types:
    | 'hp'
    | 'attack'
    | 'defense'
    | 'special_attack'
    | 'special_defense'
    | 'speed';
}

interface StatItemProps {
  type: PokemonTypes['types'];
  name: StatsTypes['types'];
  value: number;
}

export const StatItem: React.FC<StatItemProps> = ({type, name, value}) => {
  const statsLabels = {
    hp: 'HP',
    attack: 'ATK',
    defense: 'DEF',
    special_attack: 'SATK',
    special_defense: 'SDEF',
    speed: 'SPD',
  };

  const formattedValue = useMemo(() => {
    if (value < 10) {
      return `00${value}`;
    }

    return value > 10 && value < 100 ? `0${value}` : `${value}`;
  }, [value]);

  const maximumValue = 250;
  const barIndicatorFactor = value / maximumValue;

  const formattedName: StatsFormattedTypes['types'] = name.replace(
    '-',
    '_',
  ) as StatsFormattedTypes['types'];

  return (
    <StatItemContainer>
      <StatsLabelWrapper>
        <StatsText type={type}>{statsLabels[formattedName]}</StatsText>
      </StatsLabelWrapper>
      <StatsValueText>{formattedValue}</StatsValueText>
      <StatsBar type={type}>
        <StatsBarIndicator multiplyFactor={barIndicatorFactor} type={type} />
      </StatsBar>
    </StatItemContainer>
  );
};
