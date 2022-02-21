import React from 'react';
import {BackArrow} from '../../../assets/svg/back-arrow';

//  navigation
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../../routes/types';

//  styles
import {
  FooterButton,
  FooterButtonContainer,
  FooterContainer,
  FooterText,
} from './styles';

type NavigationProps = NativeStackNavigationProp<
  AppStackParamList,
  'FavoriteScreen'
>;

export const FooterComponent: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <FooterContainer>
      <FooterButton onPress={() => navigation.goBack()}>
        <FooterButtonContainer>
          <BackArrow width={25} height={40} />
          <FooterText>Voltar</FooterText>
        </FooterButtonContainer>
      </FooterButton>
    </FooterContainer>
  );
};
