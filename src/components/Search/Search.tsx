import * as React from "react";

import { StyleSheet, View } from "react-native";

import { SearchBar } from "@rneui/themed";

interface ISearchProps {
  searchKeyword: string;
  setSearch: (value: string) => void;
}

export const Search = ({ searchKeyword, setSearch }: ISearchProps) => {
  const updateSearch = (search: string) => {
    setSearch(search);
  };
  return (
    <View>
      <SearchBar
        placeholder="Type here..."
        value={searchKeyword}
        onChangeText={updateSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
