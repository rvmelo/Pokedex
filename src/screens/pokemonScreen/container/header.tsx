import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {ArrowLeft} from '../../../assets/svg/arrow-left';

//  navigation
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../../routes/types';

//  styles
import {HeaderContainer, HeaderLeftContent, HeaderText, IdText} from './styles';

type NavigationProps = NativeStackNavigationProp<
  AppStackParamList,
  'PokemonScreen'
>;

interface HeaderProps {
  name: string;
  id: string;
}

export const Header: React.FC<HeaderProps> = ({id, name}) => {
  const navigation = useNavigation<NavigationProps>();

  // TouchableWithoutFeedback should wrap HeaderLeftContent
  return (
    <HeaderContainer>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <HeaderLeftContent>
          <ArrowLeft width={24} height={32} />
          <HeaderText>{name}</HeaderText>
        </HeaderLeftContent>
      </TouchableWithoutFeedback>
      <IdText>{id}</IdText>
    </HeaderContainer>
  );
};
