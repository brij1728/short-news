import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { ActivityIndicator, Appbar } from 'react-native-paper';

import { searchNewsByKeyword } from '../../api/client';
import { SearchResults } from '../../api/types';
import { Search } from '../../components';
import { NewsItems } from '../../components/NewsItems';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export const Home = () => {
  const debouncetimeoutRef = React.useRef<number | undefined>(undefined);
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<SearchResults | null>(null);
  const [searchKeyword, setSearchKeyword] = React.useState('Bengaluru');

  React.useEffect(() => {
    window.clearTimeout(debouncetimeoutRef.current);
    debouncetimeoutRef.current = window.setTimeout(() => {
      setLoading(true);
      searchNewsByKeyword({
        keyword: searchKeyword,
      })
        .then((x) => setData(x))
        .finally(() => setLoading(false));
    }, 500);
  }, [searchKeyword]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Appbar.Header>
          <Appbar.Content title="News In Shorts" />
          {/* <Appbar.Action icon="magnify" onPress={() => {}} />
          <Appbar.Action icon={MORE_ICON} onPress={() => {}} /> */}
        </Appbar.Header>
        <Search searchKeyword={searchKeyword} setSearch={setSearchKeyword} />
      </View>

      <View style={styles.main}>
        {!searchKeyword.trim() ? (
          <Text>Search for news...</Text>
        ) : isLoading ? (
          <ActivityIndicator />
        ) : data?.articles ? (
          <NewsItems articles={data?.articles} />
        ) : (
          <Text>No results</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    flexShrink: 1,
    width: '100%',
  },
  main: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
