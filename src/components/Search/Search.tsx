import * as React from 'react';

import { StyleSheet, View } from 'react-native';

import { SearchBar } from '@rneui/themed';

interface ISearchProps {
  searchKeyword: string;
  setSearch: (value: string) => void;
}

export const Search = ({ searchKeyword, setSearch }: ISearchProps) => {
  const updateSearch = (search: string) => {
    setSearch(search);
  };
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Type here..."
        value={searchKeyword}
        onChangeText={updateSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingBottom: 16,
  },
  searchInput: {
    width: '100%',
    height: '100%',
    paddingLeft: 8,
    fontSize: 16,

  }
});