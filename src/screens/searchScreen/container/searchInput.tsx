import React, {useRef} from 'react';
import {TouchableWithoutFeedback, TextInput} from 'react-native';

//  styles
import {InputLabel, InputWrapper, StyledInput, SVGContainer} from './styles';

//  svg
import {MagnifyingGlass} from '../../../assets/svg/magnifyingGlass';
import {CloseIcon} from '../../../assets/svg/closeIcon';

interface SearchInputProps {
  onPokemonSearch: () => Promise<void>;
  onSearchReset: () => void;
  setSearchInput: (searchInput: string) => void;
  isSearchCompleted: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  onPokemonSearch,
  onSearchReset,
  setSearchInput,
  isSearchCompleted,
}) => {
  const ref = useRef<TextInput | null>(null);

  return (
    <InputWrapper>
      <InputLabel>Buscar</InputLabel>
      <StyledInput
        onChangeText={text => setSearchInput(text)}
        onSubmitEditing={onPokemonSearch}
        ref={ref}
      />
      <TouchableWithoutFeedback
        onPress={
          isSearchCompleted
            ? () => {
                onSearchReset();
                ref.current?.clear();
              }
            : () => onPokemonSearch()
        }>
        <SVGContainer>
          {isSearchCompleted ? (
            <CloseIcon width={19} height={19} />
          ) : (
            <MagnifyingGlass width={17} height={17} />
          )}
        </SVGContainer>
      </TouchableWithoutFeedback>
    </InputWrapper>
  );
};
