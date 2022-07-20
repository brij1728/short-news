import * as React from "react";

import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Article } from "../../../api/types";
import { Card } from "@rneui/themed";

type CardDetails = {
  articles: Article[];
  searchKeyword?: string;
};

export const NewsCard = ({ articles, searchKeyword }: CardDetails) => {
  return (
    <ScrollView>
      {articles.map((article) => {
        return (
          <View key={article._id}>
            <Card>
              {/* <Card.Title>{searchKeyword}</Card.Title> */}

              <Image
                source={{ uri: article.media }}
                style={{ width: 350, height: 400, padding: 5 }}
              />
              <Text> {article.summary}</Text>
              <Text
                style={{ color: "blue" }}
                onPress={() => Linking.openURL(article.link)}
              >
                Click here for source article
              </Text>
            </Card>
          </View>
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
