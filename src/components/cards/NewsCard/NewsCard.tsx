import * as React from 'react';
import { Image, Linking, Text, View } from 'react-native';

import { Card } from '@rneui/base';

type CardDetails = {
  searchKeyword?: string;
  media: string;
  link: string;
  id: string;
  summary: string;
};

export const NewsCard = ({ id, summary, media, link }: CardDetails) => {
  return (
    <View>
      <Card>
        <Image source={{ uri: media }} style={{ width: '100%', height: 400 }} />
        <Text> {summary}</Text>
        <Text style={{ color: 'blue' }} onPress={() => Linking.openURL(link)}>
          Click here for source article
        </Text>
      </Card>
    </View>
  );
};
