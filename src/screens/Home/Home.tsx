import * as React from 'react';

import { NewsItems } from '../../components/NewsItems';
import { Search } from '../../components';
import { SearchResults } from '../../api/types';
import { Text } from 'react-native';
import { searchNewsByKeyword } from '../../api/client';

export const Home = () => {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<SearchResults | null>(null);
  const [search, setSearch] = React.useState('Bengaluru');
  React.useEffect(() => {
    searchNewsByKeyword({
      keyword: search,
    })
      .then((x) => setData(x))
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (data?.articles) {
    return <NewsItems articles={data?.articles} />;
  }
 
  return null;
};
