import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Article } from '../../api/types';
import { NewsCard } from '../cards';

type NewsType = {
  articles: Article[];
};

export const NewsItems = ({ articles }: NewsType) => {
  return (
    <ScrollView style={styles.container}>
      {articles.map((article) => {
        return <NewsCard article={article} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flex: 1,
    contentInset: '0 0',
  },
});
