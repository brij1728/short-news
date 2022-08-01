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
        return (
          <NewsCard
            key={article._id}
            media={article.media}
            link={article.link}
            id={article._id}
            summary={article.summary}
            key={article._id}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
  },
});
