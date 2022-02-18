import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Heart} from '../../../assets/svg/heart';

//  styles
import {HeartIconContainer} from './styles';

export const IconButton: React.FC = () => {
  return (
    <TouchableWithoutFeedback onPress={() => console.log('pressed')}>
      <HeartIconContainer>
        <Heart width={30} height={18} />
      </HeartIconContainer>
    </TouchableWithoutFeedback>
  );
};
