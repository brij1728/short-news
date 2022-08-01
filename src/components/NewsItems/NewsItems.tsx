import { ScrollView, StyleSheet } from "react-native";

import { Article } from "../../api/types";
import { NewsCard } from "../cards";
import React from "react";

type NewsType = {
  articles: Article[];
};

export const NewsItems = ({ articles }: NewsType) => {
  return (
    <ScrollView style={styles.container}>
      {articles.map((article) => {
        return (
          <NewsCard
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
