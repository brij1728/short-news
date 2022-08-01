import * as React from 'react';
import { Text } from 'react-native';

import { searchNewsByKeyword } from '../../api/client';
import { SearchResults } from '../../api/types';
import { NewsItems } from '../../components/NewsItems';

export const Home = () => {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<SearchResults | null>(null);
  const [search, setSearch] = React.useState('india');
  React.useEffect(() => {
    searchNewsByKeyword({
      keyword: 'भारत',
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
