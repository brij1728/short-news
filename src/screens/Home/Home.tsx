import * as React from "react";

import { Text, View } from "react-native";

import { SearchResults } from "../../api/types";
import { searchNewsByKeyword } from "../../api/client";

export const Home = () => {
  const [data, setData] = React.useState<SearchResults | null>(null);
  React.useEffect(() => {
    searchNewsByKeyword({
      keyword: "narendra modi",
    }).then((x) => setData(x));
  }, []);
  return <View>{data && <Text>{JSON.stringify(data, null, 2)}</Text>}</View>;
};
