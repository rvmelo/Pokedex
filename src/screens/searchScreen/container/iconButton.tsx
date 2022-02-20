import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Heart} from '../../../assets/svg/heart';

//  navigation
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../../routes/types';

//  styles
import {HeartIconContainer} from './styles';

type NavigationProps = NativeStackNavigationProp<
  AppStackParamList,
  'FavoriteScreen'
>;

export const IconButton: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('FavoriteScreen')}>
      <HeartIconContainer>
        <Heart width={30} height={18} />
      </HeartIconContainer>
    </TouchableWithoutFeedback>
  );
};
