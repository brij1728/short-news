import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { Searchbar } from 'react-native-paper';

interface ISearchProps {
  searchKeyword: string;
  setSearch: (value: string) => void;
}

export const Search = ({ searchKeyword, setSearch }: ISearchProps) => {
  const updateSearch = (newValue: string) => {
    setSearch(newValue);
  };
  return (
    <View style={styles.container}>
      <Searchbar
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Type here..."
        onChangeText={updateSearch}
        value={searchKeyword}
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
  },
});
