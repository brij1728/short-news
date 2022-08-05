import * as React from 'react';

import { Card, Paragraph, Text, Title } from 'react-native-paper';
import { Linking, StyleSheet } from 'react-native';

import { Article } from '../../../api/types';

type NewsCardProps = {
  article: Article;
};

export const NewsCard = ({ article }: NewsCardProps) => {
  return (
    <Card style={styles.newsCard} onPress={() => Linking.openURL(article.link)}>
      <Title>{article.title}</Title>
      {article.media && (
        <Card.Cover
          source={{ uri: article.media }}
          style={{ width: '100%', height: 400 }}
        />
      )}
      <Card.Content>
        <Paragraph>{article.summary}</Paragraph>
        <Text> </Text>
      </Card.Content>

      <Card.Actions>
        <Text
          style={{ color: 'blue' }}
          onPress={() => Linking.openURL(article.link)}
        >
          Click here for source article
        </Text>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  newsCard: {
    margin: 10,
  },
});
