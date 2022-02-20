import React from 'react';
import {useTheme} from 'styled-components';
import {Scale} from '../../../assets/svg/scale';
import {Weight} from '../../../assets/svg/weight';

import {
  AttributesItemContainer,
  ItemValueContainer,
  ItemText,
  ItemLabelText,
} from './styles';

interface AttributeProps {
  weight?: number;
  height?: number;
}

export const AttributeItem: React.FC<AttributeProps> = ({weight, height}) => {
  const theme = useTheme();

  return (
    <AttributesItemContainer>
      <ItemValueContainer>
        {weight ? (
          <Weight width={16} height={16} color={theme.colors.text} />
        ) : (
          <Scale width={8} height={16} color={theme.colors.text} />
        )}
        {weight ? (
          <ItemText>{weight / 10} kg</ItemText>
        ) : (
          <ItemText>{height ? height / 10 : 0} m</ItemText>
        )}
      </ItemValueContainer>
      <ItemLabelText>{weight ? 'Weight' : 'Height'}</ItemLabelText>
    </AttributesItemContainer>
  );
};
