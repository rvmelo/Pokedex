import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';

//  types
import {Pokemon} from '../../types/types';
import {PokeListItem} from './pokeListItem';

interface PokeListProps {
  list: Pokemon[];
  footerComponent?: React.ComponentType;
  emptyComponent?: React.ComponentType;
  onListEnd?: () => void;
}

export const PokeList: React.FC<PokeListProps> = ({
  list,
  onListEnd,
  footerComponent,
  emptyComponent,
}) => {
  const renderItem: ListRenderItem<Pokemon> = useCallback(({item}) => {
    const {name, url} = item;

    return <PokeListItem name={name} url={url} />;
  }, []);

  return (
    <FlatList
      keyExtractor={item => item.url}
      data={list}
      renderItem={renderItem}
      numColumns={3}
      onEndReached={onListEnd}
      onEndReachedThreshold={0.1}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={emptyComponent}
      ListFooterComponent={footerComponent}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 41,
    alignSelf: 'center',
  },
});
