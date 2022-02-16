import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Heart} from '../../../assets/svg/heart';

//  styles
import {IconButtonContainer, SVGContainer} from './styles';

export const IconButton: React.FC = () => {
  return (
    <TouchableWithoutFeedback onPress={() => console.log('pressed')}>
      <IconButtonContainer>
        <SVGContainer>
          <Heart width={30} height={18} />
        </SVGContainer>
      </IconButtonContainer>
    </TouchableWithoutFeedback>
  );
};
