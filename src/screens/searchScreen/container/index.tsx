import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Heart} from '../../../assets/svg/heart';

//  components
import {Header} from '../../../components/header';
import {SearchInput} from './searchInput';

//  styles
import {Container, SearchContainer} from './styles';

const SearchScreen: React.FC = () => {
  return (
    <Container>
      <Header />
      <SearchContainer>
        <SearchInput />
        <TouchableWithoutFeedback onPress={() => console.log('pressed')}>
          <Heart width={30} height={18} />
        </TouchableWithoutFeedback>
      </SearchContainer>
    </Container>
  );
};

export default SearchScreen;
